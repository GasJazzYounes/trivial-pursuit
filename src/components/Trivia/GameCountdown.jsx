import { useEffect, useState } from "react";

const GameCountdown = ({nextQuestion}) => {

    const [seconds, setSeconds] = useState(20)
    // const [showCountdown, setShowCountdown] = useState(true);

    useEffect(() => {
        
        let timer;

            if (seconds > 0) {
                timer = setInterval(() => {
                    setSeconds(currentState => currentState - 1)
                }, 1000)
            } else {
                clearInterval(timer);
                nextQuestion();
            }

            return () => {
                clearInterval(timer);
              };

    }, [seconds])
return <p className={`game-countdown ${seconds <= 5 ? 'last-chance' : ''}`}>00:{seconds >= 10 ? seconds : `0${seconds}`}</p>
}

export default GameCountdown;