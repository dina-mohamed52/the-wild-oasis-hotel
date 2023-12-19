import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://drsgmemdvwanqsgujocv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyc2dtZW1kdndhbnFzZ3Vqb2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDUwNjksImV4cCI6MjAxNTk4MTA2OX0.nVlJT1jQBk0ykrvBGuKuNWLDdcCzWnEkdQ-gk74PKDY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
