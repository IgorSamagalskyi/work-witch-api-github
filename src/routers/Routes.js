import {Route, Switch} from 'react-router-dom';
import Home from '../componetns/home/Home'
import About from "../componetns/about/About";
import Profile from "../componetns/profile/Profile";
export default function Routes(){

return(
    <div className={"container"}>
        <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/profile'} component={Profile}/>
        </Switch>
    </div>
);
}