const phone = "+19176797021";
const displayPhone = "+1 (917) 679-7021";
const email = "tahhatariq21@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/mrewjnkb";

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; }
        main { background: #f5f8fc; color: #08111f; }
        .nav { background:#06111f; color:white; padding:18px 6%; display:flex; align-items:center; justify-content:space-between; }
        .logo { font-size:34px; font-weight:900; line-height:1; }
        .logo span { color:#1473ff; }
        .sublogo { color:#49a3ff; font-size:12px; font-weight:800; letter-spacing:2px; }
        .links { display:flex; gap:28px; font-weight:700; font-size:14px; }
        .links a, .btn, a { color:inherit; text-decoration:none; }
        .call { background:#0b6bff; padding:13px 22px; border-radius:8px; font-weight:900; }
        .hero { background:linear-gradient(135deg,#06111f,#082649); color:white; padding:70px 6%; }
        .hero-wrap { max-width:1200px; margin:auto; display:grid; grid-template-columns:1fr 430px; gap:50px; align-items:center; }
        .pill { display:inline-block; border:1px solid rgba(255,255,255,.35); border-radius:999px; padding:9px 16px; font-size:12px; font-weight:900; letter-spacing:.8px; }
        h1 { font-size:56px; line-height:1.05; margin:28px 0 20px; }
        h1 span, .blue { color:#1681ff; }
        .hero p { font-size:18px; line-height:1.7; color:#d8e4f2; max-width:650px; }
        .badges { display:flex; gap:18px; margin:30px 0; flex-wrap:wrap; }
        .badge { border:1px solid rgba(255,255,255,.18); padding:14px 18px; border-radius:14px; font-weight:800; }
        .actions { display:flex; gap:16px; flex-wrap:wrap; }
        .primary { background:#0b6bff; padding:16px 28px; border-radius:9px; font-weight:900; }
        .secondary { border:1px solid rgba(255,255,255,.45); padding:16px 28px; border-radius:9px; font-weight:900; }
        .quote { background:rgba(3,13,26,.78); border:1px solid rgba(255,255,255,.18); border-radius:18px; padding:28px; }
        .quote h2 { margin:0; font-size:30px; color:white; }
        .quote p { font-size:14px; margin:10px 0 22px; }
        .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        input, select, textarea { width:100%; background:#07182b; color:white; border:1px solid rgba(255,255,255,.2); padding:14px; border-radius:8px; margin-bottom:12px; }
        textarea { min-height:95px; }
        button { width:100%; background:#0b6bff; color:white; border:0; padding:15px; border-radius:8px; font-weight:900; cursor:pointer; }
        section { padding:70px 6%; }
        .center { text-align:center; max-width:1100px; margin:auto; }
        .section-title { color:#0b6bff; font-size:13px; font-weight:900; letter-spacing:2px; text-transform:uppercase; }
        h2 { font-size:38px; margin:10px 0 35px; }
        .cards { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
        .card { background:white; border:1px solid #dbe5f1; border-radius:16px; padding:28px; box-shadow:0 10px 25px rgba(0,0,0,.04); }
        .card .icon { font-size:40px; margin-bottom:18px; }
        .card h3 { margin:0 0 12px; }
        .card p { color:#506175; line-height:1.6; }
        .dark { background:#06111f; color:white; }
        .features { display:grid; grid-template-columns:repeat(4,1fr); gap:30px; }
        .features p { color:#c9d6e6; line-height:1.6; }
        .areas { display:grid; grid-template-columns:330px 1fr; gap:40px; align-items:center; }
        .area-list p { margin:12px 0; color:#334155; font-weight:700; }
        .mapbox { height:320px; border-radius:18px; background:linear-gradient(135deg,#dbeafe,#eff6ff); display:flex; align-items:center; justify-content:center; text-align:center; }
        .cta { background:#0b6bff; color:white; border-radius:16px; padding:34px; display:flex; justify-content:space-between; align-items:center; gap:20px; }
        footer { background:#06111f; color:white; padding:45px 6%; }
        .footer-grid { max-width:1200px; margin:auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:30px; }
        footer p, footer a { color:#c9d6e6; line-height:1.7; }
        @media(max-width:900px){
          .hero-wrap, .areas { grid-template-columns:1fr; }
          .cards, .features, .footer-grid { grid-template-columns:1fr; }
          .links { display:none; }
          h1 { font-size:42px; }
          .grid2 { grid-template-columns:1fr; }
          .cta { flex-direction:column; text-align:center; }
        }
      `}</style>

      <header className="nav">
        <a href="#">
          <div className="logo">H<span>&</span>T</div>
          <div className="sublogo">TRANSPORTATION</div>
        </a>
        <div className="links">
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
          <a href="#areas">Areas</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="call" href={`tel:${phone}`}>📞 {displayPhone}</a>
      </header>

      <section className="hero">
        <div className="hero-wrap">
          <div>
            <div className="pill">AIRPORTS • LOCAL RIDES • COURIER • BUSINESS</div>
            <h1>Reliable Transportation Across <span>Long Island & NYC</span></h1>
            <p>On-time airport transfers, private rides, business travel, and same-day courier service you can count on.</p>

            <div className="badges">
              <div className="badge">⏱ On Time</div>
              <div className="badge">🛡 Safe & Reliable</div>
              <div className="badge">💬 Easy Communication</div>
            </div>

            <div className="actions">
              <a className="primary" href={`tel:${phone}`}>📞 Call Now</a>
              <a className="secondary" href="#quote">📅 Get a Quote</a>
            </div>
          </div>

          <form id="quote" className="quote" action={formspreeEndpoint} method="POST">
            <input type="hidden" name="_subject" value="New H&T Transportation Quote Request" />
            <h2>Get a Quote</h2>
            <p>Fill out the form and we’ll get back to you quickly.</p>

            <div className="grid2">
              <input name="pickup_address" placeholder="Pickup Location" required />
              <input name="dropoff_address" placeholder="Drop-off Location" required />
            </div>
            <div className="grid2">
              <input name="date" placeholder="Date" required />
              <input name="time" placeholder="Time" required />
            </div>
            <div className="grid2">
              <select name="service_type">
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
            <input name="customer_name" placeholder="Your Name" required />
            <div className="grid2">
              <input name="phone_number" placeholder="Phone Number" required />
              <input name="email" placeholder="Email optional" />
            </div>
            <textarea name="notes" placeholder="Additional Notes optional" />
            <button type="submit">Request Quote</button>
          </form>
        </div>
      </section>

      <section id="services">
        <div className="center">
          <div className="section-title">Our Services</div>
          <h2>How We Can Help You</h2>
          <div className="cards">
            {[
              ["✈️", "Airport Transportation", "JFK, LGA, EWR, MacArthur airport pickups and drop-offs."],
              ["🚘", "Private Rides", "Local rides, appointments, family trips, and long-distance travel."],
              ["📦", "Courier Service", "Same-day document, package, and business deliveries."],
              ["💼", "Business Transportation", "Reliable rides for meetings, clients, hotels, and offices."],
            ].map(([icon, title, text]) => (
              <div className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="dark">
        <div className="center">
          <div className="section-title">Why Choose H&T</div>
          <h2>Your Ride, Our Priority</h2>
          <div className="features">
            {[
              ["Always On Time", "We respect your time and aim for prompt pickups and drop-offs."],
              ["Clean & Comfortable", "Well-maintained vehicles for a smooth ride."],
              ["Easy Communication", "Call or text anytime. We’re here to help."],
              ["Fair Pricing", "No hidden fees. What we quote is what you pay."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas">
        <div className="areas">
          <div>
            <div className="section-title">Areas We Serve</div>
            <h2>Proudly Serving Long Island & NYC</h2>
            <div className="area-list">
              {["Long Island", "New York City", "JFK Airport", "LaGuardia Airport", "Newark Airport", "MacArthur Airport"].map((area) => (
                <p key={area}>🔵 {area}</p>
              ))}
            </div>
          </div>
          <div className="mapbox">
            <div>
              <div style={{ fontSize: 60 }}>📍</div>
              <h2>Long Island • NYC • Airports</h2>
              <p>Available for airport rides, local trips, and deliveries.</p>
            </div>
          </div>
        </div>

        <div id="contact" className="cta" style={{ marginTop: 40 }}>
          <div>
            <h2 style={{ margin: 0 }}>Need a Ride?</h2>
            <p>Call, text, or request a quote. We’re ready to serve you.</p>
          </div>
          <div className="actions">
            <a className="secondary" href={`tel:${phone}`}>📞 {displayPhone}</a>
            <a className="secondary" href={`sms:${phone}`}>💬 Text Us</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <div className="logo">H<span>&</span>T</div>
            <div className="sublogo">TRANSPORTATION</div>
            <p>Reliable transportation across Long Island & NYC.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>Home<br />Services<br />Areas<br />Contact</p>
          </div>
          <div>
            <h3>Services</h3>
            <p>Airport Rides<br />Private Rides<br />Courier<br />Business Travel</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>{displayPhone}<br />{email}<br />Long Island, NY</p>
          </div>
        </div>
      </footer>
    </main>
  );
}