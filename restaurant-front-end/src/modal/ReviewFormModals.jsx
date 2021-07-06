import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReviewForm from '../form/ReviewForm';
import { createReview } from '../service/ReviewService';

const ReviewFormModals = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var review, buttonColor, buttonText, crudFunction;

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'create':
      buttonColor = 'primary';
      buttonText = type.toString().toUpperCase();
      crudFunction = (review) => { createReview(review); }
      review = {};
      break;
    default:
  }

  return (
    <>
      {<Button variant={buttonColor} onClick={handleShow}>
        {buttonText}
      </Button>}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{buttonText + ' Review'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><ReviewForm review={review} handleCrud={crudFunction} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewFormModals;