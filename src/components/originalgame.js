import React, { useEffect } from "react";
import "../style.css";


function Originalgame() {
    useEffect(() => {
        let var1;
        let activeButton = null;

        const buttons = document.querySelectorAll(".box");
        const score = document.getElementById('score');
        const btn = document.getElementById('Dice');
        const reset=document.getElementById('reset');
        const rule=document.getElementById('rules');
        const majrulElement = document.getElementById('Majrul');

        if (buttons.length > 0) {
            buttons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    if (activeButton !== null) {
                        activeButton.style.backgroundColor = ''; 
                        activeButton.style.color = ''; 
                    }

                    button.style.backgroundColor = 'white';
                    button.style.color = 'black';

                    activeButton = button;
                    var1 = index;
                });
            });
        } else {
            console.error('No buttons found with the class "box".');
        }


        const resetall=()=>{
            score.innerText=0
            btn.innerText=0
        }

        reset.addEventListener('click',resetall)

        const makerulevisible = () => {
            console.log("yayyyyyyyy")
            if (majrulElement) {
                console.log("yayyyyyyyy1")
                if (majrulElement.style.display === "none") {
                    console.log('changes')
                    majrulElement.style.display = "block";
                    rule.innerText = 'Hide Rules';
                } else{
                    majrulElement.style.display = 'none';
                    rule.innerText = 'Show Rules';
                }
            } else {
                console.error('Element with ID "Majrul" not found');
            }
        }
    
            rule.addEventListener('click', makerulevisible);
               
    
        

        const gamecheck = (var2) => {
            let newval = parseInt(score.innerText, 10);
            if (var1 === var2) {
                newval += 1;
            } else {
                newval -= 1;
            }
            score.innerText = newval;
        }

        const handleClick = () => {
            let var2 = Math.floor(Math.random() * 7);
            btn.innerText = var2;
            console.log(var1);
            console.log(var2);

            gamecheck(var2);
        };

        btn.addEventListener('click', handleClick);

        // Cleanup function to remove the event listener
        return () => {
            rule.removeEventListener('click', makerulevisible);
            btn.removeEventListener('click', handleClick);
        };
    }, []);


  return (
    <div className="container1">
      <div className="part1">
        <div className="p1">
          <h1 id="score">0</h1>
          <h2>Total Score</h2>
        </div>

        <div className="p2">
          <div className="box">0</div>
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
          <div className="box">6</div>
        </div>
      </div>

      <div className="part2">
        <div className="dice" id="Dice">0</div>

        <button className="butt1"  id="reset">
          Reset Score
        </button>

        <button className="butt1" id="rules">
          Show Rules
        </button>

        <div className="Rules1" id='Majrul'>
          <ul>
            <li>
            Objective: The main goal usually involves achieving a specific score or reaching a target set at the start of the game.
            </li>
            <li>
            Number of Players: Can vary, but typically involves 2 or more players.
            </li>
            <li>
            Scoring: Points are awarded based on the outcome of the dice roll. Scoring rules depend on the specific game but commonly include matching numbers, sums, or specific combinations.
            </li>
          </ul>
        </div>
      </div>
      <div id="boox"></div>
    </div>

  );
}

export default Originalgame;
