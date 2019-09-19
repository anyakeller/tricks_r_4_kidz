import React from "react";
import "./App.css";

function indexContents() {
    return (
        <div id="index-contents">
            <h1>I am your index page!!!</h1>
            <FartThePotato potatoType="Japanese Sweet Potato" />
            <FartThePotato potatoType="Garnet" />
            <FartThePotato potatoType="Ruby" />
        </div>
    );
}

function FartThePotato(pname) {
    return <h3>{pname.potatoType} has been farted</h3>;
}

const mainWebsiteFormat = <div id="page-body">{indexContents()}</div>;

function App() {
    return mainWebsiteFormat;
}

export default App;