import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants";
import styles from '../styles/farGalaxy.module.css';


const FarGalaxy = () => {

    const [text, setText] = useState();

    useEffect(() => {
        const textInLocalStorage = localStorage.getItem('text');
        if (textInLocalStorage) {
            setText(textInLocalStorage);
        }else{
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setText(data.opening_crawl);
                    localStorage.setItem('text', JSON.stringify(data.opening_crawl));
                });
        }

    }, []);

    return (
        <div>
            <p className={styles.farGalaxy}>{text}</p>
        </div>
    );
}

export default FarGalaxy;

//     componentDidMount() {
//         const opening_crawl = sessionStorage.getItem('opening_crawl');
//         if (opening_crawl) {
//             this.setState({opening_crawl})
//         } else {
//             const episode = Math.floor(1 + Math.random() * 6);
//             fetch(`${base_url}/v1/films/${episode}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     this.setState({opening_crawl: data.opening_crawl});
//                     sessionStorage.setItem('opening_crawl', data.opening_crawl);
//                 });
//         }
//     }

//     render() {
//         return (
//             <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>
//         );
//     }
// }

// export default FarGalaxy;