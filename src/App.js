import { Switch, Route } from 'react-router-dom';
import CadastreUser from './pages/cadastre'
import ListUsers from './pages/listUsers';
import LoginPage from './pages/logins';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/cadastro" component={CadastreUser} />
      <Route path="/listusers" component={ListUsers} />
   </Switch>
  );
}

export default App;
