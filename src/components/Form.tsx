import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();

  return (
    <form className="form" onSubmit={() => navigate("/home")}>
      <h2 className="form-title">Login</h2>
      <label className="form-label">
        Username
        <input type="text" name="username" className="form-input" />
        Password
        <input type="password" name="password" className="form-input" />
      </label>
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}
