import Search from "../search/Search";
import React from 'react'
import Card from "../card/Card";

export default function home(){

return(
    <React.Fragment>
        <Search/>
        <div className="row">
            <div className="col-sm-4 mb-4">
                <Card/>
            </div>
            <div className="col-sm-4 mb-4">
                <Card/>
            </div>
            <div className="col-sm-4 mb-4">
                <Card/>
            </div>
        </div>
    </React.Fragment>
);
}