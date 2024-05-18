import { useState } from 'react'
import { modifyArray } from '../utils/helperFunctions';

export const usePagination = (nbPages) => {
    const pageArray = Array.from({ length: nbPages }, (_, i) => i);
    const [pages, setPages] = useState(pageArray);
    const [steps, setSteps] = useState(6);
    const [start, setStart] = useState(0);

    const setNextPageButtons = () => {
        if (steps < nbPages && steps === 6) {
            setStart(steps);
            setSteps(steps + 6);

            const newSteps = steps;
            const newStart = start;
            const newArray = modifyArray(pageArray, newStart, newSteps);
            setPages(newArray)
        } else if (steps < nbPages && steps < steps * 2) {
            setStart(steps);
            setSteps(steps + 6);
            const newSteps = steps;
            const newStart = start;
            const newArray = modifyArray(pageArray, newStart, newSteps);
            setPages(newArray)
        }
    }

    const setPrevPageButtons = () => {
        if (start === 0) return;
        if (start < steps) {
            setStart(start - 6);
            setSteps(steps - 6);
            const newSteps = steps;
            const newStart = start;
            const newArray = modifyArray(pageArray, newStart, newSteps);
            setPages(newArray)
        }
    }
    return { pages, setNextPageButtons, setPrevPageButtons, start, steps }
}

