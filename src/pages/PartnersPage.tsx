import { PartnersSection } from '@/components/PartnersSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function PartnersPage() {
  return (
    <div className="bg-[var(--background)] pt-24">
      {/* Partners Hero & Marquee */}
      <PartnersSection />

      {/* How to Become a Partner */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              How to Become a Partner
            </h2>
            <p className="opacity-80 mb-8 leading-relaxed text-[var(--muted-foreground)]">
              Joining our partner program is simple. We're always looking to collaborate with innovative companies that share our commitment to excellence and customer satisfaction. Our partnership program offers various tiers to suit different business needs and goals.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Contact Us', desc: 'Reach out to our partnership team to discuss potential collaboration.' },
                { title: 'Assessment', desc: 'We\'ll evaluate mutual benefits and alignment of business goals.' },
                { title: 'Agreement', desc: 'Formalize the partnership with terms that benefit both parties.' },
                { title: 'Onboarding', desc: 'Get access to resources, training, and start collaborating.' },
              ].map((step, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center">
                      <span className="text-sm font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)]">{step.title}</h3>
                    <p className="opacity-80 text-[var(--muted-foreground)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] flex items-center justify-center p-8">
            <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Partner With Us</h3>
              <p className="mb-6 opacity-80 text-[var(--muted-foreground)]">Take your business to the next level by partnering with PAR Computing Solutions</p>
              <button className="px-6 py-2 rounded-full text-white font-medium flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg hover:from-[var(--primary)]/90 hover:to-[var(--secondary)]/90 hover:shadow-xl transition-all duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            What Our Partners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Working with PAR Computing Solutions has transformed our business. Their technical expertise and commitment to customer service have helped us deliver better solutions to our clients.',
                name: 'Alex Johnson',
                title: 'CEO, TechPartner Inc.',
                color: 'var(--primary)'
              },
              {
                quote: 'The partnership with PAR Computing Solutions has been invaluable. Their team\'s responsiveness and depth of knowledge has given us a competitive edge in our market.',
                name: 'Sarah Williams',
                title: 'CTO, CloudNet Solutions',
                color: 'var(--secondary)'
              },
              {
                quote: 'PAR Computing Solutions understands our business needs and provides solutions that truly make a difference. Their partnership program is well-structured and mutually beneficial.',
                name: 'Raj Patel',
                title: 'Director, GlobalTech Systems',
                color: 'var(--accent)'
              }
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-lg theme-card flex flex-col h-full">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill={t.color} fillOpacity="0.15" />
                    <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.86667 12.4 5.93333 10.9333C7 9.46667 8.4 8.33333 10.1333 7.53333L11.3333 9.46667C10.0667 10.0667 9.06667 10.8 8.33333 11.6667C7.6 12.5333 7.26667 13.4 7.33333 14.2667C7.53333 14.2 7.8 14.1667 8.13333 14.1667C9.26667 14.1667 10.2 14.5333 10.9333 15.2667C11.6667 16 12.0333 16.9333 12.0333 18.0667C12.0333 19.1333 11.6667 20.0333 10.9333 20.7667C10.2 21.1444 9.33333 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.8667 12.4 17.9333 10.9333C19 9.46667 20.4 8.33333 22.1333 7.53333L23.3333 9.46667C22.0667 10.0667 21.0667 10.8 20.3333 11.6667C19.6 12.5333 19.2667 13.4 19.3333 14.2667C19.5333 14.2 19.8 14.1667 20.1333 14.1667C21.2667 14.1667 22.2 14.5333 22.9333 15.2667C23.6667 16 24.0333 16.9333 24.0333 18.0667C24.0333 19.1333 23.6667 20.0333 22.9333 20.7667C22.2 21.1444 21.3333 21.3333 21.3333 21.3333Z" fill={t.color} />
                  </svg>
                </div>
                <p className="mb-6 italic opacity-80">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full" style={{ background: t.color }}>
                    <span className="flex items-center justify-center h-full w-full text-white font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)]">{t.name}</h4>
                    <p className="text-sm opacity-70 text-[var(--muted-foreground)]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}
