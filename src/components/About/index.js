import React from "react";
import * as S from "./styled";

import Social from "../Social";

const About = () => {
  const skills = ['HTML', 'Design Responsivo', 'CSS', 'Javascript', 'ReactJS', 'Git', 'Scrum and Kanban'];

  return (
    <S.AboutWrapper>
      <S.Content>
        <S.Title>Sobre mim</S.Title>
        <S.About>
          <p>Meow to be let out sniff other cat's butt and hang jaw half open thereafter whenever a door is opened.</p>
          <p>Rush in before the human nyaa nyaa bird bird bird bird bird bird human why take bird out i could have eaten that. Kitty loves pigs sweet beast. Groom forever, stretch tongue and leave it slightly out, blep play time. Give attitude kitty poochy.</p>
          <p>Poop on grasses reaches under door into adjacent room for hate dogs for intently stare at the same spot sleep on my human's head. Stare out cat door then go back inside.</p>
        </S.About>
        <S.Subtitle>Habilidades</S.Subtitle>
        <S.SkillList>
          {skills.map((skill, i) => <S.Skill key={i}>{skill}</S.Skill>)}
        </S.SkillList>
        <S.Subtitle>Contato</S.Subtitle>
        <Social />
      </S.Content>
    </S.AboutWrapper>
  );
};

export default About