import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom"; 

const languageMap = {
  de: { label: "DE", dir: "ltr", active: true },
  en: { label: "EN", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "de";

  function handleChange(value) {
    i18next.changeLanguage(value);
  }

  return (
    <div className="">
      <select defaultValue={languageMap[selected].label} onChange={handleChange} className="lang-csm">
        {Object.keys(languageMap)?.map(item => (
          <option key={item} value={item} >{languageMap[item].label}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
