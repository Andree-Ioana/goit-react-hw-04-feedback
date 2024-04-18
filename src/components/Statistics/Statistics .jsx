import styles from './Statistics.module.css';
import React from 'react';
import { useState, useEffect } from 'react';

const Statistics = ({good, neutral, bad}) => {
    const [totalFeedback, setTotalFeedback] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    useEffect(() => {
        const total = good + neutral + bad;
        const positive = total === 0 ? 0 : Math.round((good / total) * 100);
        setTotalFeedback(total);
        setPositivePercentage(positive);
    }, [good, neutral, bad]);

    return (
        <div className={styles.statisticsContainer}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    )
    
}

export default Statistics;