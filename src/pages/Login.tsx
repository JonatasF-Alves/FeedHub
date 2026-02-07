import React from "react";

const Auth: React.FC = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "900px" }}>
        <div className="row">

          {/* CREATE ACCOUNT */}
          <div className="col-md-6 border-end">
            <h3 className="text-center mb-3">Create Account</h3>
            <p className="text-center text-muted">
              or use your email for registration
            </p>

            <form id="signupForm">
              <div className="mb-3">
                <input
                  type="text"
                  id="signupName"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  id="signupEmail"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  id="signupPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          </div>

          {/* SIGN IN */}
          <div className="col-md-6">
            <h3 className="text-center mb-3">Sign In</h3>npm stop ru
            <p className="text-center text-muted">
              or use your email account
            </p>

            <form id="loginForm">
              <div className="mb-3">
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="text-end mb-3">
                <a href="#" className="small">
                  Forgot your password?
                </a>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Sign In
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
