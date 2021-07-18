import {Link} from 'react-router-dom'

export default function Card(){

return(
    <div className={'card mt-4'}>
        <img src={""} alt={""} className={'card-img-top'}/>
       <div className="card-body">
           <h5 className="card-title">
               User
           </h5>
           <Link to={'/profile/' + 'react'} className={"btn btn-primary"}>
               Open
           </Link>
       </div>
    </div>
);
}