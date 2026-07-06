const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/mrewjnkb";

const services = [
  ["✈️", "Airport Transportation", "JFK, LGA, EWR, MacArthur airport pickups and drop-offs."],
  ["🚘", "Private Rides", "Local rides, appointments, family trips, and long-distance travel."],
  ["📦", "Courier Service", "Same-day document, package, and business deliveries across Long Island & NYC."],
  ["💼", "Business Transportation", "Reliable rides for meetings, clients, hotels, offices, and corporate travel."],
];

const areas = [
  "Long Island",
  "Nassau County",
  "Suffolk County",
  "New York City",
  "Queens",
  "Brooklyn",
  "Manhattan",
  "Bronx",
  "JFK Airport",
  "LaGuardia Airport",
  "Newark Airport",
  "MacArthur Airport",
];

const reviews = [
  ["Ahmed R.", "Great service. Driver was on time, friendly, and the ride was smooth. Highly recommended."],
  ["Sarah K.", "I use H&T for airport trips. Always reliable and professional."],
  ["James T.", "Excellent communication and very comfortable rides. Thank you."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06101d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06101d]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="leading-tight">
            <div className="text-3xl font-black">H&T</div>
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">Transportation</div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#quote" className="hover:text-blue-400">Quote</a>
            <a href="#areas" className="hover:text-blue-400">Areas</a>
            <a href="#reviews" className="hover:text-blue-400">Reviews</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>

          <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-black hover:bg-blue-700">
            📞 {displayPhone}
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.35),transparent_35%),linear-gradient(135deg,#06101d,#081a30_55%,#020617)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-300">
              Long Island • NYC • Airports • Courier
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Reliable Transportation Across <span className="text-blue-400">Long Island & NYC</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Airport transfers, private rides, business travel, and same-day courier service with professional drivers and on-time service you can count on.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black hover:bg-blue-700">
                📞 Call Now
              </a>
              <a href="#quote" className="rounded-xl border border-white/25 px-8 py-4 text-center font-black hover:bg-white hover:text-slate-950">
                📅 Get a Quote
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["On-Time Every Time", "Professional Drivers", "Safe & Reliable"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            id="quote"
            action={formspreeEndpoint}
            method="POST"
            className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
          >
            <input type="hidden" name="_subject" value="New H&T Transportation Quote Request" />
            <input type="hidden" name="business" value="H&T Transportation" />

            <h2 className="text-3xl font-black">Get a Quote</h2>
            <p className="mt-2 text-sm text-slate-300">Fill out the form and we’ll get back to you quickly.</p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="pickup_address" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Pickup Location" />
                <input name="dropoff_address" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Drop-off Location" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="date" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Date" />
                <input name="time" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Time" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select name="service_type" className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none focus:border-blue-500">
                  <option>Airport Transfer</option>
                  <option>Private Ride</option>
                  <option>Courier Service</option>
                  <option>Business Transportation</option>
                </select>

                <select name="passengers" className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none focus:border-blue-500">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                  <option>5+ Passengers</option>
                </select>
              </div>

              <input name="customer_name" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Your Name" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="phone_number" required className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Phone Number" />
                <input name="email" type="email" className="rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Email optional" />
              </div>

              <textarea name="notes" className="min-h-24 rounded-lg border border-white/15 bg-slate-950/60 p-4 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Flight number, luggage, or special request" />

              <button type="submit" className="rounded-lg bg-blue-600 p-4 font-black text-white hover:bg-blue-700">
                Request Quote
              </button>

              <p className="text-center text-xs text-slate-400">Your information is never shared.</p>
            </div>
          </form>
        </div>
      </section>

      <section id="services" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-400">Our Services</p>
          <h2 className="mt-3 text-center text-4xl font-black">How We Can Help You</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081a30] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-400">Why Choose H&T</p>
          <h2 className="mt-3 text-center text-4xl font-black">Your Ride, Our Priority</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["Always On Time", "We respect your time and aim for prompt pickups and drop-offs."],
              ["Clean & Comfortable", "Well-maintained vehicles for smooth daily rides and airport transfers."],
              ["Easy Communication", "Call or text anytime. We’re here to help."],
              ["Fair Pricing", "No hidden fees. What we quote is what you pay."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-lg font-black text-blue-300">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[340px_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">Service Areas</p>
            <h2 className="mt-3 text-4xl font-black">Proudly Serving Long Island & NYC</h2>

            <div className="mt-6 grid gap-3 text-slate-300">
              {areas.map((area) => (
                <p key={area}>✅ {area}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-72 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,.45),transparent_35%),linear-gradient(135deg,#0f2744,#07111f)] p-8">
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-center">
                <div>
                  <p className="text-5xl">📍</p>
                  <h3 className="mt-4 text-2xl font-black">Long Island • NYC • Airports</h3>
                  <p className="mt-2 text-slate-300">Available for airport rides, local trips, and deliveries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#081a30] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-blue-400">What Our Clients Say</p>
          <h2 className="mt-3 text-center text-4xl font-black">Trusted by Our Customers</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map(([name, review]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-yellow-400">★★★★★</div>
                <p className="mt-4 leading-7 text-slate-300">“{review}”</p>
                <p className="mt-4 font-black text-blue-300">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-black">Need a Ride?</h2>
            <p className="mt-2 text-slate-300">Call, text, or request a quote. We’re ready to serve you.</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black hover:bg-blue-700">
              📞 {displayPhone}
            </a>
            <a href={`sms:${phone}`} className="rounded-xl border border-white/20 px-8 py-4 text-center font-black hover:bg-white hover:text-slate-950">
              💬 Text Us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 H&T Transportation. All rights reserved.</p>
          <p>{email}</p>
        </div>
      </footer>
    </main>
  );
}