import Sidenav from "./sideNav";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./MainDashboard.scss";
import Cry from "../assets/images/cry-todo-1.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalInput from "../elements/ModalInput";
import Form from "react-bootstrap/Form";
import { FormGroup, Input } from "reactstrap";

function Dashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function callGreeting() {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12) {
      greet = "Good Morning";
    } else if (hrs >= 12 && hrs <= 17) {
      greet = "Good Afternoon";
    } else if (hrs >= 17 && hrs <= 24) {
      greet = "Good Evening";
    }
    return greet;
  }

  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Sidenav />
        <Col lg="8" sm="12" className="mt-5 ml-4  mr-5">
          <h2 className="mt-3 text-primary">
            {callGreeting()}, <strong>John</strong>
          </h2>
          <h5 className=" text-secondary">17th, December 2022. 21:34</h5>
          <div className="ml-5 text-center">
            <img src={Cry} alt="cry" className=" mr-0 cry-img" />
          </div>
          <h4 className=" text-secondary text-center">
            You do not have a todo yet
          </h4>
          <div className="text-center mt-3">
            <>
              <Button variant="primary" onClick={handleShow}>
                Create Todo
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Title className="ml-3 mt-3">
                  Create new <strong className="modal-title1">Todo</strong>
                </Modal.Title>
                <Modal.Body>
                  <ModalInput placeholder="Todo title" />
                  <Input
                    className="border"
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Add Todo description"
                    row="5"
                  />
                </Modal.Body>
                <Modal.Footer className="border-0">
                  <Button variant="primary" onClick={handleClose}>
                    Create todo
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
