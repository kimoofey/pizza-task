import React from "react";

const styles = {
    paperContainer: {
        backgroundImage: `url('https://source.unsplash.com/random')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }
};

export default function Header() {

    return (
        <header className="App-header" style={styles.paperContainer}>
            <h1>Welcome to InnoPizza!</h1>
        </header>
    );
}