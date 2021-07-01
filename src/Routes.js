import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import ListingPage from "./pages/ListingPage";

const Routes= ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ListingPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;