import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1 className="title">Homepage</h1>
        <p className="description">Welcome to the homepage</p>
        <button
          type="submit"
          className="home-back-button"
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>
      </div>
    </>
  );
}
