import { useState, useEffect, useRef } from 'react';

function Choice2({ tarotCards }) { 


    const directoryName = "Cards-jpg";

    const [leftButtonText, setLeftButtonText] = useState("Left");
    const [rightButtonText, setRightButtonText] = useState("Right");
    const [isSorting, setIsSorting] = useState(false);
    const [currentOrder, setCurrentOrder] = useState([]);
    const [numComp, setNumComp] = useState(0);

    const resolveFunctionRef = useRef(null);

    // Shuffle the tarot cards before starting
    function shuffleCards(array) { 
        for (let i = 0; i < array.length; i++) { 
            const idxToSwapWith = Math.floor(Math.random() * array.length);
            if (i !== idxToSwapWith) { 
                [array[i], array[idxToSwapWith]] = [array[idxToSwapWith], array[i]];
            }
        }
        return array;
    }

    // Initial shuffle when the component is mounted
    useEffect(() => { 
        setCurrentOrder(shuffleCards([...tarotCards]));
    }, [tarotCards]);

    const cards = useRef(currentOrder);

    // Merge Sort function
    async function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        const sortedLeft = await mergeSort(left);
        const sortedRight = await mergeSort(right);

        return await merge(sortedLeft, sortedRight);
    }

    // Merge two sorted arrays while awaiting user input to compare
    async function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Merge process with comparison prompts
        while (leftIndex < left.length && rightIndex < right.length) {
            const comparison = await compare(left[leftIndex], right[rightIndex]);
            if (comparison === "left") {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // If one of the arrays still has elements, add them
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    // Comparison function that returns a promise
    function compare(left, right) {
        setLeftButtonText(left);
        setRightButtonText(right);

        return new Promise((resolve) => { 
            resolveFunctionRef.current = resolve;
        });
    }

    // Handle button clicks to resolve comparisons
    function handleClick(event) { 
        if (!isSorting || !resolveFunctionRef.current) return;
        const buttonId = event.target.id; // left or right
        resolveFunctionRef.current(buttonId); // resolve with button id
        
        setNumComp(prev => prev + 1);
    }

    // Start sorting when the sort button is clicked
    async function startSorting() { 
        setIsSorting(true);
        const sortedArray = await mergeSort([...currentOrder]);
        setCurrentOrder(sortedArray); // Update the sorted array
        setIsSorting(false);
    }

    return (
        <>
            <button onClick={startSorting} disabled={isSorting}>
                Start Sorting
            </button>
            {isSorting == true && ( 
                <span>
                    <img id="left" onClick={handleClick} src={`${directoryName}/${leftButtonText}`}/>
                    <img id="right" onClick={handleClick} src={`${directoryName}/${rightButtonText}`}/>
                </span>
            )}
            

            {/* <span>
                <button id="left" onClick={handleClick}>{leftButtonText}</button>
                <button id="right" onClick={handleClick}>{rightButtonText}</button>
            </span> */}
            <p>Number of comparisons: {numComp}</p>
            {/* <h2>Current Rankings:</h2>
            <ul>
                {currentOrder.map((card, index) => { 
                    return <li key={index}>{index}: {card}</li>
                })}
            </ul> */}
            {isSorting == false && (
                <div className="gallery">
                {currentOrder.map((card, index) => ( 
                    <div key={index} className="gallery-item">
                        <img src={`${directoryName}/${card}`} className="gallery-image"/>
                    </div>
                
                ))}
            </div>
            )}
        </>
    );
}

export default Choice2;
