//rafc
//functions are stateless - use hook - useState

import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../action/authAction";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  //* Redirect if logged in

  if (isAuthenticated) {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Food Delivery</h1>
                <p className="lead">
                  {" "}
                  Order your favourite food at anytime with Food Delivery!
                </p>
                <hr />
                <a href="/dashboard" className="btn btn-secondary">
                  Click Here to view Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black">
            <div class="card-body p-md-0">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>

                  <form class="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          onChange={(e) => onChange(e)}
                          required
                        />
                        <label className="form-label">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          minLength="6"
                          onChange={(e) => onChange(e)}
                          required
                        />
                        <label className="form-label">Password</label>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input
                        type="submit"
                        className="btn btn-info btn-block mt-1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
