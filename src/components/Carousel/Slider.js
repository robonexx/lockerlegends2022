import React, {useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import styles from '../../components/Slider.module.scss';

export default function Slider(props) {
    return <div className={styles.slider_wrapper}>
        <h1>Slider</h1>
        {props.children}</div>;
}
