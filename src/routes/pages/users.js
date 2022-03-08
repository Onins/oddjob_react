import React, {Component} from 'react'
import api from '../../api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        _id: 0,
        email: ''
      },
      users: [],
      totalUser: 0
    };
    this.loadusers();
  }

  loadusers = () => {
    let self = this;
    api.get('/user')
      .then(function (response) {                
        self.setState({ users: [] });   
        self.setState({ totalusers: response.data.users.length});
        self.setState({ users: response.data.users.map(x => x)});
          
      })
      .catch(function (error) {
        console.log(error);
      });
  };
   
  render() {
    const { users } = this.state;                
    let usersComponent = users.map(user =>
      <div className="user">
        <h4><strong>{user.email}</strong></h4>                                
        <hr/>
      </div>
    );

    return (
      <div className="layout">
        <div className="container">
          <div className="container-wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header">
                  <h2><strong>Registered Emails</strong></h2>
                </div>
              </div>
              <div className="col-md-12">
                {usersComponent}
              </div>
            </div>
          </div>
        </div>                
      </div>
    )
  }
}

export default Home;