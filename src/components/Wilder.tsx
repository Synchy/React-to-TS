import blank_profile from "./../assets/blank_profile.png";
import "./Wilder.css";
import { SkillProps } from "./../components/Skill";
import Skill from "./../components/Skill";

export interface IWilderProps {
  id: number;
  name: string;
  city: string;
  skills: SkillProps[];
}

export type WilderCardProps = {
  wilder: IWilderProps;
};

export default function WilderCard({
  wilder: { id, name, city, skills },
}: WilderCardProps) {
  return (
    <article className="card">
      <img src={blank_profile} alt={`${name} de face `} />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos
        accusantium illo possimus reiciendis eos ut fuga, quaerat optio
        sapiente, necessitatibus hic molestiae. Perferendis suscipit vel
        cupiditate. Reprehenderit, corrupti ex!
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            id={skill.id}
            name={skill.name}
            votes={skill.votes}
          />
        ))}
      </ul>

      {/* <button onClick={handleDeleteClick}>Supprimer</button> */}
    </article>
  );
}
