import React, {Component} from 'react';
import './index.css';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

class Login extends Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="name" text="Bem vindo ao Bullet Journal!" /> 
<br/><br/>
<Input id="name" placeholder="Nome de usuário / Email" maxLength="40"/> 
<br/><br/>
<Input type="submit "id="password" placeholder="Senha" maxLength="40"/> 
<br/><br/>
<Input type="button" id="forgotpass" value="Esqueceu sua senha?"/> 
<br/><br/>

<Input type="button" id="cadastrar" value="Criar conta"/> 

<Input type="button" id="logar" value="Entrar"/> 

        </form>
      </div>
    );
  }
}

export default Login;







