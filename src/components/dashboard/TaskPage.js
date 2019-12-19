import React, { useState } from "react";
import SideNav from "./sideNav";
import { Container, Row, Col } from "reactstrap";
import "./MainDashboard.scss";
import Cry from "../assets/images/cry-todo-1.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalInput from "../elements/ModalInput";
import Form from "react-bootstrap/Form";
import { FormGroup, Input, Label } from "reactstrap";

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
        <SideNav />>
        <Col lg="8" sm="12" className="mt-3 ml-5 mr-5">
          <h3 className="mt-3 text-secondary">
            A trip to France.{" "}
            <small className="bg-primary ml-5 text-white pending text-center p-1 pr-3">
              in progress
            </small>
          </h3>
          <h6 className=" text-secondary mt-4">
            A quick brown fox jumbs over the lazy dog
          </h6>
          <div>
            <p className="mt-4">
              <i className="far fa-clipboard fa-2x "></i>
              <span className="your-task text-secondary"> Your Tasks</span>
            </p>
          </div>
          <div className="text-right">
            <>
              <Button variant="primary" className="" onClick={handleShow}>
                <i className="fas fa-plus"></i> Add Task
              </Button>

              <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                  <Modal.Title className="ml-3 mt-3">
                    Add new <strong className="modal-title1">Task</strong>
                  </Modal.Title>
                  <Modal.Body>
                    <ModalInput
                      placeholder="Task title"
                      value={task}
                      onChange={event => setTask(event.target.value)}
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
          <div className="mt-5 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> Organize a private jet
              </Label>

              <i class="fas fa-times text-secondary  float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
          <div className="mt-2 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> Get a tour guide
              </Label>

              <i class="fas fa-times text-secondary float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
          <div className="mt-2 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> Book hotels
              </Label>

              <i class="fas fa-times text-secondary float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
          <div className="mt-2 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> Get the money
              </Label>

              <i class="fas fa-times text-secondary float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
          <div className="mt-2 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> Consult flight agency
              </Label>

              <i class="fas fa-times text-secondary float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
          <div className="mt-2 shadow ">
            <FormGroup check>
              <Label className="mt-2 mb-2 ml-2" check>
                <Input type="checkbox" /> miscellaneous task
              </Label>

              <i class="fas fa-times text-secondary float-right mr-3 mt-3"></i>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTodoPage;
