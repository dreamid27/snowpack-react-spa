import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const test = "hallo bro";

const Pages = () => {
    return <>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    </>
}

export default Pages;