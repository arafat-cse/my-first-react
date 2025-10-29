import "./../assets/Stylecss/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to <span>Shop Management</span></h1>
        <p>Manage your shop easily — track products, customers, and sales all in one place.</p>
        <button className="btn-primary">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/679/679922.png" alt="Products" />
          <h3>Product Management</h3>
          <p>Add, update, and track your product inventory effortlessly.</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Sales" />
          <h3>Sales Tracking</h3>
          <p>Monitor daily sales and revenue in real-time dashboards.</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Customers" />
          <h3>Customer Insights</h3>
          <p>Understand your customers better with detailed analytics.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
