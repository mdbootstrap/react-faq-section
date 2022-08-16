import React, { useState } from "react";
import {
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function StyleOptions() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);
  const [collapse6, setCollapse6] = useState(false);
  const [collapse7, setCollapse7] = useState(false);
  const [collapse8, setCollapse8] = useState(false);
  const [collapse9, setCollapse9] = useState(false);
  const [collapse10, setCollapse10] = useState(false);
  const [collapse11, setCollapse11] = useState(false);
  const [collapse12, setCollapse12] = useState(false);

  const toggleCollapse = (callback) => callback((prev) => !prev);

  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <p className="mb-1">Disabled</p>
      <MDBListGroup>
        <MDBListGroupItem
          tag="a"
          href="#"
          onClick={() => toggleCollapse(setCollapse1)}
          action
        >
          <MDBTypography tag="h5">Question 1</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse1}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" action disabled>
          <MDBTypography tag="h5">Disabled answer</MDBTypography>
          <p className="mb-1">This answer is disabled</p>
          <MDBCollapse show={collapse2}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          href="#"
          onClick={() => toggleCollapse(setCollapse3)}
          action
        >
          <MDBTypography tag="h5">Question 3</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse3}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>

      <p className="mb-1 mt-3">Highlighted</p>
      <MDBListGroup>
        <MDBListGroupItem
          tag="a"
          href="#"
          onClick={() => toggleCollapse(setCollapse4)}
          action
        >
          <MDBTypography tag="h5">Question 1</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse4}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          href="#"
          action
          active
          onClick={() => toggleCollapse(setCollapse5)}
        >
          <MDBTypography tag="h5">Highlighted question?</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small className=" text-white">
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse5}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          href="#"
          action
          onClick={() => toggleCollapse(setCollapse6)}
        >
          <MDBTypography tag="h5">Question 3</MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse6}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>

      <p className="mb-1 mt-3">With small icons</p>
      <MDBListGroup>
        <MDBListGroupItem
          tag="a"
          onClick={() => toggleCollapse(setCollapse7)}
          action
        >
          <MDBTypography tag="h5">
            <MDBIcon fas icon="question me-2" />
            Question 1
          </MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse7}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          action
          onClick={() => toggleCollapse(setCollapse8)}
        >
          <MDBTypography tag="h5">
            <MDBIcon fas icon="question-circle me-2" />
            Question 2
          </MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse8}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          action
          onClick={() => toggleCollapse(setCollapse9)}
        >
          <MDBTypography tag="h5">
            <MDBIcon far icon="question-circle me-2" />
            Question 3
          </MDBTypography>
          <p className="mb-1">Short & concise version of the answer.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse9}>
            Detailed and comprehensive answer goes here. pariatur cliche
            reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>

      <p className="mb-1 mt-3">With large icons</p>
      <MDBListGroup>
        <MDBListGroupItem
          tag="a"
          onClick={() => toggleCollapse(setCollapse10)}
          action
        >
          <div className="d-flex w-100 justify-content-between">
            <MDBRow className="w-100">
              <MDBCol
                size="1"
                className="text-center d-flex align-items-center"
              >
                <MDBIcon fas icon="money-bill me-2" size="3x" />
              </MDBCol>
              <MDBCol size="10">
                <MDBTypography tag="h5">Question about price?</MDBTypography>
                <p className="mb-1">Short & concise version of the answer.</p>
                <small>
                  <u>Learn more</u>
                </small>
                <MDBCollapse show={collapse10}>
                  Detailed and comprehensive answer goes here. pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </MDBCollapse>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          onClick={() => toggleCollapse(setCollapse11)}
          action
        >
          <div className="d-flex w-100 justify-content-between">
            <MDBRow className="w-100">
              <MDBCol
                size="1"
                className="text-center d-flex align-items-center"
              >
                <MDBIcon fas icon="user-cog me-2" size="3x" />
              </MDBCol>
              <MDBCol size="10">
                <MDBTypography tag="h5">Question about technical support?</MDBTypography>
                <p className="mb-1">Short & concise version of the answer.</p>
                <small>
                  <u>Learn more</u>
                </small>
                <MDBCollapse show={collapse11}>
                  Detailed and comprehensive answer goes here. pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </MDBCollapse>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          tag="a"
          onClick={() => toggleCollapse(setCollapse12)}
          action
        >
          <div className="d-flex w-100 justify-content-between">
            <MDBRow className="w-100">
              <MDBCol
                size="1"
                className="text-center d-flex align-items-center"
              >
                <MDBIcon fas icon="dragon me-2" size="3x" />
              </MDBCol>
              <MDBCol size="10">
                <MDBTypography tag="h5">Question about dragons?</MDBTypography>
                <p className="mb-1">Short & concise version of the answer.</p>
                <small>
                  <u>Learn more</u>
                </small>
                <MDBCollapse show={collapse12}>
                  Detailed and comprehensive answer goes here. pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </MDBCollapse>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
}
