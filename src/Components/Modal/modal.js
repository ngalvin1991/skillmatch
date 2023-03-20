import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function jobDetailsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* // needs to input the job title */}
        <Modal.Title id="contained-modal-title-vcenter" align="center">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* // H4 needs to change depending salary */}
        <h4>Centered Modal</h4>
        {/* p needs to change based on job description */}
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      {/* // link to URL */}
        <Button onClick={props.onHide}>Apply Here</Button> 
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <jobDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(App);

export default jobDetailsModal;