import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import './styles.scss';
import { HomeComponent } from './components/HomeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';
// import( './async.js' ).then( ( data ) => {
//     console.log( data );
// } );

const LoadingMessage = () => "I'm loading...";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="menu">
                        <Link exact to="/" activeClassName="active">
                            Home
                        </Link>
                        <Link to="/about" activeClassName="active">
                            About
                        </Link>
                        <Link to="/contact" activeClassName="active">
                            Contact
                        </Link>
                    </div>

                    <Suspense fallback={<LoadingMessage />}>
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route path="/about" component={AboutComponent} />
                            <Route path="/contact" component={ContactComponent} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById('app-root'));
