const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspree = "https://formspree.io/f/mrewjnkb";

export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <div className="brand">
          <strong>H&T</strong>
          <span>Transportation</span>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
          <a href="#areas">Areas</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="callBtn" href={`tel:${phone}`}>{displayPhone}</a>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="tag">Long Island • NYC • Airports • Courier</p>
          <h1>Reliable Transportation Across Long Island & NYC</h1>
          <p>
            Airport rides, private transportation, business trips, and same-day courier service with clean vehicles and easy communication.
          </p>

          <div className="heroButtons">
            <a href="#quote">Request a Quote</a>
            <a href={`tel:${phone}`}>Call Now</a>
          </div>

          <div className="trust">
            <span>On-time service</span>
            <span>Clean rides</span>
            <span>Call or text</span>
          </div>
        </div>

        <form id="quote" className="quoteBox" action={formspree} method="POST">
          <input type="hidden" name="_subject" value="New H&T Transportation Quote Request" />

          <h2>Get a Quote</h2>
          <p>Send your trip details and we’ll get back to you quickly.</p>

          <input name="pickup" required placeholder="Pickup address" />
          <input name="dropoff" required placeholder="Drop-off address" />

          <div className="two">
            <input name="date" required placeholder="Date" />
            <input name="time" required placeholder="Time" />
          </div>

          <div className="two">
            <select name="service">
              <option>Airport Transportation</option>
              <option>Private Ride</option>
              <option>Courier Service</option>
              <option>Business Transportation</option>
            </select>

            <select name="passengers">
              <option>1 Passenger</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4 Passengers</option>
              <option>5+ Passengers</option>
            </select>
          </div>

          <input name="name" required placeholder="Your name" />
          <input name="phone" required placeholder="Phone number" />
          <input name="email" placeholder="Email optional" />
          <textarea name="notes" placeholder="Flight number, luggage, or special request" />

          <button type="submit">Send Quote Request</button>
        </form>
      </section>

      <section id="services" className="section white">
        <p className="label">Our Services</p>
        <h2>How We Can Help</h2>

        <div className="cards">
          <div className="card"><h3>Airport Transportation</h3><p>JFK, LGA, EWR, MacArthur pickups and drop-offs.</p></div>
          <div className="card"><h3>Private Rides</h3><p>Local rides, appointments, family trips, and long-distance travel.</p></div>
          <div className="card"><h3>Courier Service</h3><p>Same-day documents, packages, and business deliveries.</p></div>
          <div className="card"><h3>Business Transportation</h3><p>Reliable rides for meetings, hotels, offices, and clients.</p></div>
        </div>
      </section>

      <section className="section dark">
        <p className="label">Why Choose H&T</p>
        <h2>Your Ride, Our Priority</h2>

        <div className="features">
          <div><h3>On Time</h3><p>We respect your schedule.</p></div>
          <div><h3>Clean Vehicles</h3><p>Comfortable rides for daily trips and airport rides.</p></div>
          <div><h3>Easy Communication</h3><p>Call, text, or request online.</p></div>
          <div><h3>Fair Pricing</h3><p>Clear pricing before every trip.</p></div>
        </div>
      </section>

      <section id="areas" className="section white">
        <p className="label">Areas We Serve</p>
        <h2>Serving Long Island, NYC & Airports</h2>

        <div className="areas">
          {["Long Island", "Nassau County", "Suffolk County", "Queens", "Brooklyn", "Manhattan", "Bronx", "JFK Airport", "LGA Airport", "Newark Airport", "MacArthur Airport"].map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>Need a Ride?</h2>
        <p>Call, text, or request a quote online.</p>
        <div>
          <a href={`tel:${phone}`}>Call {displayPhone}</a>
          <a href={`sms:${phone}`}>Text Us</a>
        </div>
      </section>

      <footer>
        <strong>H&T Transportation</strong>
        <p>{displayPhone} • {email}</p>
        <p>© 2026 H&T Transportation. All rights reserved.</p>
      </footer>
    </main>
  );
}