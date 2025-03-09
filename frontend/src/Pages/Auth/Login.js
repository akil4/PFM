import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginAPI } from "../../utils/ApiRequest";
import { Google as GoogleIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    setLoading(true);

    if (!email || !password) {
      toast.error("Email and password are required", toastOptions);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(loginAPI, { email, password });
      if (data.success === true) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
        toast.success(data.message, toastOptions);
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "YOUR_GOOGLE_AUTH_URL";
  };

  const handleGitHubLogin = () => {
    window.location.href = "YOUR_GITHUB_AUTH_URL";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1e1e2e",
        color: "#c3aed6",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
    <h1 style={{ color: "#a277ff", fontWeight: "bold", textAlign: "center" }}>FinArch</h1>
    <h1 className="text-center mt-3">
      <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#a277ff" }} />
    </h1>
            <h2 className="text-center" style={{ color: "#a277ff" }}>Login</h2>

            {/* Login with Google & GitHub */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
              <Button onClick={handleGoogleLogin} style={{ backgroundColor: "#6d28d9", borderColor: "#6d28d9", color: "#ffffff" }}>
                <GoogleIcon />
              </Button>
              <Button onClick={handleGitHubLogin} style={{ backgroundColor: "#6d28d9", borderColor: "#6d28d9", color: "#ffffff" }}>
                <GitHubIcon />
              </Button>
            </div>

            <Form>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label style={{ color: "#c3aed6" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  style={{ backgroundColor: "#2c2c3e", color: "#ffffff", borderColor: "#a277ff" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label style={{ color: "#c3aed6" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  style={{ backgroundColor: "#2c2c3e", color: "#ffffff", borderColor: "#a277ff" }}
                />
              </Form.Group>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} className="mt-4">
                <Link to="/forgotPassword" style={{ color: "#a277ff", textDecoration: "none" }}>
                  Forgot Password?
                </Link>

                <Button
                  type="submit"
                  className="text-center mt-3"
                  onClick={!loading ? handleSubmit : null}
                  disabled={loading}
                  style={{ backgroundColor: "#a277ff", borderColor: "#a277ff", color: "#1e1e2e" }}
                >
                  {loading ? "Signing in…" : "Login"}
                </Button>

                <p className="mt-3" style={{ color: "#9d9494" }}>
                  Don't Have an Account?{" "}
                  <Link to="/register" style={{ color: "#a277ff", textDecoration: "none" }}>
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
