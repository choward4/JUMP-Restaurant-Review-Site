import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import RestaurantForm from '../forms/RestaurantForm'
import { updateRestaurant } from '../service/RestaurantService';

const RestaurantFormModal = (props) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var restaurant, buttonText;

    const handleUpdate = (restaurant) => {
        updateRestaurant(restaurant);
    }

  // Switch Allows Modal Reuse for Update and Create
  switch (type) {
    case 'update':
      buttonText = type.toString().toUpperCase();
      restaurant = props.restaurant;
      break;
    default:
  }

  return (
    <>
      {<Button variant='primary' onClick={handleShow}>
        {buttonText}
      </Button>}

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{buttonText + ' Restaurant'}</Modal.Title>
        </Modal.Header>
        <Modal.Body><RestaurantForm restaurant={restaurant} handleCrud={handleUpdate} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RestaurantFormModal;