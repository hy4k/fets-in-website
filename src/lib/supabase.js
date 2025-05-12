
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwyhfydwdelmspncmopr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13eWhmeWR3ZGVsbXNwbmNtb3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDg3NTksImV4cCI6MjA1OTcyNDc1OX0.JSEFEbc_QRNKF-pvK2-4I9aO-2AGjIp1Qk6CObKuntc';

export const supabase = createClient(supabaseUrl, supabaseKey);
