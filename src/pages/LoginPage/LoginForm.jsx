import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { InputField } from "../../component/InputField";
import { CheckboxField } from "../../component/CheckboxField";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess } from "../../redux/authSlice";
import { useNavigate } from "react-router";
import SocialLogin from "../../component/SocialLogin";
import { SOCIALS } from "../../constants/socials";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    keepMeSignedIn: false,
  });
  const [passwordError, setPasswordError] = useState("");

  const { loading } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 symbol."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.emailOrUsername || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    if (passwordError) {
      return;
    }
    dispatch(loginStart(formData));
    dispatch(loginSuccess(formData));
    navigate("/home");
  };

  return (
    <>
      <Row className="justify-content-md-start">
        <Col xs={12} lg={6}>
          <Form onSubmit={handleSubmit}>
            <InputField
              label="Email or Username"
              name="emailOrUsername"
              type="text"
              placeholder="Enter email or username"
              value={formData.emailOrUsername}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={passwordError}
            />
            <CheckboxField
              label="Keep me signed in"
              name="keepMeSignedIn"
              checked={formData.keepMeSignedIn}
              onChange={handleChange}
            />

            <Button
              className="w-100"
              variant="primary"
              type="submit"
              disabled={passwordError}
            >
              {loading?<Spinner/>:"Sign In"}
            </Button>
          </Form>
          <Row className="align-items-center justify-content-start mb-3">
            <Col className="justify-content-md-center" xs={4}>
              <hr />
            </Col>
            <Col
              md="auto"
              className="justify-content-md-center"
              xs="auto"
              lg="auto"
            >
              <p className="mt-2">Or Sign In With</p>
            </Col>
            <Col className="justify-content-md-center" xs={4} md={12}>
              <hr />
            </Col>
          </Row>
          <SocialLogin socials={SOCIALS} />
        </Col>
      </Row>
    </>
  );
}

export default LoginForm;
