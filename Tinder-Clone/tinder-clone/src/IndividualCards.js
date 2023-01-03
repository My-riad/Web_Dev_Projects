import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import './IndividualCards.css';
import database from './firebase';


function IndividualCards()
{
    const [people, setPeople] = useState([]);
    
    
    //useEffect Runs on a condition (a super strong if statement)
    useEffect(() =>{
        //code runs here
        const unsubscribe = database.collection("people").onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
            );
        //runcs ONCE when this component (IndividualCards.js) loads and never again

        return () =>{
            unsubscribe();
        }
    }, [people]); //[people] will cause it to run whenever the var people changes, just [] does the above comment


    return (
        <div>
            <div className="individualCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                        className='card'
                        style={{backgroundImage: `url(${person.url})`}}
                        style2={{backgroundSize:'contain'}}
                        >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default IndividualCards