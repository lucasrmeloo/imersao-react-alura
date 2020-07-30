import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import Error404 from './pages/error/Error404';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={ Error404 } />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')





/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,*
  document.getElementById('root')*/
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
