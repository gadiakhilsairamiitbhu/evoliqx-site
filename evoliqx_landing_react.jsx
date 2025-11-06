// Evoliqx Landing Page (React + Tailwind)
// TypeScript-friendly React component (safe for .tsx)
// Replace your src/App.tsx or import this component into your app.

import React, { useState } from 'react';

export default function EvoliqxLanding(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05060a] text-gray-100 font-sans antialiased">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-600 to-cyan-400 opacity-10 blur-3xl transform -rotate-12 animate-blob" />
        <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-gradient-to-tr from-pink-500 to-purple-600 opacity-8 blur-3xl transform rotate-6 animate-blob animation-delay-2000" />
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg">
            {/* Simplified logo to avoid possible JSX parsing edge-cases in some toolchains */}
            <span className="text-white font-bold">★</span>
          </div>
          <span className="text-lg font-semibold tracking-wide">Evoliqx</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button onClick={() => setOpen(true)} className="bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 rounded-lg text-black font-medium shadow-md hover:opacity-95">Book a Demo</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(true)} className="bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 rounded-md text-black font-medium">Demo</button>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">AI-Powered Sales Leads That Convert Faster</h1>
          <p className="mt-6 text-gray-300 max-w-xl">Evoliqx helps B2B companies find and qualify high-converting leads using AI automation and predictive analytics. Spend less time chasing bad fit prospects and more time closing.</p>

          <div className="mt-8 flex items-center gap-4">
            <a href="mailto:contact@evoliqx.in" className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-black px-6 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform">Book a Demo</a>
            <a href="#features" className="text-sm text-gray-300 hover:text-white">See features →</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-400">
            <div className="p-3 bg-white/3 rounded-lg backdrop-blur-sm"><strong className="text-white">Fast Setup</strong><div className="text-gray-400">Integrate in hours</div></div>
            <div className="p-3 bg-white/3 rounded-lg backdrop-blur-sm"> <strong className="text-white">High Precision</strong><div className="text-gray-400">Predictive scoring</div></div>
            <div className="p-3 bg-white/3 rounded-lg backdrop-blur-sm"> <strong className="text-white">Automated Outreach</strong><div className="text-gray-400">Nurture at scale</div></div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="relative bg-gradient-to-br from-[#0f1724] to-[#071025] rounded-2xl p-6 shadow-2xl border border-white/5 overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-10 rounded-full blur-2xl" />

            <div className="rounded-lg bg-gradient-to-b from-white/3 via-white/5 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-300">Estimated Weekly Leads</div>
                  <div className="text-3xl font-extrabold">128 - 452</div>
                </div>
                <div className="text-sm text-gray-400">Conversion AI • Predictive Model</div>
              </div>

              <div className="mt-6">
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: '62%' }} />
                </div>
                <div className="mt-3 text-xs text-gray-400">Lead quality: <strong className="text-white">High</strong></div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/2 rounded-md text-sm">
                  <div className="text-xs text-gray-400">Avg. Response Time</div>
                  <div className="font-semibold">1–2 days</div>
                </div>

                <div className="p-3 bg-white/2 rounded-md text-sm">
                  <div className="text-xs text-gray-400">Qualification Rate</div>
                  <div className="font-semibold">78%</div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button onClick={() => (window.location.href = 'mailto:contact@evoliqx.in')} className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold">Request Demo</button>
                <button onClick={() => setOpen(true)} className="px-3 py-2 rounded-md border border-white/10 text-sm">Contact</button>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section id="features" className="mt-8 grid md:grid-cols-3 gap-8">
          <FeatureCard title="AI-Powered Scoring" desc="Our models rank prospects by intent and fit so your reps focus on deals that will close." icon="⚡" />
          <FeatureCard title="Automated Outreach" desc="Personalized multichannel sequences that engage leads at the right time." icon="🤖" />
          <FeatureCard title="Predictive Insights" desc="Pipeline forecasting and opportunity prioritization driven by data." icon="📈" />
        </section>

        <section className="mt-16 bg-gradient-to-br from-white/2 to-transparent border border-white/3 rounded-2xl p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold">Ready to scale your sales pipeline?</h3>
              <p className="text-gray-300 mt-2">See how Evoliqx can deliver qualified leads that shorten sales cycles.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="mailto:contact@evoliqx.in" className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-black px-5 py-3 rounded-xl font-semibold shadow-md">Book a Demo</a>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <p className="text-gray-300 mt-2">Email us at <a className="text-indigo-400" href="mailto:contact@evoliqx.in">contact@evoliqx.in</a> — we usually respond within 1–2 business days.</p>

            <div className="mt-6 flex gap-4">
              <div className="p-4 bg-white/3 rounded-md"> <strong>Use case:</strong><div className="text-xs text-gray-300">B2B SaaS, Enterprise</div></div>
              <div className="p-4 bg-white/3 rounded-md"> <strong>Scale:</strong><div className="text-xs text-gray-300">SMB → Mid-market</div></div>
            </div>
          </div>

          <div>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:contact@evoliqx.in'; }} className="space-y-3">
              <input className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2" placeholder="Your name" required />
              <input type="email" className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2" placeholder="Email" required />
              <textarea className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2 h-28" placeholder="Short message" required />
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-black px-4 py-2 rounded-md font-semibold">Send Message</button>
                <div className="text-xs text-gray-400">Or email: <a className="text-indigo-300" href="mailto:contact@evoliqx.in">contact@evoliqx.in</a></div>
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Evoliqx — AI Sales Lead Generation</div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@evoliqx.in" className="hover:text-white">contact@evoliqx.in</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-[#071025] rounded-2xl p-6 max-w-md w-full border border-white/6 shadow-2xl">
            <h4 className="text-lg font-bold">Book a Demo</h4>
            <p className="text-gray-300 mt-2">Tell us a little about your business — or just email <a href="mailto:contact@evoliqx.in" className="text-indigo-300">contact@evoliqx.in</a></p>
            <form onSubmit={(e) => { e.preventDefault(); setOpen(false); window.location.href = 'mailto:contact@evoliqx.in'; }} className="mt-4 space-y-3">
              <input className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2" placeholder="Your name" required />
              <input type="email" className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2" placeholder="Email" required />
              <textarea className="w-full bg-transparent border border-white/6 rounded-md px-3 py-2 h-24" placeholder="A few details" required />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md border border-white/6">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold">Request</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Utility styles for animation */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px,0px) scale(1) rotate(0deg); }
          33% { transform: translate(20px,-30px) scale(1.05) rotate(10deg); }
          66% { transform: translate(-10px,20px) scale(0.95) rotate(-8deg); }
          100% { transform: translate(0px,0px) scale(1) rotate(0deg); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }): JSX.Element {
  return (
    <div className="p-6 bg-white/3 rounded-2xl border border-white/5 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-black text-lg font-bold">{icon}</div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm text-gray-300 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}
