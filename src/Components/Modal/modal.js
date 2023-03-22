import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {
  console.log(props.title);
  console.log(props.company);
  console.log(props.description);
  console.log(props.salaryRange);
  // function handleHide() {
  //   setModalShow(false);
  //   let modalEl = document.getElementById("modal-show");
  //   modalEl.style.visibility = "hidden"
  // }
  return (
    <div
      id="modal-show"
      className="modal show"
      style={{ display: 'block', visibility: "hidden" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.company}</p>
          <p>{props.description}</p>
          <p>{props.salaryRange}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

  );
}

// { modalShow, setModalShow }, 
// onClick={handleHide}
export default ModalComponent;
