const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "httransportationi@gmail.com";

const services = [
  ["✈️", "Airport Transportation", "JFK, LGA, EWR, MacArthur and regional airport pickups."],
  ["🚗", "Private Rides", "Scheduled rides across Long Island, NYC, and nearby areas."],
  ["📦", "Same-Day Courier", "Documents, packages, and small business deliveries."],
  ["💼", "Business Transportation", "Reliable rides for meetings, clients, and appointments."],
];

const areas = ["Long Island", "NYC", "JFK", "LGA", "EWR", "MacArthur"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
          <a href="#" className="leading-tight">
            <div className="text-3xl font-black">H&T</div>
            <div className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
              Transportation
            </div>
          </a>

          <div className="hidden gap-8 text-sm font-bold md:flex">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#areas" className="hover:text-blue-400">Areas</a>
            <a href="#contact" className="hover:text-blue-400">Book</a>
          </div>

          <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-black shadow-lg hover:bg-blue-700">
            Call Now
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-slate-950 px-6 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.45),transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#020617_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid min-h-[850px] max-w-7xl gap-14 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-6 font-black uppercase tracking-[0.25em] text-blue-400">
              Long Island • NYC • Airports • Courier
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Professional transportation across Long Island & NYC.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Airport rides, private transportation, scheduled trips, and same-day courier service with professional communication and dependable timing.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black shadow-xl hover:bg-blue-700">
                Request a Quote
              </a>
              <a href={`tel:${phone}`} className="rounded-xl border border-white/30 px-8 py-4 text-center font-black hover:bg-white hover:text-slate-950">
                {displayPhone}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {["On-Time", "Reliable", "Clean Service", "Easy Booking"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold backdrop-blur">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="font-black uppercase tracking-[0.25em] text-blue-300">Start Here</p>
            <h2 className="mt-3 text-3xl font-black">What do you need today?</h2>

            <div className="mt-7 grid gap-4">
              {services.map(([icon, title, text]) => (
                <a key={title} href="#contact" className="rounded-2xl bg-white p-5 text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex gap-4">
                    <div className="text-3xl">{icon}</div>
                    <div>
                      <h3 className="font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black uppercase tracking-[0.25em] text-blue-700">Services</p>
          <h2 className="mt-3 text-center text-4xl font-black md:text-5xl">
            Transportation and delivery made simple.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {icon}
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grid lg:grid-cols-2">
        <div className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-xl">
            <p className="font-black uppercase tracking-[0.25em] text-blue-400">Why H&T</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Local service with professional standards.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              H&T Transportation focuses on punctual service, clean rides, clear communication, and simple booking for customers and local businesses.
            </p>
          </div>
        </div>

        <div className="bg-[#071833] px-6 py-24 text-white">
          <div className="mx-auto grid max-w-xl gap-4">
            {["Reliable scheduling", "Professional communication", "Comfortable ride experience", "Transportation + courier service"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-black">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-blue-700">Areas We Serve</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Serving key routes and airports.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area} className="rounded-2xl border bg-white p-5 font-black shadow-sm">
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-blue-700">Request Booking</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Tell us what you need.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Submit your request and we’ll confirm availability, timing, and pricing.
            </p>

            <div className="mt-8 space-y-4">
              <p className="font-black">📞 Call or Text: {displayPhone}</p>
              <p className="font-black">✉️ {email}</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-[2rem] bg-slate-50 p-6 shadow-xl md:grid-cols-2">
            <input className="rounded-xl border p-4 outline-none focus:border-blue-700" placeholder="Full name" />
            <input className="rounded-xl border p-4 outline-none focus:border-blue-700" placeholder="Phone number" />
            <input className="rounded-xl border p-4 outline-none focus:border-blue-700" placeholder="Pickup location" />
            <input className="rounded-xl border p-4 outline-none focus:border-blue-700" placeholder="Drop-off location" />
            <input className="rounded-xl border p-4 outline-none focus:border-blue-700" placeholder="Date & time" />
            <select className="rounded-xl border p-4 outline-none focus:border-blue-700">
              <option>Service Type</option>
              <option>Airport Transportation</option>
              <option>Private Ride</option>
              <option>Same-Day Courier</option>
              <option>Business Transportation</option>
            </select>
            <textarea className="min-h-32 rounded-xl border p-4 outline-none focus:border-blue-700 md:col-span-2" placeholder="Additional details" />
            <button className="rounded-xl bg-blue-700 p-4 font-black text-white hover:bg-blue-800 md:col-span-2">
              Request Quote →
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="text-3xl font-black">H&T</div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Transportation</div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Reliable transportation and courier service across Long Island, NYC, and surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="font-black text-blue-400">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#areas">Areas</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-blue-400">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <p>{displayPhone}</p>
              <p>{email}</p>
              <p>Mon–Sun: 6:00 AM – 10:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-black text-blue-400">Book Fast</h3>
            <a href={`tel:${phone}`} className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-black">
              Call Now
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 H&T Transportation. All rights reserved.
        </p>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a href={`tel:${phone}`} className="rounded-full bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-2xl">
          📞 Call
        </a>
        <a href={`sms:${phone}`} className="rounded-full bg-slate-950 px-5 py-4 text-sm font-black text-white shadow-2xl">
          💬 Text
        </a>
      </div>
    </main>
  );
}