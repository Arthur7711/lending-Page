import React from 'react';
import styles from './TextPart.module.css'

const TextPart = (props) => {
    return (
        <div className={styles.textAreas}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default TextPart;
