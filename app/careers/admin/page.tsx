'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import { 
  Search, Filter, FileDown, Eye, Check, X, RefreshCw, 
  Archive, FileText, Calendar, MessageSquare, Briefcase, MapPin, Award 
} from 'lucide-react'

// Distinct color styling for statuses
const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'New': { bg: 'rgba(59, 130, 246, 0.1)', text: '#60a5fa', border: 'rgba(59, 130, 246, 0.2)' },
  'Reviewed': { bg: 'rgba(139, 92, 246, 0.1)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.2)' },
  'Interview Scheduled': { bg: 'rgba(236, 72, 153, 0.1)', text: '#f472b6', border: 'rgba(236, 72, 153, 0.2)' },
  'Shortlisted': { bg: 'rgba(20, 184, 166, 0.1)', text: '#2dd4bf', border: 'rgba(20, 184, 166, 0.2)' },
  'Offer Sent': { bg: 'rgba(234, 179, 8, 0.1)', text: '#facc15', border: 'rgba(234, 179, 8, 0.2)' },
  'Rejected': { bg: 'rgba(239, 68, 68, 0.1)', text: '#f87171', border: 'rgba(239, 68, 68, 0.2)' },
  'Hired': { bg: 'rgba(200, 240, 75, 0.1)', text: '#c8f04b', border: 'rgba(200, 240, 75, 0.2)' },
}

