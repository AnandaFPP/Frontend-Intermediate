import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProductAction from "../../config/redux/action/updateProductAction";

function ModalUpdate({id, name, stock, price, description, children}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [data, setData] = useState({
    name,
    stock,
    price,
    description,
  });

  let [photo, setPhoto] = useState(null);

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(data, id, photo, setShow))
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="ml-2 mr-2">
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              type="file"
              className="form-control mt-3 p-1"
              placeholder="photo"
              name="photo"
              value={data.photo}
              onChange={handleUpload}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-danger">
              {children}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalUpdate;
