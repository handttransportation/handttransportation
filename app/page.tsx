const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "httransportationi@gmail.com";

const services = [
  ["✈️", "Airport Transportation", "JFK, LGA, EWR, MacArthur and regional airport transfers."],
  ["🚘", "Private Transportation", "Local rides, appointments, family trips, and events."],
  ["📦", "Same-Day Courier", "Documents, packages, and business deliveries."],
  ["🏢", "Business Transportation", "Professional rides for clients, meetings, offices, and hotels."],
];

const areas = ["Long Island", "NYC", "JFK", "LGA", "EWR", "MacArthur", "Queens", "Brooklyn", "Nassau", "Suffolk"];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
          <a href="#" className="leading-tight">
            <div className="text-3xl font-black">H&T</div>
            <div className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">Transportation</div>
          </a>

          <div className="hidden gap-8 text-sm font-bold md:flex">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#areas">Areas</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <a href={`tel:${phone}`} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-black hover:bg-blue-700">
            📞 {displayPhone}
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-slate-950 px-6 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.45),transparent_35%),linear-gradient(135deg,#020617_0%,#07111f_45%,#000_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid min-h-[900px] max-w-7xl gap-12 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-blue-300">
              24/7 Professional Transportation
            </p>

            <h1 className="text-5xl font-black leading-[1.02] md:text-7xl">
              Premium Transportation Across Long Island & NYC
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Airport transfers, private rides, business transportation, and same-day courier service with professional drivers and transparent communication.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-blue-600 px-8 py-4 text-center font-black shadow-xl hover:bg-blue-700">
                Request a Quote
              </a>
              <a href={`tel:${phone}`} className="rounded-xl border border-white/30 px-8 py-4 text-center font-black hover:bg-white hover:text-slate-950">
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 text-sm font-bold text-slate-300">
              <div>🛡 Safe & Reliable</div>
              <div>⏱ On-Time Service</div>
              <div>👤 Professional Drivers</div>
            </div>
          </div>

          <form id="contact" className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <p className="font-black uppercase tracking-[0.25em] text-blue-300">Get an instant quote</p>
            <h2 className="mt-3 text-3xl font-black">Enter your trip details</h2>
            <p className="mt-2 text-sm text-slate-300">We’ll confirm price and availability.</p>

            <div className="mt-6 grid gap-4">
              <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Pickup address" />
              <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Drop-off address" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Date" />
                <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Time" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>

                <select className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none">
                  <option>Airport Transfer</option>
                  <option>Private Ride</option>
                  <option>Courier Delivery</option>
                  <option>Business Transportation</option>
                </select>
              </div>

              <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Your name" />
              <input className="rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none" placeholder="Phone number" />

              <button className="rounded-xl bg-blue-600 p-4 font-black text-white hover:bg-blue-700">
                Get My Quote →
              </button>

              <p className="text-center text-xs text-slate-300">
                No hidden fees • Fast response • Easy booking
              </p>
            </div>
          </form>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black uppercase tracking-[0.25em] text-blue-700">Our Services</p>
          <h2 className="mt-3 text-center text-4xl font-black md:text-5xl">Transportation for Every Need</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">{icon}</div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
                <a href="#contact" className="mt-6 inline-block font-black text-blue-700">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-4">
          {[
            ["24/7", "Availability"],
            ["500+", "Happy Customers"],
            ["10K+", "Miles Covered"],
            ["100%", "Professional Service"],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="text-5xl font-black text-blue-400">{big}</div>
              <p className="mt-2 text-slate-300">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="grid lg:grid-cols-2">
        <div className="bg-white px-6 py-24">
          <div className="mx-auto max-w-xl">
            <p className="font-black uppercase tracking-[0.25em] text-blue-700">Why Choose H&T</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Local Service. Premium Standards.</h2>
            <div className="mt-8 grid gap-4">
              {["Professional & courteous service", "Clean, comfortable rides", "Punctual and reliable scheduling", "Transparent communication", "Available by request"].map((item) => (
                <p key={item} className="font-bold">✅ {item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#071833] px-6 py-24 text-white">
          <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-8">
            <h3 className="text-2xl font-black">Popular Routes</h3>
            <div className="mt-6 grid gap-4 text-sm">
              {["Long Island → JFK Airport", "Queens → LaGuardia Airport", "Suffolk → Newark Airport", "Nassau → Manhattan", "MacArthur Airport Transfers"].map((route) => (
                <div key={route} className="rounded-xl bg-white/10 p-4 font-bold">📍 {route}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-blue-700">Service Areas</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">We’ve Got You Covered</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((area) => (
              <div key={area} className="rounded-2xl border bg-white p-5 text-center font-black shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-black uppercase tracking-[0.25em] text-blue-400">Customer Reviews</p>
          <h2 className="mt-3 text-center text-4xl font-black">What Our Customers Say</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Excellent service from start to finish. On time, professional, and comfortable.",
              "Best airport service I’ve used. Clean vehicle and great communication.",
              "Reliable, safe, and hassle-free. They handled our delivery perfectly.",
            ].map((review) => (
              <div key={review} className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <div className="text-yellow-400">★★★★★</div>
                <p className="mt-4 leading-7 text-slate-200">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-12 text-white">
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
              <a href="#areas">Service Areas</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-blue-400">Contact Info</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <p>📞 {displayPhone}</p>
              <p>✉️ {email}</p>
              <p>⏱ Available by request</p>
            </div>
          </div>

          <div>
            <h3 className="font-black text-blue-400">Book Now</h3>
            <p className="mt-4 text-sm text-slate-400">Call or text to book your next ride.</p>
            <a href={`tel:${phone}`} className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-black">
              Call {displayPhone}
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
        <a href={`sms:${phone}`} className="rounded-full bg-black px-5 py-4 text-sm font-black text-white shadow-2xl">
          💬 Text
        </a>
      </div>
    </main>
  );
}