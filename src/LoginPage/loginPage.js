import React from "react";
import Title from "../commons/Title/title";
import LoginForm from "./loginForm";

function LoginPage() {
  const handleSubmit = formData => {
    console.log(formData.username);
  };

  return (
    <main className="login-page">
      <section className="login-section">
        <div className="login-section__container">
          <Title>Login</Title>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
