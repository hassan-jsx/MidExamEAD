import React from 'react';

const App = () => {
    const [timer, setTimer] = React.useState(5);
    const [isRunning, setIsRunning] = React.useState(false);

    React.useEffect(() => {
        setIsRunning(true);
        const interval = setInterval(() => {
            setTimer((timer) => timer - 1);
            if (timer === 0) {
                setIsRunning(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return <div>{isRunning ? <h1>{timer}</h1> : <h1>Time's up!</h1>}</div>;
};

export default App;