interface Application {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone: string
  linkedin_url: string
  portfolio_url: string
  location: string
  years_experience: number
  selected_role: string
  custom_role: string
  why_join_qevn: string
  achievement: string
  resume_url: string
  interview_type: string
  scheduled_datetime: string
  status: string
  notes: string
  is_archived: boolean
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  
  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showArchived, setShowArchived] = useState(false)
  
  // App UI States
  const [loading, setLoading] = useState(true)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [notesText, setNotesText] = useState('')

  // Unique roles present in database
  const [allRoles, setAllRoles] = useState<string[]>([])

  // Fetch applications from API
  const fetchApplications = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/careers/admin?archived=${showArchived}`)
      if (res.ok) {
        const data = await res.json()
        const apps = data.applications || []
        setApplications(apps)

        // Populate unique roles for filter dropdown
        const roles = Array.from(new Set(apps.map((a: Application) => a.selected_role))) as string[]
        setAllRoles(roles)
      }
    } catch (err) {
      console.error('Failed to load applications:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApplications()
  }, [showArchived])

  // Sync details panel notes text when candidate is selected
  useEffect(() => {
    if (selectedApp) {
      setNotesText(selectedApp.notes || '')
    } else {
      setNotesText('')
    }
  }, [selectedApp])

  // Update Status / Notes / Archive
  const handleUpdate = async (fields: Partial<Application>) => {
    if (!selectedApp) return
    setUpdatingId(selectedApp.id)

    try {
      const res = await fetch('/api/careers/admin', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedApp.id,
          ...fields,
        })
      })

      if (res.ok) {
        const data = await res.json()
        if (data.success) {
          // Update local state list
          setApplications(prev => prev.map(app => 
            app.id === selectedApp.id ? { ...app, ...fields } : app
          ))
          setSelectedApp(prev => prev ? { ...prev, ...fields } : null)
        }
      }
    } catch (err) {
      console.error('Failed to update candidate application:', err)
    } finally {
      setUpdatingId(null)
    }
  }

  // Export to CSV Function
  const exportToCSV = () => {
    if (applications.length === 0) return

    const headers = [
      'ID', 'Submitted At', 'First Name', 'Last Name', 'Email', 'Phone', 
      'Location', 'Experience (Years)', 'Selected Role', 'Custom Role Proposal', 
      'Proposal/Motivation', 'Proud Achievement', 'Interview Type', 
      'Scheduled Date/Time', 'Status', 'Notes', 'LinkedIn', 'Portfolio', 'Resume Link'
    ]

    const rows = applications.map(app => [
      app.id,
      new Date(app.created_at).toLocaleString(),
      app.first_name,
      app.last_name,
      app.email,
      app.phone,
      app.location,
      app.years_experience,
      app.selected_role,
      app.custom_role || '',
      app.why_join_qevn.replace(/"/g, '""'),
      app.achievement.replace(/"/g, '""'),
      app.interview_type,
      new Date(app.scheduled_datetime).toLocaleString(),
      app.status,
      app.notes.replace(/"/g, '""'),
      app.linkedin_url || '',
      app.portfolio_url || '',
      app.resume_url
    ])

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n')
    
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `qevn_career_applications_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filter application list based on filters
  const filteredApplications = applications.filter((app) => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch = 
      app.first_name.toLowerCase().includes(searchLower) ||
      app.last_name.toLowerCase().includes(searchLower) ||
      app.email.toLowerCase().includes(searchLower) ||
      (app.custom_role && app.custom_role.toLowerCase().includes(searchLower))

    const matchesRole = roleFilter === 'All' || app.selected_role === roleFilter
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  return (
    <InnerPageLayout>
      <section className="relative overflow-hidden pb-24 pt-[calc(var(--layout-chrome-top,104px)+1.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3rem)] min-h-[90vh]">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(200,240,75,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7.5xl mx-auto px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-primary block mb-1">
                Admin Console
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
                Career Applications
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm" onClick={fetchApplications}>
                <RefreshCw className="w-4 h-4" /> Refresh
              </Button>
              <Button variant="primary" size="sm" onClick={exportToCSV} className="font-bold">
                <FileDown className="w-4 h-4" /> Export CSV
              </Button>
            </div>
          </div>

          {/* Filtering bar */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-6 mb-8 flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search name, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/20 outline-none rounded-xl pl-10 pr-4 py-2 text-sm text-text-primary transition-all"
                />
                <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Filter by Role */}
              <div className="relative">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 outline-none rounded-xl px-4 py-2 text-sm text-text-primary appearance-none cursor-pointer"
                >
                  <option value="All" className="bg-bg-base text-text-primary">All Roles</option>
                  {allRoles.map(r => (
                    <option key={r} value={r} className="bg-bg-base text-text-primary">{r}</option>
                  ))}
                  <option value="None Of These. I Want To Build Something New." className="bg-bg-base text-accent-primary">Custom Proposals</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                  <Filter className="w-4 h-4" />
                </div>
              </div>

              {/* Filter by Status */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 outline-none rounded-xl px-4 py-2 text-sm text-text-primary appearance-none cursor-pointer"
                >
                  <option value="All" className="bg-bg-base">All Statuses</option>
                  {Object.keys(STATUS_COLORS).map(s => (
                    <option key={s} value={s} className="bg-bg-base">{s}</option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                  <Filter className="w-4 h-4" />
                </div>
              </div>

              {/* Toggle Archived */}
              <button
                type="button"
                onClick={() => setShowArchived(prev => !prev)}
                className={`py-2 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  showArchived 
                    ? 'border-accent-primary/40 bg-accent-primary/5 text-accent-primary'
                    : 'border-white/10 hover:border-white/20 text-text-muted hover:text-text-primary'
                }`}
              >
                <Archive className="w-4 h-4" />
                {showArchived ? 'Showing Archived' : 'Show Archived'}
              </button>
            </div>
            
            <div className="text-xs font-mono text-text-muted self-center mt-2 lg:mt-0">
              Total Found: {filteredApplications.length}
            </div>
          </div>

          {/* Table Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Applications list */}
            <div className={`bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden ${
              selectedApp ? 'lg:col-span-7' : 'lg:col-span-12'
            } transition-all duration-300`}>
              
              {loading ? (
                <div className="flex justify-center items-center py-24">
                  <div className="w-10 h-10 border-4 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin" />
                </div>
              ) : filteredApplications.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-text-muted text-base italic">No candidates match the chosen filters.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.01]">
                        <th className="p-4 pl-6 text-[10px] font-mono uppercase tracking-widest text-text-muted">Candidate</th>
                        <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-text-muted">Role</th>
                        <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-text-muted">Time (IST)</th>
                        <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-text-muted">Status</th>
                        <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-text-muted text-right pr-6">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredApplications.map((app) => {
                        const dateObj = new Date(app.scheduled_datetime)
                        const formattedTime = dateObj.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        }) + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        
                        const isSelected = selectedApp?.id === app.id
                        const colors = STATUS_COLORS[app.status] || STATUS_COLORS.New

                        return (
                          <tr 
                            key={app.id}
                            onClick={() => setSelectedApp(app)}
                            className={`group cursor-pointer transition-colors duration-150 ${
                              isSelected ? 'bg-accent-primary/[0.04]' : 'hover:bg-white/[0.01]'
                            }`}
                          >
                            <td className="p-4 pl-6">
                              <div className="font-semibold text-text-primary text-sm">
                                {app.first_name} {app.last_name}
                              </div>
                              <div className="text-xs text-text-muted font-mono">{app.email}</div>
                            </td>
                            <td className="p-4">
                              <div className="text-sm font-medium text-text-primary">
                                {app.selected_role === 'None Of These. I Want To Build Something New.' 
                                  ? app.custom_role 
                                  : app.selected_role}
                              </div>
                              <div className="text-xs text-text-muted">
                                {app.selected_role === 'None Of These. I Want To Build Something New.' ? 'Custom Proposal' : 'Regular Role'}
                              </div>
                            </td>
                            <td className="p-4 text-xs font-mono text-text-muted">
                              {formattedTime}
                            </td>
                            <td className="p-4">
                              <span 
                                className="inline-block text-[10px] font-semibold font-mono uppercase px-2.5 py-1 rounded-full border"
                                style={{
                                  backgroundColor: colors.bg,
                                  color: colors.text,
                                  borderColor: colors.border
                                }}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="p-4 text-right pr-6">
                              <button
                                type="button"
                                className="inline-flex p-2 rounded-lg bg-white/5 hover:bg-accent-primary/15 hover:text-accent-primary transition-all text-text-muted group-hover:text-text-primary"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Right side: Detailed Information panel */}
            <AnimatePresence>
              {selectedApp && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedApp(null)}
                    className="absolute right-4 top-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-text-muted hover:text-text-primary transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent-primary mb-4 border-b border-white/5 pb-2">
                    Application Details
                  </h3>

                  <div className="space-y-6">
                    {/* Header Details */}
                    <div>
                      <h2 className="font-display text-2xl font-extrabold text-text-primary">
                        {selectedApp.first_name} {selectedApp.last_name}
                      </h2>
                      <p className="text-sm text-text-muted font-mono mt-1">{selectedApp.email} • {selectedApp.phone}</p>
                      
                      {/* Social/Portfolio Links */}
                      <div className="flex flex-wrap gap-2.5 mt-3">
                        {selectedApp.linkedin_url && (
                          <a 
                            href={selectedApp.linkedin_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-accent-primary/10 hover:border-accent-primary/25 transition-all text-text-primary"
                          >
                            LinkedIn
                          </a>
                        )}
                        {selectedApp.portfolio_url && (
                          <a 
                            href={selectedApp.portfolio_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-accent-primary/10 hover:border-accent-primary/25 transition-all text-text-primary"
                          >
                            Portfolio / Web
                          </a>
                        )}
                        <a 
                          href={selectedApp.resume_url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-accent-primary/20 bg-accent-primary/5 hover:bg-accent-primary/15 transition-all text-accent-primary flex items-center gap-1"
                        >
                          <FileText className="w-3.5 h-3.5" /> Resume
                        </a>
                      </div>
                    </div>

                    {/* Quick Metadata */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-text-muted block">Location</span>
                        <span className="text-sm font-semibold text-text-primary flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                          {selectedApp.location}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-text-muted block">Experience</span>
                        <span className="text-sm font-semibold text-text-primary flex items-center gap-1 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                          {selectedApp.years_experience} {selectedApp.years_experience === 1 ? 'Year' : 'Years'}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-mono uppercase text-text-muted block">Scheduled Call (IST)</span>
                        <span className="text-sm font-semibold text-text-primary flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                          {selectedApp.interview_type} (
                          {new Date(selectedApp.scheduled_datetime).toLocaleDateString(undefined, { 
                            month: 'short', 
                            day: 'numeric' 
                          })} at {new Date(selectedApp.scheduled_datetime).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })})
                        </span>
                      </div>
                    </div>

                    {/* Selected Role or Custom Vision */}
                    <div className="border-t border-white/5 pt-4">
                      <span className="text-[10px] font-mono uppercase text-text-muted block mb-1">Applying For</span>
                      {selectedApp.selected_role === 'None Of These. I Want To Build Something New.' ? (
                        <div className="p-4 bg-accent-primary/[0.02] border border-accent-primary/10 rounded-xl space-y-2">
                          <span className="inline-block px-2 py-0.5 rounded bg-accent-primary/15 text-accent-primary text-[10px] font-semibold font-mono uppercase">
                            Custom Vision Proposal
                          </span>
                          <h4 className="text-sm font-bold text-text-primary">{selectedApp.custom_role}</h4>
                          <p className="text-xs text-text-muted leading-relaxed whitespace-pre-wrap">
                            {selectedApp.why_join_qevn}
                          </p>
                        </div>
                      ) : (
                        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
                          <h4 className="text-sm font-bold text-text-primary">{selectedApp.selected_role}</h4>
                          <p className="text-xs text-text-muted leading-relaxed whitespace-pre-wrap">
                            {selectedApp.why_join_qevn}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Proud Achievement */}
                    <div>
                      <span className="text-[10px] font-mono uppercase text-text-muted block mb-1.5 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-accent-primary" /> Proudest Achievement
                      </span>
                      <p className="text-xs text-text-muted bg-white/[0.01] border border-white/5 rounded-xl p-4 leading-relaxed whitespace-pre-wrap">
                        {selectedApp.achievement}
                      </p>
                    </div>

                    {/* Administrative Update Controls */}
                    <div className="border-t border-white/5 pt-4 space-y-4">
                      <span className="text-[10px] font-mono uppercase text-text-muted block">Admin Actions</span>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* Status Select */}
                        <div>
                          <label className="block text-[10px] text-text-muted mb-1 font-mono uppercase">Status</label>
                          <select
                            value={selectedApp.status}
                            onChange={(e) => handleUpdate({ status: e.target.value })}
                            disabled={updatingId !== null}
                            className="w-full bg-white/[0.03] border border-white/10 outline-none rounded-lg px-3 py-1.5 text-xs text-text-primary cursor-pointer"
                          >
                            {Object.keys(STATUS_COLORS).map(s => (
                              <option key={s} value={s} className="bg-bg-base">{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Archive Toggle */}
                        <div className="flex flex-col justify-end">
                          <button
                            type="button"
                            onClick={() => handleUpdate({ is_archived: !selectedApp.is_archived })}
                            disabled={updatingId !== null}
                            className={`w-full py-1.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                              selectedApp.is_archived
                                ? 'border-amber-500/20 bg-amber-500/5 text-amber-400 hover:bg-amber-500/10'
                                : 'border-white/10 hover:bg-white/5 text-text-muted hover:text-text-primary'
                            }`}
                          >
                            <Archive className="w-3.5 h-3.5" />
                            {selectedApp.is_archived ? 'Restore Candidate' : 'Archive Candidate'}
                          </button>
                        </div>
                      </div>

                      {/* Notes Box */}
                      <div>
                        <label className="block text-[10px] text-text-muted mb-1 font-mono uppercase">Application Notes</label>
                        <textarea
                          rows={3}
                          value={notesText}
                          onChange={(e) => setNotesText(e.target.value)}
                          placeholder="Add notes about candidate conversation, background check..."
                          className="w-full bg-white/[0.03] border border-white/10 outline-none rounded-lg p-3 text-xs text-text-primary resize-none"
                        />
                        <div className="flex justify-end mt-1.5">
                          <Button 
                            variant="primary" 
                            size="sm"
                            className="py-1 px-3 text-xs font-bold"
                            onClick={() => handleUpdate({ notes: notesText })}
                            disabled={updatingId !== null || notesText === (selectedApp.notes || '')}
                          >
                            Save Notes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
