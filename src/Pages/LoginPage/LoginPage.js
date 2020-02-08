import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import networkRequests from "../../services/networkRequests";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  const formSubmit = event => {
    event.preventDefault();
    networkRequests("/admin/login", "POST", { email, password })
      .then(response => {
        
      })
      .catch(console.error);
  };

  return (
    <Form onSubmit={formSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          value={email}
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
          onChange={updateEmail}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          value={password}
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
          onChange={updatePassword}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default LoginPage;
