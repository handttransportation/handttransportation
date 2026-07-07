const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspree = "https://formspree.io/f/mrewjnkb";

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; background: #f4f7fb; color: #0f172a; }
        a { text-decoration: none; color: inherit; }
        .top { background:#071527; color:white; padding:18px 6%; display:flex; justify-content:space-between; align-items:center; gap:20px; }
        .logo strong { font-size:34px; display:block; line-height:1; }
        .logo span { color:#4da3ff; font-size:12px; font-weight:900; letter-spacing:2px; text-transform:uppercase; }
        .nav { display:flex; gap:28px; font-weight:800; font-size:14px; }
        .call { background:#1473ff; padding:13px 20px; border-radius:10px; font-weight:900; }
        .hero { background:linear-gradient(135deg,#071527,#0b2d52); color:white; padding:75px 6%; }
        .heroGrid { max-width:1200px; margin:auto; display:grid; grid-template-columns:1fr 420px; gap:45px; align-items:center; }
        .pill { display:inline-block; border:1px solid rgba(255,255,255,.3); border-radius:999px; padding:9px 15px; font-size:12px; font-weight:900; letter-spacing:1px; }
        h1 { font-size:56px; line-height:1.05; margin:24px 0; max-width:720px; }
        .blue { color:#4da3ff; }
        .hero p { color:#dbeafe; font-size:18px; line-height:1.7; max-width:620px; }
        .buttons { display:flex; gap:14px; margin-top:28px; flex-wrap:wrap; }
        .btn { background:#1473ff; color:white; padding:15px 24px; border-radius:10px; font-weight:900; }
        .btn2 { border:1px solid rgba(255,255,255,.35); color:white; padding:15px 24px; border-radius:10px; font-weight:900; }
        .trust { margin-top:28px; display:flex; gap:12px; flex-wrap:wrap; }
        .trust span { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12); padding:13px 16px; border-radius:12px; font-weight:800; }
        .form { background:white; color:#0f172a; padding:28px; border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,.25); }
        .form h2 { margin:0; font-size:30px; }
        .form p { color:#64748b; font-size:14px; margin-bottom:20px; }
        input, select, textarea { width:100%; padding:14px; border:1px solid #d7e0ea; border-radius:9px; margin-bottom:12px; font-size:15px; }
        textarea { min-height:95px; }
        .two { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        button { width:100%; background:#1473ff; color:white; border:0; padding:15px; border-radius:9px; font-weight:900; cursor:pointer; }
        section { padding:70px 6%; }
        .center { max-width:1200px; margin:auto; text-align:center; }
        .label { color:#1473ff; font-size:13px; font-weight:900; text-transform:uppercase; letter-spacing:2px; }
        h2 { font-size:38px; margin:10px 0 35px; }
        .cards { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; }
        .card { background:white; border:1px solid #dbe5f1; border-radius:16px; padding:28px; text-align:left; box-shadow:0 10px 25px rgba(0,0,0,.04); }
        .card h3 { margin-top:0; }
        .card p { color:#64748b; line-height:1.6; }
        .dark { background:#071527; color:white; }
        .features { display:grid; grid-template-columns:repeat(4,1fr); gap:28px; }
        .features p { color:#cbd5e1; line-height:1.6; }
        .areas { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
        .areas span { background:white; border:1px solid #dbe5f1; padding:14px 18px; border-radius:999px; font-weight:800; }
        .cta { background:#1473ff; color:white; margin:40px 6%; border-radius:18px; padding:40px; text-align:center; }
        .cta h2 { margin:0 0 10px; }
        footer { background:#071527; color:#cbd5e1; text-align:center; padding:35px 6%; }
        footer strong { color:white; font-size:24px; }
        @media(max-width:900px){
          .heroGrid { grid-template-columns:1fr; }
          .cards, .features { grid-template-columns:1fr 1fr; }
          .nav { display:none; }
          h1 { font-size:42px; }
        }
        @media(max-width:600px){
          .top { flex-direction:column; align-items:flex-start; }
          .call { width:100%; text-align:center; }
          .two, .cards, .features { grid-template-columns:1fr; }
          h1 { font-size:36px; }
        }
      `}</style>

      <header className="top">
        <a className="logo" href="#">
          <strong>H&T</strong>
          <span>Transportation</span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
          <a href="#areas">Areas</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="call" href={`tel:${phone}`}>{displayPhone}</a>
      </header>

      <section className="hero">
        <div className="heroGrid">
          <div>
            <div className="pill">AIRPORTS • LOCAL RIDES • COURIER • BUSINESS</div>
            <h1>Reliable Transportation Across <span className="blue">Long Island & NYC</span></h1>
            <p>Airport transfers, private rides, business transportation, and same-day courier service with dependable timing and easy communication.</p>

            <div className="buttons">
              <a className="btn" href="#quote">Request a Quote</a>
              <a className="btn2" href={`tel:${phone}`}>Call Now</a>
            </div>

            <div className="trust">
              <span>On-Time Service</span>
              <span>Clean Rides</span>
              <span>Call or Text</span>
            </div>
          </div>

          <form id="quote" className="form" action={formspree} method="POST">
            <input type="hidden" name="_subject" value="New H&T Transportation Quote Request" />
            <h2>Get a Quote</h2>
            <p>Send your trip details and we’ll confirm price and availability.</p>

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
        </div>
      </section>

      <section id="services">
        <div className="center">
          <p className="label">Our Services</p>
          <h2>How We Can Help</h2>

          <div className="cards">
            <div className="card"><h3>Airport Transportation</h3><p>JFK, LGA, EWR, and MacArthur airport pickups and drop-offs.</p></div>
            <div className="card"><h3>Private Rides</h3><p>Local rides, appointments, family trips, and long-distance travel.</p></div>
            <div className="card"><h3>Courier Service</h3><p>Same-day documents, packages, and business deliveries.</p></div>
            <div className="card"><h3>Business Transportation</h3><p>Reliable rides for meetings, hotels, offices, and clients.</p></div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="center">
          <p className="label">Why Choose H&T</p>
          <h2>Your Ride, Our Priority</h2>

          <div className="features">
            <div><h3>On Time</h3><p>We respect your schedule and aim for prompt pickups.</p></div>
            <div><h3>Clean Vehicles</h3><p>Comfortable rides for airport trips and daily transportation.</p></div>
            <div><h3>Easy Communication</h3><p>Call, text, or request your quote online.</p></div>
            <div><h3>Fair Pricing</h3><p>Clear communication before every trip.</p></div>
          </div>
        </div>
      </section>

      <section id="areas">
        <div className="center">
          <p className="label">Areas We Serve</p>
          <h2>Serving Long Island, NYC & Airports</h2>

          <div className="areas">
            {["Long Island", "Nassau County", "Suffolk County", "Queens", "Brooklyn", "Manhattan", "Bronx", "JFK Airport", "LGA Airport", "Newark Airport", "MacArthur Airport"].map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>Need a Ride?</h2>
        <p>Call, text, or request a quote online.</p>
        <div className="buttons" style={{ justifyContent: "center" }}>
          <a className="btn2" href={`tel:${phone}`}>Call {displayPhone}</a>
          <a className="btn2" href={`sms:${phone}`}>Text Us</a>
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