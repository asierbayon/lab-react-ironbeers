import axios from 'axios'
import React, { Component } from 'react'
import http from '../../services/base-api-service'

export default class BeerList extends Component {
    state = {
        beers: []
    }

    componentDidMount = () => {
        this.getBeers();
    }

    getBeers = () => {
        http.get('/')
            .then(response => this.setState({ beers: response.data }))
            .catch(error => console.log(error))
    }
    render() {
        const { beers } = this.state;
        console.log(beers)
        return (
            <div>
                {beers.map(beer => {
                    return (
                        <div className="row p-3 border rounded m-2" key={beer._id}>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                                <img className="w-50" src={beer.image_url} alt={beer.name} />
                            </div>
                            <div className="col d-flex align-items-center">
                                <div>
                                    <h6 className="text-start">{beer.name}</h6>
                                    <p className="text-start m-0">{beer.tagline}</p>
                                    <p className="text-muted text-start m-0">{beer.contributed_by}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
