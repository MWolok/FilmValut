import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const QuestionModal = (props: any) => {
	return (
		<>
			<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Movie Title
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="grid-example">
					<Container>
						<Row>
							<Col xs={12} md={12}>
								<p>Question ?</p>
							</Col>
						</Row>

						<Row>
							<Col xs={4} md={4}>
								<input type="checkbox">A</input>
							</Col>
							<Col xs={4} md={4}>
								<input type="checkbox">B</input>
							</Col>
							<Col xs={4} md={4}>
								<input type="checkbox">C</input>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Next</Button>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default QuestionModal;
