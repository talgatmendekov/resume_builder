/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { templatedata, templatedataRu } from "../../../utils/fake_data";

const HeaderPart = () => {
  const { content, control } = useSelector((state) => state.builder);
  const { resumes, resumeId } = useSelector((state) => state.save);
  const { pathname } = useLocation();

  const { i18n } = useTranslation();
  console.log(resumeId);
  let contentUse = content;

  if (control && i18n.resolvedLanguage === "ru") {
    contentUse = templatedataRu;
  } else if (control && i18n.resolvedLanguage === "en") {
    contentUse = templatedata;
  } else if (resumes.length > 0) {
    const currentItem =
      resumes.find((el) => el.id === resumeId) || resumes[resumes.length - 1];
    contentUse = currentItem.content;
    console.log(currentItem);
  }
  
  if (pathname !== "/finalize" || resumes.length === 0) {
    contentUse = content;
  } else {
    const currentItem =
      resumes.find((el) => el.id === resumeId) || resumes[resumes.length - 1];
    contentUse = currentItem.content;
  }

  let divider;
  if (Object.keys(contentUse.header).length > 0) {
    divider = <hr />;
  } else {
    divider = "";
  }
  return (
    <>
      <StyledHeaderPart>
        <div className="contentHeader">
          <h1>{contentUse.header.fullName}</h1>
          <p>
            {contentUse.header.address}
            <br />
            {contentUse.header.city} {contentUse.header.state}{" "}
            {contentUse.header.zipCode}
            <br />
            {contentUse.header.phone}
            <br />
            {contentUse.header.email}
          </p>
          <br />
          <i>{contentUse.header.summary}</i>
          {divider}
        </div>
      </StyledHeaderPart>
    </>
  );
};

const StyledHeaderPart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  align-items: center;
  .contentHeader {
    width: 80%;
  }
  h1 {
    text-transform: uppercase;
  }
  i {
    word-wrap: break-word;
  }
`;

export default HeaderPart;
