import styled from "styled-components";


const Container= styled.div`
      width: 80%;
      height: 100%;
      background: #21201F;
      padding-left: 10%;
      padding-right: 10%;
        display: flex;
        flex-direction: column;

      transform-style: preserve-3d;
    `
const TitleContainer = styled.div`
      margin-top: 1vh;
        width: 100%;
      text-align: left;

  transform-style: preserve-3d;
        `

const Line = styled.div`
        width: 60%;
        height: 1px;
        background: #ff7d00;
      margin: 0.2vh 0;
  transform: translateZ(1.5vh);
        `

const Title = styled.div`
      font-size: 1.2vh;
        font-family: "capsula", serif;
      color: #ffffff;
      margin-left: 8%;
  transform: translateZ(3vh);
    `

const Subtitle = styled.div`
        font-size: 1vh;
        font-family: "capsula", serif;
        color: #C07C15;
      margin-top: 1vh;
      margin-bottom: 0.6vh;

  transform: translateZ(3vh);
        `

const SkillsContainer = styled.div`
      margin-bottom: 10%;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
        justify-content: space-evenly;

  transform-style: preserve-3d;
    `

const Skill = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        transform-style: preserve-3d;
        `

const SkillTitle = styled.div`
      width: 20%;
      height: 100%;
      color: #978E8A;
      text-align: left;
        font-size: 1vh;
    transform: translateZ(1.5vh);
    `

const ProgressBarContainer = styled.div`
        width: 35%;
        height: 1vh;
        display: flex;
        align-items: center;

  transform-style: preserve-3d;
        `


const ProgressContainer = styled.div`
          width: 100%;
          height: 70%;

          box-sizing: border-box;
          border: 1px solid #C07C15;
          border-radius: 20px;

      transform-style: preserve-3d;

      transform: translateZ(1.5vh);
        `
const Progress = styled.div`
          height: 100%;
          background: #C07C15;
            border-radius: 20px;
        `

const ProgressBar = (props) => {


    return (
        <ProgressContainer>
            <Progress style={{width: `${props.progress * 100}%`}}>

            </Progress>
        </ProgressContainer>
    )
}



const SkillBlock = (props) => {


    let infos = props.infos;

    infos = {
        block_title: "LANGUAGES",
        block_sub_title: "SKILLS",
        blocks: [
            {title: "PYTHON", value: 0.8},
            {title: "JAVA", value: 0.2},
            {title: "C++", value: 0.5},
            {title: "C#", value: 0.7},
            {title: "JAVASCRIPT", value: 0.9},
        ]
    }





    return (
        <Container>
            <TitleContainer>
                <Title>
                    {infos.block_title}
                </Title>
                <Line/>
                <Subtitle>
                    {infos.block_sub_title}
                </Subtitle>
            </TitleContainer>
            <SkillsContainer>
                {infos.blocks.map((block) =>
                <Skill>
                    <SkillTitle>
                        {block.title}
                    </SkillTitle>
                    <ProgressBarContainer>
                        <ProgressBar progress={block.value}/>
                    </ProgressBarContainer>
                </Skill>
                )}
            </SkillsContainer>
        </Container>
    )
}

export default SkillBlock;