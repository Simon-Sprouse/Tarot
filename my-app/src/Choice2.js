import { useState, useEffect, useRef } from 'react';

function Choice2({ tarotCards }) { 
    const [leftButtonText, setLeftButtonText] = useState("Left");
    const [rightButtonText, setRightButtonText] = useState("Right");
    const [isSorting, setIsSorting] = useState(false);
    const [currentOrder, setCurrentOrder] = useState([]);

    const [numComp, setNumComp] = useState(0);

    const resolveFunctionRef = useRef(null);

    function shuffleCards(array) { 
        for (let i = 0; i < array.length; i++) { 
            const idxToSwapWith = Math.floor(Math.random() * array.length);
            if (i != idxToSwapWith) { 
                [array[i], array[idxToSwapWith]] = [array[idxToSwapWith], array[i]];
            }
            
        }
        return array;
    }

    useEffect(() => { 
        setCurrentOrder(shuffleCards([...tarotCards]));
        // console.log(tarotCards);
    }, []);


    const cards = useRef(currentOrder);


    async function bubbleSort() { 
        setIsSorting(true);

        cards.current = currentOrder;

        const n = cards.current.length;
        for (let i = 0; i < n - 1; i++) { 
            for (let j = 0; j < n - i - 1; j++) {
                const comparison = await compare(cards.current[j], cards.current[j+1]);
                if (comparison == "left") { 
                    [cards.current[j], cards.current[j+1]] = [cards.current[j+1], cards.current[j]];
                    setCurrentOrder(cards.current);
                }
            }
        }
        setIsSorting(false);



    }

    function compare(left, right) {
        setLeftButtonText(left);
        setRightButtonText(right);

        return new Promise((resolveFunction) => { 
            resolveFunctionRef.current = resolveFunction;
        })
    }


    function handleClick(event) { 
        if (!isSorting || !resolveFunctionRef.current) return;
        const buttonId = event.target.id; // left or right

        resolveFunctionRef.current(buttonId); // resolve with button id;
        setNumComp(prev => prev + 1);
    }





    return (
    <>
        <p>Kuub2</p>
        <button onClick={bubbleSort} disabled={isSorting}>
            Start Sorting
        </button>
        <span>
            <button id="left" onClick={handleClick}>{leftButtonText}</button>
            <button id="right" onClick={handleClick}>{rightButtonText}</button>
        </span>
        <p>Number of comparisons: {numComp}</p>
        <h2>Current Rankings:</h2>
        <ul>
            {currentOrder.map((card, index) => { 
                return <li key={index}>{index}: {card}</li>
            })}
        </ul>
    </>

    )
}



export default Choice2;