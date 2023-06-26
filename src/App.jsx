import { useState, useRef, useEffect } from 'react'
import './App.css'
import TextField from './components/TextField'
import PrimaryButton from './components/PrimaryButton'
import Checkbox from './components/Checkbox'

import ReCAPTCHA from 'react-google-recaptcha'
import Alert from './components/Alert'
import Welcome from './Welcome'

function App() {
    const captchaRef = useRef(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [attempt, setAttempt] = useState(3)
    const [captcha, setCaptcha] = useState(null)
    const [shownalert, setShownalert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onSubmit = () => {
        setIsLoading(true)

        const interval = setTimeout(() => {
            if (username !== 'enaje' || password !== 'enaje') {
                setAttempt((prev) => (prev > 0 ? prev - 1 : 0))
                if (attempt === 0) {
                    console.log(username)
                    console.log(password)
                    console.log(captchaRef.current.getValue())
                    window.grecaptcha.reset()
                    setCaptcha(null)
                } else {
                    console.log(username)
                    console.log(password)
                }
                setShownalert(true)
            } else {
                setShownalert(false)
                loginHandler()
            }
            setIsLoading(false)
        }, 2000)
    }

    let formValid = false

    if (attempt > 0) {
        formValid = !!username && !!password
    } else {
        formValid = !!username && !!password && !!captcha
    }

    const onCaptchaChange = () => {
        setCaptcha(captchaRef.current.getValue())
    }

    const loginHandler = () => {
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            {isLoggedIn && <Welcome logoutHandler={logoutHandler} />}
            {!isLoggedIn && (
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <nav>
                                <div className="brand">Ni-Kicks PH</div>
                            </nav>
                            <div>
                                <h1>Welcome back!</h1>
                                <p>
                                    Understanding the Components of Information
                                    Assurance
                                </p>
                            </div>
                            <div className="input-fields-container mt-2">
                                {shownalert && <Alert />}

                                <TextField
                                    label="Username"
                                    isRequired={true}
                                    placeholder="Enter your username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                <TextField
                                    label="Password"
                                    isRequired={true}
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <Checkbox label="Remember me" />
                                {attempt === 0 && (
                                    <ReCAPTCHA
                                        ref={captchaRef}
                                        sitekey="6LdUDs8mAAAAABJx4ItLnYARe3YufFqGzAb7V9rG"
                                        onChange={onCaptchaChange}
                                    />
                                )}

                                <PrimaryButton
                                    text="Login"
                                    onClick={onSubmit}
                                    disabled={!formValid || isLoading}
                                    isLoading={isLoading}
                                />
                            </div>
                        </div>
                        <div className="col col2">
                            <div className="image-container"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer">
                            Teddy Marc C. Enaje | BSIT - 3C | IAS2
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default App
