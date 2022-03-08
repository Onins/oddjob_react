import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Users from './pages/users';
import Jobs from './pages/jobs';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/jobs' component={Jobs}/>
                <Route path='/users' component={Users}/>                
            </Switch>
        )
    }
}


export default Main;
