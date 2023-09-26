import { useEffect, useState } from "react";

const Countdown = ({hideCountdown}) => {
    const [count, setCount] = useState(3);

    useEffect(() => {

        let timer;

            if (count > 0) {
                timer = setInterval(() => {
                    setCount(currentState => currentState - 1)
                }, 1000)
            } else {
                clearInterval(timer);
                hideCountdown();
            }

            return () => {
                clearInterval(timer);
              };

    }, [count])

    return (
        <p className="countdown">{count}</p>
    )
}

export default Countdown;