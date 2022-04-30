/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { templatedata, templatedataRu } from "../../../utils/fake_data";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const SkillsPart = () => {
  const { content, control } = useSelector((state) => state.builder);
  const { resumes, resumeId } = useSelector((state) => state.save);
  const { pathname } = useLocation();

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
  
  if (control && i18n.resolvedLanguage === "ru") {
    contentUse = templatedataRu;
  } else if (control && i18n.resolvedLanguage === "en") {
    contentUse = templatedata;
  } else if (pathname !== "/finalize" || resumes.length === 0) {
    contentUse = content;
  } else {
    const currentItem =
      resumes.find((el) => el.id === resumeId) || resumes[resumes.length - 1];
    contentUse = currentItem.content;
  }

  // If there is no data, the Title of the section will not be displayed
  let title;
  if (contentUse.skills.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>{t("left.skills.title")}</strong>
      </h3>
    );
  }

  let bulletsData = contentUse.skills.map((skill) => {
    if (skill === "") {
      return "";
    } else {
      return <li key={skill.id}>{skill.skillValue}</li>;
    }
  });
  return (
    <StyledSkillsPart>
      <div>
        <ul>
          {title}
          {bulletsData}
        </ul>
      </div>
    </StyledSkillsPart>
  );
};

const StyledSkillsPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 94px;
  h3 {
    strong {
      text-transform: uppercase;
    }
  }
`;
export default SkillsPart;
