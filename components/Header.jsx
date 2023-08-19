import React from 'react';
import styles from "../styles/Home.module.css";

export const Header = () => {
    const setProperty = (col1, col2) => {
        var r = document.querySelector(':root');
        r.style.setProperty('--primary-color', col1);
        r.style.setProperty('--secondary-color', col2);
    }
    const handleChange = (e) => {
        const { value } = e.target;
        var r = document.querySelector(':root');
        if (+value === 1) {
            setProperty('rgb(253, 232, 239)', 'rgb(228, 42, 93)');
        } else if (+value === 2) {
            setProperty('rgb(237, 231, 246)', 'rgb(94, 53, 177)');
        } else {
            setProperty('rgb(224, 242, 241)', 'rgb(0, 137, 123)');
        }
    }


    return (
        <div className={styles.header}>
            Header
            <select onChange={handleChange}>
                <option value="">Select One</option>
                <option value="1">Theme 1</option>
                <option value="2">Theme 2</option>
                <option value="3">Theme 3</option>
            </select>
        </div>
    )
}
