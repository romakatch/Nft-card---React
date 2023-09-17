import React from "react";
import "./Card.css"


export default function Card() {
    let isImage = false;
    return (  
        <div className="card"> 
            {isImage ? <img src="./images/image-equilibrium.jpg" className="main" /> : null}
            <h1>Equilibrium #3429</h1>
            <p className="description">Our Equilibrium collection promotes balance and calm.</p>
            <div className="info">
                <div className="eth">
                    <img src="./images/icon-ethereum.svg" alt="" />
                    <span>0.041 ETH</span>
                </div>
                <div className="clock">
                    <img src="./images/icon-clock.svg" alt="" />
                    <span>3 days left</span>
                </div>
            </div>
            <hr />
            <div className="author">
                <img src="./images/image-avatar.png" alt="" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    );
}
