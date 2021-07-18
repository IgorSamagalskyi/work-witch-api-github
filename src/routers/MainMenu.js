import {NavLink} from 'react-router-dom'

export default function MainMenu(){

return(
    <div  className={"row"}>
    <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
        <div className={'navbar-brand'}>
                Github search
        </div>
        <div className={'navbar-nav'}>
            <NavLink to={'/'} exact className={'nav-link'}>Home</NavLink>
        </div>
        <div className={'navbar-nav'}>
            <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
        </div>
        <div className={'navbar-nav'}>
            <NavLink to={'/profile'} className={'nav-link'}> Profile</NavLink>
        </div>

    </nav>
    </div>
);
}







