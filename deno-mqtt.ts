// @ts-ignore
import { Client } from "https://deno.land/x/mqtt/deno/mod.ts"; // Deno (ESM)
// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

type PacketFormat = {
    H: string;
    ID: number;
    N: string;
    T: number;
    P: number;
    HR: number;
    V: number;
    HS: number;
};

// Crear conexión con Supabase
const supabase = createClient('https://frqeptoeeoyjaipcynip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycWVwdG9lZW95amFpcGN5bmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NTk0NzAsImV4cCI6MTk5MjIzNTQ3MH0.1cDqSRfYw2qACKURNrZyyP4OU0u2ag_YZLOYzgtPhQ0')

// Crear conexión con broker
const client = new Client({ url: "mqtt://broker.hivemq.com" }); // Deno and Node.js
await client.connect();
await client.subscribe("GsmClientTest/data");


const decoder = new TextDecoder();
client.on("message",    async (topic: string, payload: Uint8Array) => {
//client.on("message", (topic: string, payload: Uint8Array) => {
  
  const dataString: string = decoder.decode(payload);
  const jsonData = JSON.parse(dataString) as PacketFormat;


  // Crear conexión con Supabase
  //const supabase = createClient('https://frqeptoeeoyjaipcynip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycWVwdG9lZW95amFpcGN5bmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NTk0NzAsImV4cCI6MTk5MjIzNTQ3MH0.1cDqSRfYw2qACKURNrZyyP4OU0u2ag_YZLOYzgtPhQ0')

  // Insertar en Supabase
  //const { error } = await supabase
  const { error } = await supabase
    .from('wx_meas') //wx:abreviación de weather, y meas: abreviación de measurement
    .insert({ 
      "created_at": new Date(Number(jsonData.H)*1000), 
      "temperature": jsonData.T,
      "atm_pressure": jsonData.P,
      "rel_humidity": jsonData.HR,
      "wind_speed": jsonData.V,
      "soil_moisture": jsonData.HS,
      "device_id": jsonData.ID,
      "device_name": jsonData.N
   })
  // Leer tabla de base de datos
  
  let { data, error1 } = await supabase
   .from('wx_meas')
   .select()
    console.log(data)
  
  //console.log(new Date(jsonData.H));
  //console.log("Temperature", jsonData.T)
  //console.log(jsonData.ID)
  
});
