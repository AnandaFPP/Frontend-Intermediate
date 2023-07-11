import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalDelete({id, children}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log(res);
        alert("Product deleted!");
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
        setShow(false);
      });
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h6 className="text-center">Are you sure want to delete this product?</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              {children}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalDelete;
