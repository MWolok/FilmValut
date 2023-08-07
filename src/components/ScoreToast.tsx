import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

interface ScoreDisplayProps {
    quizScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ quizScore }) => {
    const [showScore, setShowScore] = useState(true);

    const closeScore = () => {
        setShowScore(false);
    };

    return (
        <Toast
            show={showScore}
            onClose={closeScore}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                minWidth: '200px',
            }}
        >
            <Toast.Header>
                <strong className="mr-auto">Quiz Score</strong>
            </Toast.Header>
            <Toast.Body>
                Your Quiz Score: {quizScore}
            </Toast.Body>
        </Toast>
    );
};

export default ScoreDisplay;
