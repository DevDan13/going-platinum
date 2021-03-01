import "./style.css"
import {TweenMax, Splitting, Elastic, Power3, Power2} from "gsap";



function Reset() {

    const inputOne = document.querySelector("#inputOne");
    const inputOneLabel = document.querySelector("#inputOneLabel");
    const splitLabelOne = Splitting({ target: inputOneLabel, by: "chars" })[0]
        .chars;

    const inputTwo = document.querySelector("#inputTwo");
    const inputTwoLabel = document.querySelector("#inputTwoLabel");
    const splitLabelTwo = Splitting({ target: inputTwoLabel, by: "chars" })[0]
        .chars;

    const inputThree = document.querySelector("#inputThree");
    const inputThreeLabel = document.querySelector("#inputThreeLabel");
    const splitLabelThree = Splitting({ target: inputThreeLabel, by: "chars" })[0]
        .chars;

    let sineMeUp = false;
    const sineCharacters = [];

    inputOne.addEventListener("focus", animateInputOne);
    inputOne.addEventListener("blur", deanimateInputOne);

    inputTwo.addEventListener("focus", animateInputTwo);
    inputTwo.addEventListener("blur", deanimateInputTwo);

    inputThree.addEventListener("focus", () => {
        sineMeUp = true;
        animateInputThree([...sineCharacters]);
    });
    inputThree.addEventListener("blur", () => {
        sineMeUp = false;
        deanimateInputThree();
    });

    function animateInputOne() {
        const charDistance = inputOne.clientWidth / 4;
        let count = 0;
        let charStart = 0;

        //Using fromTo because absolute positioning 
        //makes all the chars start at 0 on first execution
        for (let char of splitLabelOne) {
            TweenMax.fromTo(
                char,
                0.5,
                { x: charStart },
                {
                    x: charDistance * count,
                    ease: Elastic.easeInOut,
                    position: "absolute"
                }
            );

            charStart += determineCharDistance(count);
            count++;
        }
    }

    function deanimateInputOne() {
        let charDistance = 0;
        let count = 0;

        for (let char of splitLabelOne) {
            TweenMax.to(char, 0.5, {
                x: charDistance,
                position: "absolute",
                ease: Elastic.easeInOut
            });

            charDistance += determineCharDistance(count);

            count++;
        }
    }

    function animateInputTwo() {
        const inputWidth = inputTwo.clientWidth;
        const inputHeight = inputTwo.clientHeight;
        let distanceFromInput = inputWidth - 28;
        let count = 0;
        let delay = 0.5;
        let charStart = 0;

        for (const char of splitLabelTwo) {
            char.style.zIndex = "-1";
            TweenMax.fromTo(
                char,
                0.25,
                { x: charStart },
                {
                    y: inputHeight + 24,
                    x: distanceFromInput,
                    rotation: 360,
                    delay,
                    position: "absolute",
                    ease: Power3.easeInOut
                }
            );

            distanceFromInput += determineCharDistance(count);
            charStart += determineCharDistance(count);

            delay -= 0.1;
            count++;
        }
    }

    function deanimateInputTwo() {
        let charDistance = 0;
        let count = 0;
        let delay = 0.0;

        for (let char of splitLabelTwo) {
            char.style.zIndex = "-1";
            TweenMax.to(char, 0.25, {
                y: 0,
                x: charDistance,
                rotation: -360,
                position: "absolute",
                delay,
                ease: Power3.easeInOut
            });

            charDistance += determineCharDistance(count);

            count++;
            delay += 0.1;
        }
    }

    function animateInputThree(chars) {
        if (sineMeUp) {
            let count = 0;

            for (const char of splitLabelThree) {
                TweenMax.to(char, 0.01, {
                    position: "absolute",
                    y: chars[count].y,
                    x: chars[count].x,
                    ease: Power2.easeInOut
                });

                chars[count].angle += 0.12;
                chars[count].y = Math.sin(chars[count].angle) * -5 - 5;
                count++;
            }

            requestAnimationFrame(() => {
                animateInputThree(chars);
            });
        }
    }

    function deanimateInputThree() {
        for (const char of splitLabelThree) {
            TweenMax.to(char, 0.25, {
                y: 0,
                ease: Power2.easeInOut
            });
        }
    }

    function determineCharDistance(count) {
        return count === 0 ? 3 : 8;
    }

    //To configure the sine wave input properly
    window.onload = () => {
        const offset = Math.PI / 5;
        let count = 0;
        let charDistance = 0;

        for (let i = 0; i < 5; i++) {
            const angle = offset * count;

            sineCharacters.push({
                angle,
                y: Math.sin(angle) * -5 - 5,
                x: charDistance
            });

            charDistance += determineCharDistance(count);
            count++;
        }
    };


    return (
        <div>
            <div id="contain">
                <div className="inputContainer">
                    <label id="inputOneLabel" for="inputOne">Input</label>
                    <input id="inputOne" />
                </div>
                <div className="inputContainer">
                    <label id="inputTwoLabel" for="inputTwo">Input</label>
                    <input id="inputTwo" />
                </div>
                <div className="inputContainer">
                    <label id="inputThreeLabel" for="inputThree">Input</label>
                    <input id="inputThree" />
                </div>
            </div>
        </div>

    )
}

export default Reset;