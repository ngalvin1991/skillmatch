import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {
  console.log(props.title);
  console.log(props.company);
  console.log(props.description);
  console.log(props.salaryRange);

  const [modalShow, setModalShow] = React.useState(false);
    function handleShow() {
        setModalShow(false);
        let modalEl = document.getElementById("modal-show");
        modalEl.style.visibility = "hidden"
    }
  return (
    <div
      id="modal-show"
      className="modal show"
      style={{ display: 'block', visibility: "hidden" }}
    >
      <Modal.Dialog style={{backgroundColor: '#EDFDFD' }}>
        <Modal.Header>
          <Modal.Title style={{ color: "#9F7AEA" }}>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ fontSize: 30, padding: "20px", color: "#9F7AEA" }}>{props.company}</p>
          <p>{props.description}</p>
          <p style={{  fontSize: 20, padding: "20px", color: "#9F7AEA"}}>Salary Range: {props.salaryRange}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#805AD5"}} >Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

  );
}

export default ModalComponent;
