import React from 'react'
import { getAllAnalytics } from '@/lib/analyticsStore'
import Link from 'next/link'

interface AdminPageProps {
  searchParams: {
    key?: string
    source?: string
  }
}

export const dynamic = 'force-dynamic'

export default async function AdminAnalyticsPage({ searchParams }: AdminPageProps) {
  const securityKey = searchParams.key
  const expectedKey = 'qevn-telemetry-key'

  // Security Access Guard
  if (securityKey !== expectedKey) {
    return (
      <div className="min-h-screen bg-[#08090A] flex flex-col items-center justify-center p-6 text-center">
        <div className="p-8 rounded-3xl border border-red-500/20 bg-[#0A0A0A] max-w-md w-full shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h1 className="font-display text-xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-xs text-white/50 leading-relaxed mb-6 font-body">
            You do not have permission to view the visitor intelligence registry. Please verify your secure access token key.
          </p>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/[0.08] text-xs font-bold text-white transition-all font-body"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    )
  }

  // Fetch all compiled analytics
  const { sessions, leads } = await getAllAnalytics()

  // ─── CALCULATE METRICS ───
  const totalSessions = sessions.length
  
  // Total Unique Visitors (unique visitor_id)
  const uniqueVisitorsSet = new Set(sessions.map((s) => s.visitor_id))
  const totalVisitors = uniqueVisitorsSet.size

  // Consent Rate
  const consentedSessions = sessions.filter((s) => s.consent_preferences?.analytics).length
  const consentRate = totalSessions > 0 ? Math.round((consentedSessions / totalSessions) * 100) : 0

  // Conversion Rate (sessions with at least 1 lead submitted)
  // Group leads by session_id
  const convertedSessionIds = new Set(leads.map((l) => l.session_id))
  const totalConversions = convertedSessionIds.size
  const conversionRate = totalSessions > 0 ? ((totalConversions / totalSessions) * 100).toFixed(1) : '0'

  // Traffic Sources calculation
  const sourcesMap: Record<string, number> = {}
  sessions.forEach((s) => {
    let source = s.traffic_source || 'Direct'
    // clean up URL origins to keep it scannable
    if (source.startsWith('http')) {
      try {
        source = new URL(source).hostname
      } catch {}
    }
    sourcesMap[source] = (sourcesMap[source] || 0) + 1
  })
  const trafficSources = Object.entries(sourcesMap)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  // Top Landing Pages
  const landingMap: Record<string, number> = {}
  sessions.forEach((s) => {
    const landing = s.landing_page || '/'
    landingMap[landing] = (landingMap[landing] || 0) + 1
  })
  const topLandingPages = Object.entries(landingMap)
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  // Countries
  const countryMap: Record<string, number> = {}
  sessions.forEach((s) => {
    const country = s.country || 'Unknown'
    countryMap[country] = (countryMap[country] || 0) + 1
  })
  const topCountries = Object.entries(countryMap)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-[#08090A] text-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.05]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5ED68] animate-ping" />
              <span className="font-mono text-[9px] text-[#B5ED68] tracking-widest uppercase">// Intel Hub</span>
            </div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight">Visitor Intelligence</h1>
          </div>
          
          <div className="flex items-center gap-3 font-mono text-[10px] text-white/45">
            <span>DATABASE // {process.env.SUPABASE_URL ? 'SUPABASE_CLOUD' : 'LOCAL_JSON_FALLBACK'}</span>
            <span className="opacity-30">|</span>
            <span>STATUS // SYNC_ACTIVE</span>
          </div>
        </div>

        {/* ─── SUMMARY CARDS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { title: 'Total Visitors', value: totalVisitors, sub: `${totalSessions} sessions`, progress: 100, color: '#B5ED68' },
            { title: 'Consent Rate', value: `${consentRate}%`, sub: `${consentedSessions} opt-ins`, progress: consentRate, color: '#B5ED68' },
            { title: 'Conversions', value: totalConversions, sub: `${conversionRate}% conversion rate`, progress: Math.min(100, Math.round(Number(conversionRate) * 10)), color: '#B5ED68' },
            { title: 'Total Leads', value: leads.length, sub: 'Contact submissions', progress: 100, color: '#B5ED68' }
          ].map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] space-y-4">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">{card.title}</span>
              <div>
                <span className="font-display text-4xl font-extrabold text-white">{card.value}</span>
                <span className="text-xs text-white/45 block mt-1 font-body">{card.sub}</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${card.progress}%`, backgroundColor: card.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* ─── MAIN TABLES ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top Traffic & Top Landing */}
          <div className="space-y-8 lg:col-span-1">
            
            {/* Traffic Sources */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] space-y-6">
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-wider">// Traffic Sources</h3>
              <div className="space-y-4">
                {trafficSources.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-white/70 font-body">{item.source}</span>
                    <span className="font-mono font-bold text-[#B5ED68]">{item.count} hits</span>
                  </div>
                ))}
                {trafficSources.length === 0 && (
                  <div className="text-xs text-white/30 italic">No traffic source recorded yet.</div>
                )}
              </div>
            </div>

            {/* Landing Pages */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] space-y-6">
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-wider">// Top Landing Pages</h3>
              <div className="space-y-4">
                {topLandingPages.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-white/70 font-body max-w-[200px] truncate">{item.page}</span>
                    <span className="font-mono font-bold text-white/80">{item.count} sessions</span>
                  </div>
                ))}
                {topLandingPages.length === 0 && (
                  <div className="text-xs text-white/30 italic">No pageviews recorded yet.</div>
                )}
              </div>
            </div>

            {/* Countries */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] space-y-6">
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-wider">// Visitors By Country</h3>
              <div className="space-y-4">
                {topCountries.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-white/70 font-body">{item.country}</span>
                    <span className="font-mono font-bold text-white/85">{item.count}</span>
                  </div>
                ))}
                {topCountries.length === 0 && (
                  <div className="text-xs text-white/30 italic">No geographic data logged.</div>
                )}
              </div>
            </div>

          </div>

          {/* Lead Forms Captured */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] flex flex-col justify-between space-y-6 min-h-[500px]">
            <div>
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-wider mb-6">// Inbound Form Leads</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.05] text-[10px] font-mono text-white/30 uppercase tracking-wider">
                      <th className="pb-3 pr-4">Contact</th>
                      <th className="pb-3 pr-4">Company</th>
                      <th className="pb-3 pr-4">Inquiry / Message</th>
                      <th className="pb-3 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.03] text-xs font-body">
                    {leads.map((lead) => {
                      const session = sessions.find((s) => s.session_id === lead.session_id)
                      const referrer = session?.traffic_source || 'Direct'
                      
                      return (
                        <tr key={lead.id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-4 pr-4">
                            <span className="font-bold text-white block">{lead.name}</span>
                            <span className="text-white/45 text-[11px] block mt-0.5">{lead.email}</span>
                          </td>
                          <td className="py-4 pr-4">
                            <span className="text-white/80 block">{lead.company}</span>
                            <span className="text-[10px] font-mono text-white/30 block mt-0.5">Src: {referrer.replace('http://', '').replace('https://', '').split('/')[0]}</span>
                          </td>
                          <td className="py-4 pr-4 max-w-xs">
                            <span className="inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/50 mb-1">
                              {lead.inquiry_type || 'Contact Form'}
                            </span>
                            <p className="text-white/60 leading-relaxed line-clamp-2">{lead.message}</p>
                          </td>
                          <td className="py-4 text-right text-white/45 font-mono text-[10px]">
                            {new Date(lead.created_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                        </tr>
                      )
                    })}
                    {leads.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-xs text-white/30 italic">
                          No inbound form submissions recorded.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/30">
              <span>TOTAL_RECORDS // {leads.length} LEADS</span>
              <span>PAGINATION // 1 OF 1</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
