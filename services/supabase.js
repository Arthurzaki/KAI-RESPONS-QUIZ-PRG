import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lorjpmogwvenokmlxejb.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcmpwbW9nd3Zlbm9rbWx4ZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNTIzOTksImV4cCI6MjA5MzYyODM5OX0.2XMhla_-jlfpxA2NCwl__RirCRMwFNei5XLCVhVZeUo'; 
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);