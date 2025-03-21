const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zgmtuktswidofyecmksr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbXR1a3Rzd2lkb2Z5ZWNta3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyODEwOTgsImV4cCI6MjA1Nzg1NzA5OH0.Js5_yNPE0DPjRGOZlU40pkssFn7FpXgoXoAwp7Pjnq8';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase; 
