import React from 'react';

import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/"><img className="logo" src={require("./img/logo.png")} /></a>
      <h4 className="label">Sobre</h4>
<h4 className="pipe">|</h4>
<h4 className="label">Baixe o App</h4>
<h4 className="pipe">|</h4>
<h4 className="label">Ajuda</h4>
<h4 className="pipe">|</h4>
<h4 className="label">Cadastro</h4>
    </div>
  )
}
