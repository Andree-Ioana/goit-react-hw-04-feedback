import styles from './Title.module.css';
import React from "react";

const Title = ({title, children}) => {
    return (
        <div className={styles.titleContainer}>
            <h2>{title}</h2>
            {children}
         </div>
     );
};

export default Title;
