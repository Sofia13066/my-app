import React from 'react';
import {starWars} from "../utils/constants";
import styles from "../styles/farGalaxy.module.css";

const StarWars = () => {
    return (
                <p className={styles.farGalaxy}>{starWars}</p>
            );
};

export default StarWars;