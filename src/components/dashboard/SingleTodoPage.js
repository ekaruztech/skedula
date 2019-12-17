import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./MainDashboard.scss";
import Cry from "../assets/images/cry-todo-1.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputField from "../elements/InputField";
import Form from "react-bootstrap/Form";
import { FormGroup, Input } from "reactstrap";

const SingleTodoPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col lg="4" sm="12">
          <h1>SideBar</h1>
        </Col>
        <Col lg="6" sm="12" className="mt-3 mr-5">
          <h3 className="mt-3 text-secondary">
            A trip to France.{" "}
            <small className="bg-secondary ml-5 text-white pending p-1 pr-3">
              {" "}
              pending
            </small>
          </h3>
          <h6 className=" text-secondary">
            A quick brown fox jumbs over the lazy dog
          </h6>
          <div className="ml-5 text-center">
            <img src={Cry} alt="cry" className=" mr-0 cry-img" />
          </div>
          <h4 className=" text-secondary text-center">
            Your task list is empty
          </h4>
          <div className="text-center mt-3">
            <>
              <Button variant="primary" onClick={handleShow}>
                Add Task
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Title className="ml-3 mt-3">
                  Add new <strong className="modal-title1">Task</strong>
                </Modal.Title>
                <Modal.Body>
                  <InputField placeholder="Task title" />
                </Modal.Body>
                <Modal.Footer className="border-0">
                  <Button
                    variant="primary"
                    className="btn btn-md"
                    onClick={handleClose}
                  >
                    Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTodoPage;