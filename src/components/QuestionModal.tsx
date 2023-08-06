import { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Question } from "../model/QuizQuestionModel";
import "./QuestionModal.css";
import QuizModal from "./QuizScoreModal";

const questions: Question[] = [
	{
		id: 1,
		movie: "The Dark Knight",
		question: "Who portrayed Batman/Bruce Wayne in 'The Dark Knight'?",
		answerA: "Christian Bale",
		answerB: "Michael Keaton",
		answerC: "Ben Affleck",
		correctAnswer: "Ben Affleck",
	},
	{
		id: 2,
		movie: "The Dark Knight",
		question:
			"What is the name of the criminal mastermind who becomes the Joker?",
		answerA: "Harvey Dent",
		answerB: "Oswald Cobblepot",
		answerC: "The Riddler",
		correctAnswer: "Harvey Dent",
	},
	{
		id: 3,
		movie: "The Dark Knight",
		question:
			"Which actor won an Oscar for their role as the Joker in 'The Dark Knight'?",
		answerA: "Heath Ledger",
		answerB: "Jack Nicholson",
		answerC: "Joaquin Phoenix",
		correctAnswer: "Heath Ledger",
	},
];

const QuestionModal = (props: any) => {
	const [scoreModalShow, setScoreModalShow] = useState<boolean>(false);
	const [num, setNum] = useState(0);
	const [curentQuestion, setCurentQuestion] = useState<Question>(
		questions[num]
	);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [quizScore, setQuizScore] = useState(0);

	const handleCheckboxChange = (answer: string) => {
		setSelectedAnswer(answer);
	};

	const nextQuestion = () => {
		if (curentQuestion.correctAnswer == selectedAnswer) {
			setQuizScore((prevQuizScore) => prevQuizScore + 1);
		}
		console.log(quizScore);

		if (num + 1 < questions.length) {
			setNum((prevNum) => prevNum + 1);
		}
	
	};
	useEffect(() => {
		setCurentQuestion(questions[num]);
		if(questions.length ===num){
			setScoreModalShow(true);
		}
	}, [num]);

	return (
		<>
			<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header closeButton>
					<div className="nums">
						{num + 1}
						<p>/</p>
						{questions.length}
					</div>
					<Modal.Title id="contained-modal-title-vcenter">
						{curentQuestion.movie}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="grid-example">
					<Container>
						<Row>
							<Col xs={12} md={12}>
								<p>{curentQuestion.question}</p>
							</Col>
						</Row>

						<Row>
							<Col xs={4} md={4}>
								<input
									type="checkbox"
									onChange={() => handleCheckboxChange(questions[num].answerA)}
									checked={selectedAnswer === questions[num].answerA}
								/>
								{questions[num].answerA}
							</Col>
							<Col xs={4} md={4}>
								<input
									type="checkbox"
									onChange={() => handleCheckboxChange(questions[num].answerB)}
									checked={selectedAnswer === questions[num].answerB}
								/>
								{questions[num].answerB}
							</Col>
							<Col xs={4} md={4}>
								<input
									type="checkbox"
									onChange={() => handleCheckboxChange(questions[num].answerC)}
									checked={selectedAnswer === questions[num].answerC}
								/>
								<QuizModal score={quizScore} show={scoreModalShow} onHide={()=> {}}></QuizModal>
								{questions[num].answerC}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					{num + 1 < questions.length ? (
						<Button onClick={nextQuestion}>Next</Button>
					) : (
						<>
							<p>Quiz Score: {quizScore}</p>
							<Button onClick={props.onHide}>Close</Button>
						</>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default QuestionModal;
