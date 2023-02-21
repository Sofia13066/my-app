import React, {useEffect, useState} from 'react';
import "../styles/Contact.css";
import {base_url, period_month} from "../utils/constants";



const Contact = () => {

    const [planets, setPlanets] = useState();

   

    useEffect(() => {

        const planetsInLocalStorage = JSON.parse(localStorage.getItem('planets'));

        if (planetsInLocalStorage && ((Date.now() - planetsInLocalStorage.time) < period_month)) {
            setPlanets(planetsInLocalStorage);
        } else {
            fetch(`${base_url}/v1/planets`)
                .then(response => response.json())
                .then(data => {
                    
                    const planetsData = data.map(item => item.name);
                    setPlanets({planets: planetsData})
                    setPlanets(planetsData);
                    const info = {
                                payload: planetsData,
                                time: Date.now()
                            }
                    
                    localStorage.setItem('planets', JSON.stringify(info));
                });
        }
        return () => console.log('AboutMe unmounted');
    }, [])


    return (
        <div>
           {planets && 
           <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>First Name
                        <input type="text" name="firstname" placeholder="Your name.."/>
                    </label>
                    <label>Planet
                        <select name="planet">{
                            planets.payload.map((item, index) => <option value={item} key={index}>{item}</option>)
                        }
                        </select>
                    </label>
                    <label>Subject
                        <textarea name="subject" placeholder="Write something.."/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>}
        </div>
    );
}

export default Contact;