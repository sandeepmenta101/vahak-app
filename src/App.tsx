import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from "./common/Header";
import Banner from "./common/Banner";
import LocationDetails from "./pages/LocationDetails";
import "./App.scss";
import Rate from "./pages/Rate";
import UserDetails from './pages/UserDetails/index';
import VerifyOtp from './pages/VerifyOtp/index';
import SubmitForm from './pages/SubmitForm/index';
import ErrorComponent from './pages/404/index';
function App() {

  const [content, setContent] = useState('');

  useEffect(() => {
    let path: string = window.location.pathname;
    const pathArray: string[] = path.split('/');
    if(pathArray[1] === 'rate' || pathArray[1] === 'user-details'){
      setContent("Place your Bid (2/4 step)")
    }else if(pathArray[1] === 'otp'){
      setContent('Verify OTP (3/4 step)');
    }else if(pathArray[1] === 'submit'){
      setContent('Summary & Submit Bid (4/4 step)');
    }else if(pathArray[1].length === 0){
      setContent('Place your Bid (1/4 step)');
    }
  }, [window.location.pathname]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Banner content={content} />
        <main>
          <Switch>
            <Route path="/rate">
              <Rate />
            </Route>
            <Route path="/user-details">
              <UserDetails />
            </Route>
            <Route path="/otp">
              <VerifyOtp />
            </Route>
            <Route path="/submit">
              <SubmitForm />
            </Route>
            <Route path="/" exact>
              <LocationDetails />
            </Route>
            <Route component={ErrorComponent} />
          </Switch>
        </main>
      </div>

    </Router>
  );
}

export default App;
