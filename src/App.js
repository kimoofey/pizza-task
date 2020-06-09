import React, {Component} from 'react';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import StickyFooter from "./components/Footer";
import MainPage from "./components/MainPage";
import './App.css';
import Header from "./components/Header";

class App extends Component {

    render() {
        return (
            <div className="App">
                <ScopedCssBaseline>
                    <Header/>
                    <body>
                    <MainPage/>
                    </body>
                    <StickyFooter/>
                </ScopedCssBaseline>
            </div>
        );
    }
}

export default App;
