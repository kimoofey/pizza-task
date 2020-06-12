import React, {Component} from 'react';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import StickyFooter from "./components/Footer";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

class App extends Component {

    render() {
        return (
            <Provider className="App" store={store}>
                <ScopedCssBaseline>
                    <Header/>
                    <body>
                    <MainPage/>
                    </body>
                    <StickyFooter/>
                </ScopedCssBaseline>
            </Provider>
        );
    }
}

export default App;
