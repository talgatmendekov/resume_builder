/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { templatedata, templatedataRu } from "../../../utils/fake_data";

const ExperiencePart = () => {
  const { content, control } = useSelector((state) => state.builder);
  const { resumes, resumeId } = useSelector((state) => state.save);
  const { pathname } = useLocation();

  //if the 'control' is TRUE - use 'Fake state' to show the preview of the template

  const { t, i18n } = useTranslation();

  let contentUse = content;

  if (control && i18n.resolvedLanguage === "ru") {
    contentUse = templatedataRu;
  } else if (control && i18n.resolvedLanguage === "en") {
    contentUse = templatedata;
  } else if (resumes.length > 0) {
    const currentItem =
      resumes.find((el) => el.id === resumeId) || resumes[resumes.length - 1];
    contentUse = currentItem.content;
  }
  
  if (pathname !== "/finalize" || resumes.length === 0) {
    contentUse = content;
  } else {
    const currentItem =
      resumes.find((el) => el.id === resumeId) || resumes[resumes.length - 1];
    contentUse = currentItem.content;
  }

  let experienceContent = contentUse.experience.map((experience, index) => {
    return (
      <div key={index}>
        <p>
          <strong>{experience.company}</strong> {experience.address}
        </p>
        <p>
          {experience.position} {experience.startDate} {experience.endDate}
        </p>
        <ul>
          <li>{experience.description1}</li>
          <li>{experience.description2}</li>
          <li>{experience.description3}</li>
        </ul>
      </div>
    );
  });

  //   If there is no data, the Title of the section will not be displayed
  let title;
  if (contentUse.experience.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>{t("left.experience.title")}</strong>
      </h3>
    );
  }

  return (
    <StyledExperiencePart>
      {title}
      {experienceContent}
    </StyledExperiencePart>
  );
};

const StyledExperiencePart = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 94px;
  h3 {
    strong {
      text-transform: uppercase;
    }
  }
`;
export default ExperiencePart;
