import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type Category = 'all' | 'cloud' | 'data' | 'security' | 'platform'

interface Integration {
  name: string
  category: Category
}

const integrations: Integration[] = [
  { name: 'AWS', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: 'Google Cloud', category: 'cloud' },
  { name: 'Salesforce', category: 'platform' },
  { name: 'HubSpot', category: 'platform' },
  { name: 'Shopify', category: 'platform' },
  { name: 'Stripe', category: 'platform' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MongoDB', category: 'data' },
  { name: 'Redis', category: 'data' },
  { name: 'Snowflake', category: 'data' },
  { name: 'Okta', category: 'security' },
  { name: 'Auth0', category: 'security' },
  { name: 'Cloudflare', category: 'security' },
  { name: 'Datadog', category: 'platform' },
  { name: 'Slack', category: 'platform' },
  { name: 'Twilio', category: 'platform' },
  { name: 'SendGrid', category: 'platform' },
  { name: 'Elasticsearch', category: 'data' },
  { name: 'Kubernetes', category: 'cloud' },
]

export function IntegrationsCloud() {
  const [filter, setFilter] = useState<Category>('all')

  const filtered = filter === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === filter)

  return (
    <section className="py-16 md:py-24 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Integrations</h2>
          <p className="text-muted-foreground max-w-2xl">
            Connect with the tools and platforms you already use
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {(['all', 'cloud', 'data', 'security', 'platform'] as Category[]).map((cat) => (
            <Badge
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer capitalize px-4 py-2 transition-all',
                filter === cat && 'bg-primary text-primary-foreground'
              )}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {filtered.map((integration, i) => (
              <div
                key={integration.name}
                className="glass-panel rounded-lg border border-border px-6 py-4 hover:border-accent transition-all hover:scale-105"
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <span className="font-medium text-sm whitespace-nowrap">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
