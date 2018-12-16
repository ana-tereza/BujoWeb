import React, {Component} from 'react';
import './index.css';
import Label from '../Label';

class Login extends Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="name" text="Bem vindo ao Bullet Journal!" />
        </form>
      </div>
    );
  }
}

export default Login;

