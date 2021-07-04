import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListingPage from "./pages/ListingPage";
const Routes= ()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ListingPage}/>
                    <Route path="/DetailPage" exact component={DetailPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;