import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const useSanitize = (inputValue) => {
    const [sanitizedValue, setSanitizedValue] = useState('');

    useEffect(() => {
        // Whenever the inputValue changes, sanitize it
        const cleanInput = DOMPurify.sanitize(inputValue);
        setSanitizedValue(cleanInput);
    }, [inputValue]); // The effect will run every time inputValue changes

    return sanitizedValue; // Return the sanitized output
};

export default useSanitize;
