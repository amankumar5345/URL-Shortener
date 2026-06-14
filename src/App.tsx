import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './components/Redirect';

const App: React.FC = () => {
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.pathname) {
      const pathParts = redirect.split('/').filter((p: string) => p && p !== 'URL-Shortener');
      if (pathParts.length > 0) {
        window.location.pathname = `/URL-Shortener/${pathParts[0]}`;
      }
    }
  }, []);

  return (
    <Router basename="/URL-Shortener">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={Redirect} />
      </Switch>
    </Router>
  );
};

export default App;


