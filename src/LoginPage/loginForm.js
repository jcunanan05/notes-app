import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";

/**
 *
 * @param {Function} onSubmit({ username, password })
 */

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({ username, password });
  };

  const formName = {
    username: "username",
    password: "password"
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        <Input
          type="text"
          name={formName.username}
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="password"
          name={formName.password}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
