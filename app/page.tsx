const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/mrewjnkb";

const services = [
  ["Airport Transportation", "JFK, LGA, EWR, MacArthur and regional airport rides."],
  ["Private Rides", "Local rides, appointments, family trips, and long-distance travel."],
  ["Same-Day Courier", "Documents, packages, and business deliveries."],
  ["Business Transportation", "Professional rides for meetings, clients, hotels, and offices."],
];

const areas = [
  "Long Island",
  "Nassau County",
  "Suffolk County",
  "Queens",
  "Brooklyn",
  "Manhattan",
  "Bronx",
  "JFK",
  "LGA",
  "EWR",
  "MacArthur Airport",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white">
          <a href="#" className="leading-tight">
            <div className="text-2xl font-black">H&T</div>
            <div className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-400">
              Transportation
            </div>
          </a>

          <div className="hidden gap-7 text-sm font-bold md:flex">
            <a href="#services">Services</a>
            <a href="#quote">Quote</a>
            <a href="#areas">Areas</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href={`tel:${phone}`}
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-black hover:bg-blue-700"
          >
            Call Now
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.45),transparent_35%),linear-gradient(135deg,#020617,#071833_55%,#000)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_440px] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-300">
              Long Island • NYC • Airports • Courier
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Reliable Transportation Across Long Island & NYC
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Airport transportation, private rides, business travel, and same-day courier service with professional communication and dependable timing.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black shadow-xl hover:bg-blue-700"
              >
                Request a Quote
              </a>
              <a
                href={`tel:${phone}`}
                className="rounded-xl border border-white/25 px-8 py-4 text-center font-black hover:bg-white hover:text-slate-950"
              >
                {displayPhone}
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm font-bold text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">On-time service</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Airport rides</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Call or text</div>
            </div>
          </div>

          <form
            id="quote"
            action={formspreeEndpoint}
            method="POST"
            className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl"
          >
            <input type="hidden" name="_subject" value="New H&T Transportation Booking Request" />
            <input type="hidden" name="business" value="H&T Transportation" />

            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
              Quick Quote
            </p>
            <h2 className="mt-2 text-3xl font-black">Request a ride</h2>
            <p className="mt-2 text-sm text-slate-600">
              Send your trip details. We’ll confirm price and availability.
            </p>

            <div className="mt-6 grid gap-4">
              <input name="pickup_address" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Pickup address" />
              <input name="dropoff_address" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Drop-off address" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="date" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Date" />
                <input name="time" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Time" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select name="passengers" className="rounded-xl border p-4 outline-none focus:border-blue-600">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>

                <select name="service_type" className="rounded-xl border p-4 outline-none focus:border-blue-600">
                  <option>Airport Transfer</option>
                  <option>Private Ride</option>
                  <option>Courier Delivery</option>
                  <option>Business Transportation</option>
                </select>
              </div>

              <input name="customer_name" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Your name" />
              <input name="phone_number" required className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Phone number" />
              <input name="email" type="email" className="rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Email optional" />
              <textarea name="notes" className="min-h-24 rounded-xl border p-4 outline-none focus:border-blue-600" placeholder="Flight number, luggage, or special request" />

              <button type="submit" className="rounded-xl bg-blue-600 p-4 font-black text-white hover:bg-blue-700">
                Send Quote Request
              </button>

              <p className="text-center text-xs text-slate-500">
                Requests go directly to H&T Transportation.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section id="services" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            Services
          </p>
          <h2 className="mt-3 text-center text-4xl font-black md:text-5xl">
            Transportation for every important trip
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text]) => (
              <div key={title} className="rounded-3xl border bg-white p-7 shadow-sm hover:shadow-xl">
                <div className="mb-5 h-12 w-12 rounded-2xl bg-blue-100" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
                <a href="#quote" className="mt-6 inline-block font-black text-blue-700">
                  Request service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-4">
          {[
            ["24/7", "Booking Requests"],
            ["Fast", "Response"],
            ["NYC", "Airport Routes"],
            ["Local", "Long Island Service"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-black text-blue-400">{big}</div>
              <p className="mt-2 text-slate-300">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            Service Areas
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Serving Long Island, NYC, and nearby airports
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="rounded-2xl border bg-white p-5 font-black shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">
            Need transportation today?
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Call, text, or request a quote online.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black">
              Call {displayPhone}
            </a>
            <a href={`sms:${phone}`} className="rounded-xl border border-white/20 px-8 py-4 text-center font-black">
              Text H&T
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <div className="text-3xl font-black">H&T</div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
              Transportation
            </div>
          </div>
          <div className="text-sm text-slate-400">
            <p>{displayPhone}</p>
            <p>{email}</p>
            <p>© 2026 H&T Transportation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a href={`tel:${phone}`} className="rounded-full bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-2xl">
          Call
        </a>
        <a href={`sms:${phone}`} className="rounded-full bg-black px-5 py-4 text-sm font-black text-white shadow-2xl">
          Text
        </a>
      </div>
    </main>
  );
}