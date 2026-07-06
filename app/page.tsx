const services = [
  ["✈️", "Airport Transportation", "JFK, LGA, EWR, MacArthur and regional airport rides with scheduled pickup times."],
  ["🚗", "Private Rides", "Local and long-distance rides across Long Island, NYC, and surrounding areas."],
  ["📦", "Same-Day Courier", "Document, package, and small business delivery with clear communication."],
  ["💼", "Business Transportation", "Reliable transportation for meetings, clients, appointments, and events."],
];

const benefits = [
  ["On-Time", "We respect your schedule and plan pickups with care."],
  ["Professional", "Clear communication before every ride or delivery."],
  ["Simple Booking", "Request a quote online, by call, or by text."],
  ["Local Service", "Serving Long Island, NYC, and nearby airports."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="leading-tight">
            <div className="text-3xl font-black tracking-tight text-slate-950">H&T</div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700">
              Transportation
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Book</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-black text-white shadow-md hover:bg-blue-800"
          >
            Request Quote
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-120px] h-96 w-96 rounded-full bg-slate-300/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
              Long Island • NYC • Airports • Courier
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Reliable rides and deliveries, done right.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              H&T Transportation provides airport transportation, private rides, scheduled trips,
              and same-day courier service across Long Island, NYC, and surrounding areas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-700 px-8 py-4 text-center text-base font-black text-white shadow-lg hover:bg-blue-800"
              >
                Book a Ride
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-center text-base font-black text-slate-900 shadow-sm hover:border-blue-700"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
              {benefits.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[2.2rem] border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="rounded-[1.7rem] bg-slate-950 p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">
                Quick request
              </p>
              <h2 className="mt-3 text-3xl font-black">How can H&T help today?</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Choose a service and request a quote. We’ll confirm details before the ride or delivery.
              </p>

              <div className="mt-7 grid gap-4">
                {services.map(([icon, title, text]) => (
                  <a
                    key={title}
                    href="#contact"
                    className="group rounded-2xl bg-white p-5 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{icon}</div>
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
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-black text-blue-700">Services</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Simple transportation and logistics for everyday needs.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black text-blue-700">About H&T</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Local, dependable, and built around customer service.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              H&T Transportation is a locally owned transportation and courier service focused on
              reliability, clean service, punctual pickups, and easy communication.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black">Why customers choose us</h3>
            <div className="mt-6 grid gap-4">
              {["Professional communication", "Clean and comfortable rides", "Reliable scheduling", "Airport and local service"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-black text-blue-300">Service Areas</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Serving Long Island, NYC, and major airports.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Available for airport trips, scheduled transportation, private rides,
                and courier service across key areas.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {["Long Island", "New York City", "JFK Airport", "LaGuardia Airport", "Newark Airport", "MacArthur Airport"].map((area) => (
                <div key={area} className="rounded-2xl bg-white/10 p-4 font-black">
                  📍 {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-12">
          <p className="font-black text-blue-700">Book H&T</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Request a ride or delivery quote.
          </h2>
          <p className="mt-4 text-slate-600">
            Submit your details and we’ll confirm availability, timing, and pricing.
          </p>

          <form className="mt-10 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border p-4 outline-none focus:border-blue-700" placeholder="Full name" />
            <input className="rounded-2xl border p-4 outline-none focus:border-blue-700" placeholder="Phone number" />
            <input className="rounded-2xl border p-4 outline-none focus:border-blue-700" placeholder="Pickup location" />
            <input className="rounded-2xl border p-4 outline-none focus:border-blue-700" placeholder="Drop-off location" />
            <input className="rounded-2xl border p-4 outline-none focus:border-blue-700" placeholder="Date and time" />
            <select className="rounded-2xl border p-4 outline-none focus:border-blue-700">
              <option>Airport Transportation</option>
              <option>Private Ride</option>
              <option>Same-Day Courier</option>
              <option>Business Transportation</option>
            </select>
            <textarea
              className="min-h-32 rounded-2xl border p-4 outline-none focus:border-blue-700 md:col-span-2"
              placeholder="Extra details, flight number, package info, or special request"
            />
            <button className="rounded-2xl bg-blue-700 p-4 font-black text-white hover:bg-blue-800 md:col-span-2">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 H&T Transportation. All rights reserved.</p>
          <p>Long Island • NYC • Airport Transportation • Courier Service</p>
        </div>
      </footer>
    </main>
  );
}