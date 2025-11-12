import { CloudArrowUp } from '@phosphor-icons/react'

  { name: 'Microsof
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Oracle', category: 'Enterprise' },
  { name: 'Clover', category: 'Paymen
  { name: 'Stripe', category: 'Payments' },
  { name: 'Xero', category: 'Accounting' }
  { name: 'Oracle', category: 'Enterprise' },
  { name: 'Matrix/Beeper', category: 'Communications' },
  { name: 'Clover', category: 'Payments' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Xero', category: 'Accounting' },
  { name: 'GitHub', category: 'DevOps' },
          <h2 className="text-3xl md:text
          </h2>
            Connect with the tools and platforms yo
 

            <div 
          
              <div className="font-semibold text-white mb-1 tex
              </div>
                {platform.category}
            </div>
        </div>
        <div className="mt-12 text-center">
            + Many more enterprise
        </div>
    </section>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Platforms & Integrations</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Connect with the tools and platforms you already use
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="glass-panel glass-panel-hover rounded-xl p-4 text-center group cursor-pointer"
            >
              <div className="font-semibold text-white mb-1 text-sm">
                {platform.name}
              </div>
              <div className="text-xs text-[var(--text-60)]">
                {platform.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-60)]">
            + Many more enterprise integrations available
          </p>
        </div>
      </div>
    </section>
  )

