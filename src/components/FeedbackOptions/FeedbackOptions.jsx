import styles from './FeedbackOptions.module.css';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={styles.buttonContainer}>
            {options.map((option, index) => (
                <button className={styles.button} key={index} onClick={() => onLeaveFeedback(option)}>
                  {option}
                </button>
            ))}
       </div>
    );
};

export default FeedbackOptions;
