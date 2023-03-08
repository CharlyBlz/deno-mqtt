// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient("https://frqeptoeeoyjaipcynip.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycWVwdG9lZW95amFpcGN5bmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NTk0NzAsImV4cCI6MTk5MjIzNTQ3MH0.1cDqSRfYw2qACKURNrZyyP4OU0u2ag_YZLOYzgtPhQ0")

let { error1 } = await supabase
  .from('wx_meas')
  .insert({ 
        "created_at": new Date(1677776697*1000), 
        "temperature": 25.1562,
        "atm_pressure": 951.213,
        "rel_humidity": 61.520,
        "wind_speed": 0,
        "soil_moisture": 0,
        "device_id": 1,
        "device_name": "E1",
    })

let { data, error } = await supabase
    .from('wx_meas')
    .select()
    console.log(data)