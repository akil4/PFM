import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerAPI } from "../../utils/ApiRequest";
import axios from "axios";
import { Google as GoogleIcon, GitHub as GitHubIcon } from "@mui/icons-material";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const [values, setValues] = useState({
    name: "",
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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = values;
    setLoading(true);

    try {
      const { data } = await axios.post(registerAPI, { name, email, password });

      if (data.success) {
        delete data.user.password;
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message, toastOptions);
        navigate("/");
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = "YOUR_GOOGLE_AUTH_URL";
  };

  const handleGitHubSignup = () => {
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
        textAlign: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{ color: "#a277ff", fontWeight: "bold" }}>FinArch</h1>
            <h1 className="text-center mt-3">
              <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#a277ff" }} />
            </h1>
            <h2 className="text-center" style={{ color: "#a277ff" }}>Registration</h2>

            {/* Signup with Google & GitHub */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
              <Button onClick={handleGoogleSignup} style={{ backgroundColor: "#6d28d9", borderColor: "#6d28d9", color: "#ffffff" }}>
                <GoogleIcon />
              </Button>
              <Button onClick={handleGitHubSignup} style={{ backgroundColor: "#6d28d9", borderColor: "#6d28d9", color: "#ffffff" }}>
                <GitHubIcon />
              </Button>
            </div>

            <Form>
              <Form.Group controlId="formBasicName" className="mt-3">
                <Form.Label style={{ color: "#c3aed6" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={values.name}
                  onChange={handleChange}
                  style={{ backgroundColor: "#2c2c3e", color: "#ffffff", borderColor: "#a277ff" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label style={{ color: "#c3aed6" }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  style={{ backgroundColor: "#2c2c3e", color: "#ffffff", borderColor: "#a277ff" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label style={{ color: "#c3aed6" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
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
                  {loading ? "Registering..." : "Signup"}
                </Button>

                <p className="mt-3" style={{ color: "#9d9494" }}>
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#a277ff", textDecoration: "none" }}>
                    Login
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

export default Register;
