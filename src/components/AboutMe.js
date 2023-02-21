import React, {useEffect, useState} from 'react';
import styles from '../styles/aboutMe.module.css';
import {base_url, period_month} from "../utils/constants";

const AboutMe = () => {

    const [hero, setHero] = useState();

    useEffect(() => {
        const hero1 = JSON.parse(localStorage.getItem('hero'));
        if (hero1 && ((Date.now() - hero1.time) < period_month)) {
            setHero(hero1.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero2 = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };
                    setHero(hero2)
                    const info = {
                        payload: hero2,
                        time: Date.now()
                    }
                    localStorage.setItem('hero', JSON.stringify(info));
                });
        }
        return () => console.log('AboutMe unmounted');
    }, [])

    return (
        <div>
            {hero &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:</span> {hero.name}</p>
                    <p><span className={styles.hero_titles}>height:</span> {hero.height}</p>
                    <p><span className={styles.hero_titles}>birth year:</span> {hero.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:</span> {hero.gender}</p>
                    <p><span className={styles.hero_titles}>mass:</span> {hero.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:</span> {hero.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:</span> {hero.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </div>
    )
}

export default AboutMe