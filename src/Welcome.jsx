import React from 'react'
import PrimaryButton from './components/PrimaryButton'

import styles from './Welcome.module.css'

const Welcome = ({ logoutHandler }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <h1>👋 Welcome!</h1>
                <p>
                    Confidentiality is one of the key components of information
                    assurance. It refers to the ability to ensure that
                    information is only accessible to authorized individuals or
                    entities. Confidentiality is critical for protecting
                    sensitive information from unauthorized access, use,
                    disclosure, or modification. In conclusion, confidentiality
                    is critical for protecting sensitive information from
                    unauthorized access, use, disclosure, or modification.
                    Several methods are used to ensure confidentiality,
                    including password protection, encryption, access controls,
                    and non-disclosure agreements. Organizations must take
                    proactive measures to ensure confidentiality and implement
                    robust information security practices to minimize the risk
                    of data breaches and other security incidents.
                </p>
            </div>
            <PrimaryButton text="Logout" onClick={logoutHandler} />
        </div>
    )
}

export default Welcome
