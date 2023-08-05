import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

interface QuizModalProps {
    score: number | null;
    onHide: () => void;
    show: boolean;
}

const QuizModal: React.FC<QuizModalProps> = ({ score, onHide, show }) => {
    const [quizScore, setQuizScore] = useState<number | null>(null);

    useEffect(() => {
        setQuizScore(score);
    }, [score]);

    return (
        <Modal centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Quiz Finished!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {quizScore !== null ? (
                    <Container>
                        <Row>
                            <Col>
                                <p>Your Quiz Score: {quizScore}</p>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <p>Calculating your quiz score...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default QuizModal;