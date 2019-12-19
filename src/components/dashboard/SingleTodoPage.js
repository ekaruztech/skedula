import React, { useState } from "react";
import Sidenav from "./sideNav";
import { Container, Row, Col } from "reactstrap";
import "./MainDashboard.scss";
import Undrawn from "../assets/images/undrawn.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalInput from "../elements/ModalInput";
import Form from "react-bootstrap/Form";

import { FormGroup, Input } from "reactstrap";

const SingleTodoPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task, setTask] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Sidenav />
        <Col lg="8" sm="12" className="mt-3 ml-5 mr-5">
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
            <img src={Undrawn} alt="cry" className=" mr-0 cry-img" />
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
                <form onSubmit={handleSubmit}>
                  <Modal.Title className="ml-3 mt-3">
                    Add new <strong className="modal-title1">Task</strong>
                  </Modal.Title>
                  <Modal.Body>
                    <ModalInput
                      placeholder="Task title"
                      className="border"
                      value={task}
                      onChange={e => setTask(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer className="border-0">
                    <Button
                      type="submit"
                      variant="primary"
                      className="btn btn-md"
                      onClick={handleClose}
                    >
                      Add
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>
            </>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTodoPage;
