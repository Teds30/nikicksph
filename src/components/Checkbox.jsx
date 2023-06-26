import React from 'react'

import styles from './Checkbox.module.css'
const Checkbox = ({ label }) => {
    return (
        <div className={styles['content']}>
            <label className={styles['checkBox']}>
                <input type="checkbox" id="ch1" />
                <div className={styles['transition']}></div>
            </label>
            <p>{label}</p>
        </div>
    )
}

export default Checkbox
