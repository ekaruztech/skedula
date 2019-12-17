import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";
import "./styles/SideNav.scss";
import { ReactComponent as Logo } from "../../assets/images/Skedula_white.svg";

const DropdownItem = props => {
  const checkText = text => {
    let newText = text;
    if (text.length > 42) {
      newText = newText.substring(0, 19) + "...";
    }
    return newText;
  };
  return (
    <div className="Collapse w-100">
      <div className="down">
        <div className="Collapse-child-one">
          <span className="Collapse-icon">
            {props.current ? (
              <i class="far fa-dot-circle"></i>
            ) : (
              <i class="far fa-circle"></i>
            )}
          </span>
          <span className="Collapse-text">{checkText(props.text)}</span>
        </div>
        <div className="Collapse-child-two">
          <span className="Collapse-icon">
            <i className="fa fa-times" />
          </span>
        </div>
      </div>
    </div>
  );
};

function List(props) {
  return (
    <div className="List w-100" onClick={props.onClick}>
      <div className="List-child-one">
        <span className="List-icon">{props.iconOne}</span>
        <span className="List-text">{props.text}</span>
      </div>

      <div className="List-child-two">
        {props.dropdown ? (
          <span className="List-icon">{props.iconTwo}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function Sidenav() {
  const [isOpen, setOpen] = useState(false);
  const [todos, setTodo] = useState([
    {
      title: "A trip to france",
      id: 5,
      current: true
    },
    {
      title: "John's wedding ceremony",
      id: 3,
      current: false
    },
    {
      title: "IPO plans",
      id: 8,
      current: false
    }
  ]);
  return (
    <Col xs="3" className="Sidenav p-0 m-0">
      <Container>
        <Row>
          <div className="logo--container">
            <Logo className="logo" />
          </div>
          <div className="links--container w-100">
            <List
              dropdown={true}
              text={"My todos"}
              iconTwo={<i className="fa fa-chevron-down" />}
              iconOne={<i class="fas fa-briefcase"></i>}
              onClick={e => setOpen(prev => !prev)}
            />
            <Collapse isOpen={isOpen}>
              <div className="Dropdown w-100">
                {todos.map(todo => (
                  <DropdownItem
                    key={todo.id}
                    text={todo.title}
                    current={todo.current}
                  />
                ))}
              </div>
            </Collapse>
            <List
              dropdown={false}
              text={"Pending"}
              iconOne={<i class="far fa-circle"></i>}
            />

            <List
              dropdown={false}
              text={"In Progress"}
              iconOne={<i class="fas fa-spinner"></i>}
            />
            <List
              dropdown={false}
              text={"Completed"}
              iconTwo={<i className="fa fa-chevron-down" />}
              iconOne={<i class="fas fa-check"></i>}
            />
          </div>
          <div className="logout-container w-100">
            <List
              dropdown={false}
              text={"Logout"}
              iconOne={<i class="fas fa-sign-out-alt"></i>}
            />
          </div>
        </Row>
      </Container>
    </Col>
  );
}

export default Sidenav;
