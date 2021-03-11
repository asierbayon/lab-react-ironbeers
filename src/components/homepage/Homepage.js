import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../../assets/beers.png';
import randomBeerImg from '../../assets/random-beer.png';
import newBeerImg from '../../assets/new-beer.png';

function Homepage() {
    return (
        <div className="container">
            <div className="mt-3 border rounded">
                <Link to="/beers">
                    <img className="mb-1 w-100 rounded-top" src={beersImg} alt="all beers" />
                </Link>
                <div className="p-3">
                    <h2>All Beers</h2>
                    <p className="text-muted fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, distinctio, provident est nisi obcaecati quaerat veniam maxime laboriosam libero, consequatur aut! Nihil magni odio consectetur sint vel dolorem provident vero?</p>
                </div>
            </div>
            <div className="mt-3 border rounded">
                <Link to="/random">
                    <img className="mb-1 w-100 rounded-top" src={randomBeerImg} alt="random beer" />
                </Link>
                <div className="p-3">
                    <h2>Random Beer</h2>
                    <p className="text-muted fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, distinctio, provident est nisi obcaecati quaerat veniam maxime laboriosam libero, consequatur aut! Nihil magni odio consectetur sint vel dolorem provident vero?</p>
                </div>
            </div>
            <div className="mt-3 border rounded">
                <Link to="/new">
                    <img className="mb-1 w-100 rounded-top" src={newBeerImg} alt="new beer" />
                </Link>
                <div className="p-3">
                    <h2>New Beer</h2>
                    <p className="text-muted fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, distinctio, provident est nisi obcaecati quaerat veniam maxime laboriosam libero, consequatur aut! Nihil magni odio consectetur sint vel dolorem provident vero?</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
