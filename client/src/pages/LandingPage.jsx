import "../styles/LandingPage.css";
import MealMateLogo from "../assets/logo-bg.png";
import TrayFood from "../assets/food-bg-lp.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };

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
          <button className="btn primary-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Smart Meal Planning</h3>
            <p className="feature-desc">
              Plan meals for any day or week. Drag, drop, and build your perfect
              menu. Add your own recipes or browse curated options with
              nutrition insights.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Reduce Food Waste</h3>
            <p className="feature-desc">
              Planning ahead means less produce going bad in the fridge. Make
              important decisions ahead of time and on your own schedule. Then
              there's nothing to worry about when it's time to eat.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Automatic Grocery List</h3>
            <p className="feature-desc">
              No more skipping meals because you're missing ingredients. Review
              your meals for the week and the grocery list automatically
              updates.
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
