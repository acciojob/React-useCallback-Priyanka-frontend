import React, { useCallback, useState } from "react";
import SkillList from "./SkillList";

function UseCallbackComp() {
  const [skill, setSkill] = useState("");

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const handleAddSkill = () => {
    const trimmedSkill = skill.trim();

    if (!trimmedSkill) {
      return;
    }

    // Prevent duplicate skills (case-insensitive)
    const alreadyExists = skills.some(
      (item) => item.toLowerCase() === trimmedSkill.toLowerCase()
    );

    if (alreadyExists) {
      setSkill("");
      return;
    }

    setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
    setSkill("");
  };

  // useCallback prevents this function from being recreated
  // every time UseCallbackComp re-renders.
  const handleDeleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((item) => item !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h1 id="heading">My Skills</h1>

      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(event) => setSkill(event.target.value)}
        placeholder="Enter a skill"
      />

      <button id="skill-add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>

      <SkillList
        skills={skills}
        onDeleteSkill={handleDeleteSkill}
      />
    </div>
  );
}

export default UseCallbackComp;