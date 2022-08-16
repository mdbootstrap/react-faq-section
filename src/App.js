import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/static-faq-section">
        <MDBBtn className="m-3">
          Static FAQ Section
        </MDBBtn>
      </Link>
      <Link to="/form">
        <MDBBtn className="m-3">
         FAQ with contact form
        </MDBBtn>
      </Link>
      <Link to="/short-answer">
        <MDBBtn className="m-3">
          Short Answer Visible
        </MDBBtn>
      </Link>
      <Link to="/style-options">
        <MDBBtn className="m-3">
          FAQ style options
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}