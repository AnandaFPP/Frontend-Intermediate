import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProductAction from "../../config/redux/action/Product/updateProductAction";

function ModalUpdate({id, product_name, product_stock, product_price, product_description, children}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [data, setData] = useState({
    product_name,
    product_stock,
    product_price,
    product_description,
  });

  let [image, setImage] = useState(null);

  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  let handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(data, id, image, setShow))
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
              placeholder="Product name"
              name="product_name"
              value={data.product_name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Stock"
              name="product_stock"
              value={data.product_stock}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Price"
              name="product_price"
              value={data.product_price}
              onChange={handleChange}
            />
            <input
              type="file"
              className="form-control mt-3 p-1"
              placeholder="Product Image"
              name="photo"
              value={data.photo}
              onChange={handleUpload}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Description"
              name="product_description"
              value={data.product_description}
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
