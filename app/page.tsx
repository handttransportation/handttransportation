const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/mrewjnkb";

const services = [
  ["Airport Transportation", "JFK, LGA, EWR, MacArthur airport pickups and drop-offs."],
  ["Private Rides", "Local rides, appointments, family trips, and long-distance travel."],
  ["Courier Service", "Same-day document, package, and business deliveries."],
  ["Business Transportation", "Reliable rides for meetings, clients, hotels, and offices."],
];

const areas = [
  "Long Island",
  "Nassau County",
  "Suffolk County",
  "Queens",
  "Brooklyn",
  "Manhattan",
  "Bronx",
  "JFK Airport",
  "LaGuardia Airport",
  "Newark Airport",
  "MacArthur Airport",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <header className="w-full border-b border-white/10 bg-[#07111f]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="leading-tight">
            <div className="text-3xl font-black">H&T</div>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
              Transportation
            </div>
          </a>

          <div className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#services">Services</a>
            <a href="#quote">Quote</a>
            <a href="#areas">Areas</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href={`tel:${phone}`}
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-black"
          >
            Call
          </a>
        </nav>
      </header>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-300">
            Long Island • NYC • Airports • Courier
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Reliable Transportation Across Long Island & NYC
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Airport transfers, private rides, business transportation, and same-day courier service with dependable timing and professional communication.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#quote"
              className="rounded-xl bg-blue-600 px-8 py-4 font-black"
            >
              Request a Quote
            </a>
            <a
              href={`tel:${phone}`}
              className="rounded-xl border border-white/20 px-8 py-4 font-black"
            >
              {displayPhone}
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold">
              On-Time Service
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold">
              Clean Rides
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold">
              Call or Text
            </div>
          </div>
        </div>

        <form
          id="quote"
          action={formspreeEndpoint}
          method="POST"
          className="mx-auto mt-12 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl"
        >
          <input type="hidden" name="_subject" value="New H&T Transportation Quote Request" />
          <input type="hidden" name="business" value="H&T Transportation" />

          <h2 className="text-3xl font-black">Get a Quote</h2>
          <p className="mt-2 text-sm text-slate-300">
            Send your trip details and we’ll confirm price and availability.
          </p>

          <div className="mt-6 grid gap-4">
            <input
              name="pickup_address"
              required
              className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Pickup address"
            />

            <input
              name="dropoff_address"
              required
              className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Drop-off address"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="date"
                required
                className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
                placeholder="Date"
              />
              <input
                name="time"
                required
                className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
                placeholder="Time"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <select
                name="service_type"
                className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              >
                <option>Airport Transfer</option>
                <option>Private Ride</option>
                <option>Courier Service</option>
                <option>Business Transportation</option>
              </select>

              <select
                name="passengers"
                className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              >
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
                <option>5+ Passengers</option>
              </select>
            </div>

            <input
              name="customer_name"
              required
              className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Your name"
            />

            <input
              name="phone_number"
              required
              className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Phone number"
            />

            <input
              name="email"
              type="email"
              className="rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Email optional"
            />

            <textarea
              name="notes"
              className="min-h-24 rounded-xl border border-white/10 bg-[#07111f] p-4 text-white outline-none"
              placeholder="Flight number, luggage, or special request"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 p-4 font-black text-white"
            >
              Send Quote Request
            </button>
          </div>
        </form>
      </section>

      <section id="services" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-400">
            Services
          </p>
          <h2 className="mt-3 text-center text-4xl font-black">
            How We Can Help
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-[#0b1b30] px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-400">
            Service Areas
          </p>
          <h2 className="mt-3 text-center text-4xl font-black">
            Serving Long Island, NYC, and Airports
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center font-bold"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">
            Why Choose H&T
          </p>
          <h2 className="mt-3 text-4xl font-black">Simple, Reliable, Professional</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["On Time", "We respect your schedule."],
              ["Clean Vehicles", "Comfortable rides for daily trips and airports."],
              ["Easy Contact", "Call, text, or request online."],
              ["Fair Pricing", "Clear communication before every trip."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-black text-blue-300">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0b1b30] px-5 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-black">Need a Ride?</h2>
          <p className="mt-3 text-slate-300">
            Call, text, or request a quote online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phone}`}
              className="rounded-xl bg-blue-600 px-8 py-4 font-black"
            >
              Call {displayPhone}
            </a>
            <a
              href={`sms:${phone}`}
              className="rounded-xl border border-white/20 px-8 py-4 font-black"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <p>© 2026 H&T Transportation. All rights reserved.</p>
          <p>{email}</p>
        </div>
      </footer>
    </main>
  );
}