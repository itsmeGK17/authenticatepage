import { colors } from '@mui/material'
import React, { useState } from 'react'
import "../App.css"


const NumberToWord = () => {
    const [number, setNumber] = useState("")
    const [word, setWord] = useState("")


    const numberToword = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: 'hundred'

    }




    const convertToWords = (num) => {
        if (num < 0) return "plz Enter valid number";
        if (num == 0) return "zero";
        if (num <= 20) return numberToword[num];
        if (num <= 100) {
            const single = Math.floor(num / 10) * 10
            const double = num % 10;
            return numberToword[single] + (double ? " " + numberToword[double] : " ")

        }
        if (num < 1000) {
            const single = Math.floor(num / 100);
            const double = num % 100;
            return numberToword[single] + ' hundred' + (double ? '  ' + convertToWords(double) : '')
        }
        if (num < 100000) {
            const single = Math.floor(num / 1000);
            const double = num % 1000;
            return numberToword[single] + ' Thousand' + (double ? '  ' + convertToWords(double) : '')
        }
        if (num < 1000000) {
            const single = Math.floor(num / 100000);
            const double = num % 100000;
            const remaining = Math.floor(double / 1000);
            const triple = double % 1000;

            return numberToword[single] + ' hundred ' + convertToWords(remaining) + ' Thousand' + (triple ? " " + convertToWords(triple) : " ")
        }
        // if (num < 100000000) {
        //     const single = Math.floor(num / 1000000);
        //     const double = num % 1000000;
        //     const remaining = Math.floor(double / 10000);
        //     const triple = double % 10000;
        //     const fouth = Math.floor(triple / 1000)
        //     const fouty = fouth % 1000;

        //     return numberToword[single] + ' Million ' + numberToword[fouth] + ' hundred ' + convertToWords(remaining) +" Thousand" + (triple ? " " + convertToWords(triple) : " ")
        // }
        else {
            return <p style={{ color: "red" }}>Enough Here.... Bcoz My Salary Digit End Here</p>
        }
    }


    const handleChange = (e) => {
        const value = e.target.value
        setNumber(value)
        const num1 = parseInt(value, 10);
        if (!isNaN(num1)) {
            setWord(convertToWords(num1));

        } else {
            setWord("")
        }
    }

    return (
        <div>
            <input type='text' min={0} value={number} placeholder='Enter Number...' onChange={handleChange} />
            <button onClick={convertToWords}>Convert</button>
            <p>{word}</p>
        </div>
    )
}

export default NumberToWord;

