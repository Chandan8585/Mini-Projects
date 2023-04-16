import React, { useState } from 'react'
import './Body.scss'
import Editor from './Editor/Editor';

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
const [activeColor , setActiveColor] = useState(colors[0]);
const [resumeInformation , setResumeInformation] = useState({
  [sections.basicInfo]: {
    id: sections.basicInfo,
    sectionTitle: sections.basicInfo,
    detail: {},
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: "",
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: "",
  },
});
  function handleColorSelect(color){
       setActiveColor(color);
  }
  return (
    <div className='toolbar'>
      <div className="colors">{
       colors.map((item) => (
      <span 
      key={item}
      style={{backgroundColor: item}}  
      className={`${item}${activeColor===item ? 'active':""}`}
      onClick={() => handleColorSelect(item)}
      />
       ))}
      </div>
      <Editor Information={resumeInformation}
      setInformation = {setResumeInformation}
      sections={sections}
      />
    </div>
  )
}

export default Body





