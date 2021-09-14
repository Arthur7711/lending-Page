import React from 'react';
import styles from './ImageComp.module.css'

const ImageComp = (props) => {
    return (
        <div className={styles.imgPart}>
            <img alt='img' src={props.img} />
        </div>
    );
}

export default ImageComp;
