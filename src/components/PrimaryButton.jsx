import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import styles from './Button.module.css'
const PrimaryButton = ({ text, onClick, disabled, isLoading }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-fill']}`}
        >
            {isLoading && (
                <span>
                    <CircularProgress style={{ color: '#fff' }} />
                </span>
            )}

            {text}
        </button>
    )
}

export default PrimaryButton
