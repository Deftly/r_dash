import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jwclxzkftrkupyjaawmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Y2x4emtmdHJrdXB5amFhd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxOTk3NjMsImV4cCI6MjAxNTc3NTc2M30.PKMBF4a7e94xIlhnKYWCmD7YtEhL7032ovEtCXqQxa4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
