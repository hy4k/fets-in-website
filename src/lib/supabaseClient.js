import { createClient } from '@supabase/supabase-js'

// നിങ്ങളുടെ Supabase URL ഉം Anon Key ഉം ഉപയോഗിക്കുക
const supabaseUrl = 'https://mwyhfydwdelmspncmopr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13eWhmeWR3ZGVsbXNwbmNtb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDg3NTksImV4cCI6MjA1OTcyNDc1OX0.JSEFEbc_QRNKF-pvK2-4I9aO-2AGjIp1Qk6CObKuntc'

// Supabase ക്ലയന്റ് ഉണ്ടാക്കുക
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 