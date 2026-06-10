-- SQL Migration Script for QEVN Careers Portal
-- Run this in the Supabase SQL Editor (https://supabase.com)

-- 1. Create the career_applications table
CREATE TABLE IF NOT EXISTS public.career_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    linkedin_url TEXT,
    portfolio_url TEXT,
    location TEXT NOT NULL,
    years_experience INT NOT NULL,
    selected_role TEXT NOT NULL,
    custom_role TEXT,
    why_join_qevn TEXT NOT NULL,
    achievement TEXT NOT NULL,
    resume_url TEXT NOT NULL,
    interview_type TEXT NOT NULL,
    scheduled_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT DEFAULT 'New'::text NOT NULL,
    notes TEXT DEFAULT ''::text NOT NULL,
    is_archived BOOLEAN DEFAULT false NOT NULL,
    google_meet_url TEXT DEFAULT ''::text NOT NULL,
    calendar_event_id TEXT DEFAULT ''::text NOT NULL
);

-- Index optimizations for searching and filtering
CREATE INDEX IF NOT EXISTS idx_career_applications_role ON public.career_applications(selected_role);
CREATE INDEX IF NOT EXISTS idx_career_applications_status ON public.career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON public.career_applications(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

-- 2. Define access policies
-- Allow anyone to submit an application (INSERT)
CREATE POLICY "Allow anonymous submissions" 
ON public.career_applications 
FOR INSERT 
WITH CHECK (true);

-- Allow full access to service_role / service scripts for admin dashboard
CREATE POLICY "Allow service role full access" 
ON public.career_applications 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- 3. Create storage bucket for career-resumes
INSERT INTO storage.buckets (id, name, public)
VALUES ('career-resumes', 'career-resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Policies for public storage read access and anonymous uploads
CREATE POLICY "Public Read Access for Resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'career-resumes');

CREATE POLICY "Anonymous Upload Access for Resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'career-resumes');

-- 4. Alter table statements for existing databases
ALTER TABLE public.career_applications ADD COLUMN IF NOT EXISTS google_meet_url TEXT DEFAULT ''::text NOT NULL;
ALTER TABLE public.career_applications ADD COLUMN IF NOT EXISTS calendar_event_id TEXT DEFAULT ''::text NOT NULL;
