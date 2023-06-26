import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'

import styles from './Alert.module.css'
const Alert = () => {
    return (
        <div className={styles['container']}>
            <BsInfoCircle />
            Invalid Credentials.
        </div>
    )
}

export default Alert
