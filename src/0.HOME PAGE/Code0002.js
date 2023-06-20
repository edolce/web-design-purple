import styled from "styled-components";
import ImgTest from "./imgs/testProfileImage.png"

const Container= styled.div`
        width: 100%;
        height: 100%;
        background: #21201F;
        transform-style: preserve-3d;
`

const ImageContainer = styled.div`
      width: 100%;
      height: 50%;
      img {
        width: 100%;
      }
  transform: translateZ(1.5vh);
    `

const InfoContainer = styled.div`
        width: 80%;
        height: 50%;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: column;
  transform-style: preserve-3d;
    `

const TitleContainer = styled.div`
        margin-top: 0.5vh;
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
      margin-top: 0.5vh;
      transform: translateZ(3vh);
    `

const Subtitle = styled.div`
      font-size: 1vh;
      font-family: "capsula", serif;
      color: #C07C15;
      margin-top: 1vh;

  transform: translateZ(3vh);
    `

const Content = styled.div`
        margin-bottom: 2vh;
        width: 100%;
        flex-grow: 1;
  transform-style: preserve-3d;
    `

const Description = styled.div`
        font-size: 1vh;
        font-family: "capsula", serif;
        color: #978E8A;
        margin-top: 2%;
        text-align: justify;
  transform: translateZ(1.5vh);
    `

const SkillBlock2 = (props) => {


    let infos = props.infos;

    infos = {
        block_title: "EDOARDO GUANI",
        block_sub_title: "BREVE DESCRIZIONE",
        block_description: "Inoltre, pianifica le tue attività e le tue scadenze in modo da avere un obiettivo preciso da raggiungere ogni giorno. Utilizza anche strumenti di gestione del tempo e della produttività, come timer e app specifiche.",
    }





    return (
        <Container>
            <ImageContainer>
                <img src={ImgTest} alt="ewew"/>
            </ImageContainer>
            <InfoContainer>
                <TitleContainer>
                    <Title>
                        {infos.block_title}
                    </Title>
                    <Line>

                    </Line>
                    <Subtitle>
                        {infos.block_sub_title}
                    </Subtitle>
                </TitleContainer>
                <Content>
                    <Description>
                        {infos.block_description}
                    </Description>
                </Content>
            </InfoContainer>
        </Container>



    )
}

export default SkillBlock2;