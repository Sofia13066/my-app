import React, {Component} from 'react';

const base_url = 'https://sw-info-api.herokuapp.com';

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
      

    componentDidMount() {
        let id = Math.round(Math.random() * (7 - 1) + 1);
        console.log(id);
        fetch(`${base_url}/v1/films/${id}`)
            .then(response => response.json())
            .then(data => this.setState({
                film: {
                    text: data.opening_crawl
                },
                isLoading: false}
            ))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='spinner-border text-primary'></div>
            )
        } else {
            return (
                <div>
                    <h1>Far Galaxy: {this.state.film.text}</h1>
                </div>
            );
        }

    }
}

export default FarGalaxy;
