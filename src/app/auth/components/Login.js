import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../action/authAction";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password }, navigate);
  };

  return (
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black">
            <div class="card-body p-md-0">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Food Delivery Login
                  </p>

                  <form class="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          required
                        />
                        <label class="form-label">Your Name</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          minLength="6"
                          value={password}
                          onChange={(e) => onChange(e)}
                          required
                        />
                        <label class="form-label">Your Email</label>
                      </div>
                    </div>
                    <div className="text-center pt-1 mb-4 pb-1">
                      <input
                        type="submit"
                        value="                    Sign In                    "
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://thumbs.dreamstime.com/b/sign-hand-pointer-icon-login-symbol-website-navigation-circle-flat-button-shadow-border-vector-78390148.jpg"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { login })(Login);
