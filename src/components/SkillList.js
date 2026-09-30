import React from "react";

const SkillList = React.memo(function SkillList({
  skills,
  onDeleteSkill,
}) {
  return (
    <div>
      {skills.map((skill, index) => (
        <div
          key={skill}
          id={`skill-${index}`}
          onClick={() => onDeleteSkill(skill)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
});

export default SkillList;