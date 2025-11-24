import "../styles/LandingPage.css";
import MealMateLogo from "../assets/logo-bg.png";
import TrayFood from "../assets/food-bg-lp.jpg";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero">
        <img src={MealMateLogo} alt="MealMate Logo" className="hero-logo" />
        <h1 className="hero-title">
          Plan, Track, and Enjoy Your Meals With Total Clarity
        </h1>

        <p className="hero-subtitle">
          Create recipes, organize weekly meals, and automatically generate
          grocery lists all in one simple place.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">Get Started</button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Smart Meal Planning</h3>
            <p className="feature-desc">
              Plan meals for any day or week. Drag, drop, and build your perfect
              menu.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Create and Save Recipes</h3>
            <p className="feature-desc">
              Add your own recipes or browse curated options with nutrition
              insights.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Auto-Generated Grocery List</h3>
            <p className="feature-desc">
              No more guessing - ingredients are pulled from your weekly
              selections.
            </p>
          </div>
        </div>

        <div className="tray">
          <div className="plate">
            <div className="food">
              <img src={TrayFood} alt="Plate of Pasta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
