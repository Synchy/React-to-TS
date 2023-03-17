import "./Skill.css";

export interface SkillProps {
  id: number;
  name: string;
  votes: number;
}

export default function Skill({ id, name, votes }: SkillProps) {
  return (
    <li key={id}>
      {name}
      <span className="votes">{votes}</span>
    </li>
  );
}
