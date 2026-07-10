const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcryptjs')

const supabase = createClient(
  'https://iigcabyfctidhkudotqu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZ2NhYnlmY3RpZGhrdWRvdHF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODQ2MzQyNSwiZXhwIjoyMDk0MDM5NDI1fQ.fC9zPQ29a4Q7Pnnd2QllXnLpzdUDTDCGLxyu8E0UNtI'
)

async function seed() {
  const hash = await bcrypt.hash('Victor2024!', 10)

  const { data: client, error: clientErr } = await supabase
    .from('clients')
    .upsert(
      { name: 'Victor', email: 'victor@test.com', password_hash: hash, plan: 'live' },
      { onConflict: 'email' }
    )
    .select()
    .single()

  if (clientErr) {
    console.error('Client error:', clientErr)
    process.exit(1)
  }

  console.log('Client created:', client.id)

  const { error: agentErr } = await supabase
    .from('client_agents')
    .upsert(
      {
        client_id: client.id,
        agent_slug: 'lead-generator',
        agent_name: 'Lead Generator',
        agent_type: 'lead_generator',
        output_table: 'roofing_leads',
        output_filter: {},
        status: 'active',
      },
      { onConflict: 'client_id,agent_slug' }
    )

  if (agentErr) {
    console.error('Agent error:', agentErr)
    process.exit(1)
  }

  console.log('Agent seeded')
}

seed()
