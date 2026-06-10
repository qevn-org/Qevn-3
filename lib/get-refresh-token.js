const { google } = require('googleapis')
const readline = require('readline')
const fs = require('fs')
const path = require('path')

// Load credentials from environment or .env.local
let CLIENT_ID = process.env.GOOGLE_CLIENT_ID
let CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
let REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'https://www.qevn.in'

try {
  const envPath = path.join(__dirname, '../.env.local')
  if (fs.existsSync(envPath)) {
    const dotenvContent = fs.readFileSync(envPath, 'utf8')
    dotenvContent.split('\n').forEach(line => {
      if (line && !line.startsWith('#')) {
        const parts = line.split('=')
        if (parts.length >= 2) {
          const key = parts[0].trim()
          const val = parts.slice(1).join('=').trim()
          if (key === 'GOOGLE_CLIENT_ID') CLIENT_ID = val
          if (key === 'GOOGLE_CLIENT_SECRET') CLIENT_SECRET = val
          if (key === 'GOOGLE_REDIRECT_URI') REDIRECT_URI = val
        }
      }
    })
  }
} catch (e) {
  // Ignore
}

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('\nError: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env.local or environment.\n')
  process.exit(1)
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

// Generate the authorization URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent', // Force refresh token generation
  scope: ['https://www.googleapis.com/auth/calendar']
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('\n=============================================')
console.log('GOOGLE CALENDAR AUTHORIZATION UTILITY')
console.log('=============================================\n')
console.log('1. Open the following URL in your browser and log in:\n')
console.log(`   ${authUrl}\n`)
console.log('2. After granting permissions, the browser will redirect to a page')
console.log('   that might not load (e.g., http://localhost:3000/?code=4/xxxx...).')
console.log('3. Copy the "code" query parameter from the address bar.\n')

rl.question('4. Paste the authorization code here: ', async (code) => {
  try {
    rl.close()
    
    if (!code) {
      console.error('Error: Code cannot be empty.')
      process.exit(1)
    }

    // Trim code of any surrounding spaces or query remnants
    const cleanCode = decodeURIComponent(code.trim().replace(/^code=/, ''))

    console.log('\nExchanging authorization code for refresh tokens...')
    const { tokens } = await oauth2Client.getToken(cleanCode)

    console.log('\n=============================================')
    console.log('GOOGLE CREDENTIALS SUCCESS!')
    console.log('=============================================\n')
    console.log('Copy the following variables into your .env.local file:\n')
    console.log(`GOOGLE_CLIENT_ID=${CLIENT_ID}`)
    console.log(`GOOGLE_CLIENT_SECRET=${CLIENT_SECRET}`)
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`)
    console.log('\n=============================================\n')
    
    process.exit(0)
  } catch (err) {
    console.error('\nError exchanging code for tokens:', err.message || err)
    process.exit(1)
  }
})
