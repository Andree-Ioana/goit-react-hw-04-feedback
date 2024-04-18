import Title from 'components/Title/Title';
import styles from './Feedback.module.css';
import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics ';
import Notification from 'components/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackCollected, setFeedbackCollected] = useState(false);

  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
    setFeedbackCollected(true); // Setăm feedbackCollected pe true după ce a fost colectat cel puțin un feedback
  };

  return (
    <div className={styles.container}>
      <Title title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      {feedbackCollected ? ( // Verificăm dacă feedback-ul a fost colectat
        <>
          <Title title="Statistics" />
          <Statistics good={good} bad={bad} neutral={neutral} />
        </>
      ) : (
        <Notification message="There is no feedback" /> // Dacă nu, afișăm mesajul de notificare
      )}
    </div>
  );
};

export default Feedback;
