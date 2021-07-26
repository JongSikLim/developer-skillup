import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Calendar, Schedule } from "./components";

import "./Main.scss";

export default class MainPresenter extends PureComponent {
    /* Render */
    render() {
        return (
            <Switch>
                <Route
                    path="/calendar/:calendar_id/"
                    exact
                    component={Schedule}
                />
                <Route path="/" exact component={Calendar} />
            </Switch>
        );
    }
}
