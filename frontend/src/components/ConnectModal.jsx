import React from 'react';
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true);

    return (
        <div className="connect__modal">
            <div className="connect__modal__btn">
                <button
                    style={{ background: signUp ? "rgb(83, 83, 83)" : "rgb(28, 28, 28)" }}
                    onClick={() => setSignUp(true)}
                >
                    S'inscrire
                </button>
                <button
                    style={{ background: signUp ? "rgb(28, 28, 28)" : "rgb(83, 83, 83)" }}
                    onClick={() => setSignUp(false)}
                >
                    Se connecter
                </button>
            </div>
            {signUp ? <SignUp /> : <Login /> }
        </div>
    );
};

export default ConnectModal;