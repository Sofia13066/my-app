import React, {Component} from 'react';
import {base_url} from "../utils/constants";
import styles from '../styles/farGalaxy.module.css';

class FarGalaxy extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            lastLoadedData: 
            {
            opening_crawl: 'Loading...',
            loadedData: new Date("2022-03-25").valueOf()}
        }
    }

    // componentDidMount() {
    //     const opening_crawl = sessionStorage.getItem('opening_crawl');
    //     if (opening_crawl) {
    //         this.setState({opening_crawl})
    //     } else {
    //         const episode = Math.floor(1 + Math.random() * 6);
    //         fetch(`${base_url}/v1/films/${episode}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 this.setState({opening_crawl: data.opening_crawl});
    //                 sessionStorage.setItem('opening_crawl', data.opening_crawl);
    //             });
    //     }
    // }

    componentDidMount() {
    
        window.localStorage.clear();
        const lastLoadedToStorage = localStorage.getItem('lastLoadedData');
        let curData = new Date().valueOf();
        let abst = new Date("2022-03-25").valueOf();
        console.log(curData.valueOf());
        console.log(lastLoadedToStorage !== null);
        console.log((lastLoadedToStorage == 'undefined'));
        console.log(typeof lastLoadedToStorage !== 'undefined');
        if (lastLoadedToStorage !== null && ((JSON.parse(lastLoadedToStorage).loadedData) > curData-86400000*30)) {
            this.setState({lastLoadedToStorage})
            console.log('if');
            console.log(curData.valueOf());
        console.log(lastLoadedToStorage !== null);
        console.log((lastLoadedToStorage == 'undefined'));
        console.log(typeof lastLoadedToStorage !== 'undefined');
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    
                    this.setState({lastLoadedData:{opening_crawl: data.opening_crawl, loadedData: curData}});
                    let stateToJson = JSON.stringify(this.state.lastLoadedData)
                    localStorage.setItem('lastLoadedData', stateToJson);
                    console.log(('else'));
                    console.log(curData.valueOf());
                });
         }
     }

    render() {
        return (
            <p className={styles.farGalaxy}>{this.state.lastLoadedData.opening_crawl}</p>
        );
    }
}

export default FarGalaxy;