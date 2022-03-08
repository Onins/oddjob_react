import React from 'react';
import Main from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

class CheckValidateRoute extends React.Component {
  render() {        
    return (
      <div>
        <Header/>
        <Main />
        <Footer/>
      </div>
    )
  }
}
export default CheckValidateRoute;