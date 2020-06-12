import React from "react";

const styles = {
    paperContainer: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/pizzas/cover.jpg'})`,
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