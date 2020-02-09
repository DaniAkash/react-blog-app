import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import networkRequests from "../../services/networkRequests";
import { useHistory } from "react-router-dom";
import routes from "../../routes/routes";
import LoadingIndicator from "../../Components/LoadingIndicator";
import { AdminContext } from "../../Store/AdminProvider";
import { USER_LOGGED_IN } from "../../actions/actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const store = useContext(AdminContext);
  const { dispatch } = store;

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  const formSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    networkRequests("/admin/login", "POST", { email, password })
      .then(response => {
        setIsLoading(false);
        dispatch({
          type: USER_LOGGED_IN
        });
        localStorage.setItem('jwtToken', response.jwtToken);
        history.push(routes.newPost);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
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
      {isLoading ? <LoadingIndicator /> : null}
    </Form>
  );
};

export default LoginPage;
