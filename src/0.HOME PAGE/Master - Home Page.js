import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import HamburgerMenu from '../0.HOME PAGE/Hamburger_icon 1.png';
import Cv from '../0.HOME PAGE/CV-HP.png';
import Cv2 from '../0.HOME PAGE/CV2-HP.png';
import Cv3 from '../0.HOME PAGE/CV3-HP.png';
import LeftCvPart from '../0.HOME PAGE/imgs/left-side.png';
import RightCvPart from '../0.HOME PAGE/imgs/right-side.png';
import Code0002 from "./Code0002";
import GlobalFonts from '../fonts/GlobablFonts';
import Code0001 from "./Code0001";
import Code0007 from "./Code0007";
import Code0003 from "./Code0003";
import CurriculumIcon from "./imgs/CurriculumIcon.png"
import ScrollDownIcon from "./imgs/scrollDown.png"




const SelectionHomePage = styled.div`
        position: fixed;
      top:  10%;
      left: 50%;
        transform: translate(-50%, -50%);
      display: flex;
        flex-direction: row;
        justify-content: space-between;
      width: 60%;
      color: white;
    `

const Selection1 = styled.div`
      font-size: 17px;
      text-decoration-line: underline;
      position: relative;
      left: -5%;
    `

const Selection2 = styled.div`
      font-size: 17px;
    `

const Icon = styled.div`
      position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `

const LineThin = styled.div`
        position: absolute;
        top: 175%;
        width: 100%;
        height: 0.5px;
        background-color: white;
      
    `

const ScrollDown = styled.div`
        position: fixed;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;
      img {
        width: 60%;
      }
  z-index: 100;
    `
const MasterHomePageStyled = styled.div`
  width: 100%;
  height: 500%;
  //background: linear-gradient(180deg, #956DD7 0%, #59159C 20%, #36006A 40%, #18002F 60%, #0F001F 80%, #000000 100%);
  background: linear-gradient(180deg, rgba(215, 109, 109, 0.92) 0%, #D88244 52.08%, #9A4100 97.4%);
  font-family: Inter, sans-serif;
`

const FirstSection = styled.div`
  width: 100%;
  height: 20%;
`
const SecondSection = styled.div`
  width: 100%;
  height: 20%;
`
const ThirdSection = FirstSection
const FourthSection = FirstSection
const FifthSection = FirstSection

const CenterContext = styled.div`
  position: fixed;

  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FirstContext = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 10;
`

const SecondContext = styled(FirstContext)`
  display: flex;
  z-index: 11;
`


const ThirdContext = styled(FirstContext)`
  display: flex;
  z-index: 20;
  width: 100%;
  height: 100%;

`
const FourthContext = styled(FirstContext)`
  display: none;
`
const FifthContext = styled(FirstContext)`
  display: none;
`

const ProfileContainer = styled.div`
  position: absolute;
      height: 30%;
      width: 30%;
      top: 18%;
      left: 4%;
      filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.75));
  
  
  .card {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    background-color: rgb(127, 204, 240);
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  .back {
    transform: rotateY(0.5turn);
  }
`


const Card = styled(FirstContext)`
  z-index: 9;


  .content {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .title {
    transform: translateZ(5rem);
    font-size: 2rem;
  }

  .subtitle {
    transform: translateZ(2rem);
  }

  .back {
    transform: rotateY(0.5turn);
  }

  .description {
    transform: translateZ(3rem);
  }
`


const Header = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;

  span {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`


const BurgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
const LeftCv = styled.img`
      height: 100%;
      transform: translateX(-100%);
    `

const RightCv = styled.img`
      height: 100%;
    `

const FullCv = styled.img`
      height: 100%;
    `
const FirstCvFrame = styled.img`
      position: relative;
      height: 100%;
      top: 0;
      left: 0;
    `

const SecondCvFrame = styled.img`
      position: relative;
      height: 100%;
      top: 0;
      left: 0;
    `


const SecondParteContainer= styled(ProfileContainer)`
      height: 15%;
      width: 30%;
      position: absolute;
      top: 70%;
      left: 1%;
      filter: drop-shadow(5px -5px 5px rgba(0, 0, 0, 0.75));
    `

const ThirdPartContainer = styled.div`
      height: 15%;
      width: 60%;
      position: absolute;
      top: 65%;
      right: 2%;
      filter: drop-shadow(-5px -5px 5px rgba(0, 0, 0, 0.75));
    `

const FourthPartContainer = styled.div`

      height: 15%;
      width: 60%;
      position: absolute;
      top: 22%;
      right: 2%;
      filter: drop-shadow(-5px 5px 5px rgba(0, 0, 0, 0.75));
    `

function MasterHomePage(props) {


    const [scrollProgress, setScrollProgress] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            console.log('scrollProgress', progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const getAnimationState1 = (isNegative) => {
        if (scrollProgress <= 20) {
            if (isNegative) {
                return {
                    opacity: `${1 - scrollProgress / 20}`,
                    transform: `translateX(-${scrollProgress / 20 * 100}%)`,
                };
            } else {
                return {
                    opacity: `${1 - scrollProgress / 20}`,
                    transform: `translateX(${scrollProgress / 20 * 100}%)`,
                };
            }
        }

        if (scrollProgress <= 50 && scrollProgress > 20) {
            return {display: 'none'};
        }

        if (scrollProgress <= 55 && scrollProgress > 50) {
            if (isNegative) {
                return {
                    opacity: `${(scrollProgress - 50) / 5}`,
                    transform: `translateX(-${100 - (scrollProgress - 50) / 5 * 100}%)`,
                };
            } else {
                return {
                    opacity: `${(scrollProgress - 50) / 5}`,
                    transform: `translateX(${100 - (scrollProgress - 50) / 5 * 100}%)`,
                };
            }
        }


        if (scrollProgress > 55) {
            return {
                display: 'none'
            };
        }

    }


    const getAnimationState2 = () => {
        if (scrollProgress < 20) {
            return {
                display: 'flex',
            };
        }
        if (scrollProgress < 40 && scrollProgress > 20) {
            return {
                display: 'flex',
                transform: `rotateY(${(scrollProgress - 20) / 20 * 0.5}turn)`,
            };
        }
        if (scrollProgress < 50 && scrollProgress > 40) {
            return {
                display: 'flex',
                transform: `rotateY(${0.5 + (scrollProgress - 40) / 10 * 0.5}turn)`,
            };
        }
        if (scrollProgress > 55) {

            return {
                display: 'none'
            };
        }
        return {
            display: 'flex'
        };
    }


    const getAnimationState3 = () => {

        if (scrollProgress <= 60 && scrollProgress > 55) {
            return {
                display: 'flex',
                filter: `blur(${(scrollProgress - 55) / 5 * 3}px)`
            }
        }
        if (scrollProgress > 60) {
            return {
                display: 'flex',
                filter: `blur(3px)`
            };
        }
        return {display: 'none'};
    }

    const getAnimationState4 = (isLeft) => {

        if (scrollProgress <= 75 && scrollProgress > 55) {
            if (isLeft) {
                return {
                    transform: `translateX(-${200-(scrollProgress - 55) / 20 * 200}%)`,
                };
            } else {
                return {
                    transform: `translateX(${200-(scrollProgress - 55) / 20 * 200}%)`,
                };
            }
        }

        if (scrollProgress <= 100 && scrollProgress > 75) {
            return {
                transform: `rotateY(${(scrollProgress - 75) / 25 * 0.5}turn)`,
            };
        }

        if (scrollProgress > 100) {
            return {
            };
        }


        return {display: 'none'};
    }



    useEffect(() => {
        let timeout = null;
        let isScrolling = false;

        const stopScrollDetected = () => {

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (window.scrollY / totalHeight) * 100;
            console.log('stopScrollDetected2', scrollProgress);

            if (scrollProgress <= 10) {
                window.scrollTo({top: 0, behavior: 'smooth'});
                return;
            }

            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;


            if (scrollProgress > 10 && scrollProgress <= 30) {
                const targetScrollPosition = 0.20 * pageHeight;
                window.scrollTo({top: targetScrollPosition, behavior: 'smooth'});
                return;
            }

            if (scrollProgress > 30 && scrollProgress <= 50) {
                const targetScrollPosition = 0.4 * pageHeight;
                window.scrollTo({top: targetScrollPosition, behavior: 'smooth'});
                return;
            }

            if (scrollProgress > 50 && scrollProgress <= 65) {
                const targetScrollPosition = 0.55 * pageHeight;
                window.scrollTo({top: targetScrollPosition, behavior: 'smooth'});
                return;
            }

            if (scrollProgress > 65 && scrollProgress <= 85) {
                const targetScrollPosition = 0.75 * pageHeight;
                window.scrollTo({top: targetScrollPosition, behavior: 'smooth'});
                return;
            }

            if (scrollProgress > 85) {
                window.scrollTo({top: pageHeight, behavior: 'smooth'});
                return;
            }
        }

        const handleScrollStop = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (!isScrolling) {
                    stopScrollDetected();
                }
            }, 100);
        };

        const handleScrollStart = (e) => {
            //check if touched element has id of 'scroll-down'
            console.log('handleScrollSTART', e.targetTouches);
            //check if touched element has id of 'scroll-down'
            if (e.target.id === 'scroll-down') {
                return;
            }
            isScrolling = true;
            clearTimeout(timeout);
        };

        const handleScrollEnd = (e) => {
            //check if touched element has id of 'scroll-down'
            console.log('handleScrollEnd', e.targetTouches);
            if (e.target.id === 'scroll-down') {
                console.log('manualScroll');
                return;
            }
            isScrolling = false;
            handleScrollStop()
        };

        window.addEventListener('touchmove', handleScrollStart);
        window.addEventListener('touchend', handleScrollEnd);
        return () => {
            window.removeEventListener('touchmove', handleScrollStart);
            window.removeEventListener('touchend', handleScrollEnd);
        };
    }, []);

    const ScrollDownVisibility = () => {

            if (scrollProgress >= 100) {
                return {
                    display: 'none'
                };
            }
    }

    const manualScroll = () => {
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollProgress = scrollProgress + 20;
        window.scrollTo({top: pageHeight/100*newScrollProgress, behavior: 'smooth'});

    }

    return (
        <MasterHomePageStyled>
            <GlobalFonts/>
            <Header>
                <span>SAGAI</span>
                <BurgerMenu>
                    <img src={HamburgerMenu} alt="menu"/>
                </BurgerMenu>
            </Header>

            <SelectionHomePage>
                <Selection1>
                    Candidates
                </Selection1>
                <Icon>
                    <img src={CurriculumIcon} alt="Icon"/>
                </Icon>
                <Selection2>
                    Recruiters
                </Selection2>
                <LineThin>

                </LineThin>
            </SelectionHomePage>

            <ScrollDown style={ScrollDownVisibility()} onClick={manualScroll} id={'scroll-down'}>
                <img src={ScrollDownIcon} alt="ScrollDownIcon"/>
            </ScrollDown>

            <CenterContext>
                <FirstContext>
                    <LeftCv src={LeftCvPart} alt="Cv" style={getAnimationState1(true)}/>
                    <RightCv src={RightCvPart} alt="Cv" style={getAnimationState1(false)}/>
                </FirstContext>
                <Card>
                    <div className="content" style={getAnimationState2()}>
                        <div className="front">
                            <FirstCvFrame src={Cv2} alt="Cv2"/>
                        </div>

                        <div className="back">
                            <SecondCvFrame src={Cv3} alt="Cv3"/>
                        </div>
                    </div>
                </Card>
                <SecondContext>
                    {/*<FirstCvFrame src={Cv2} alt="Cv2"/>*/}
                    {/*<SecondCvFrame src={Cv3} alt="Cv3"/>*/}
                    <FullCv src={Cv} alt="Cv" style={getAnimationState3()}></FullCv>
                </SecondContext>
                <ThirdContext>
                    <ProfileContainer>

                        <div className="card" >
                            <div className="content" style={getAnimationState4(true)}>
                                <div className="front">
                                    <Code0002 turn={0}/>

                                </div>
                                <div className="back">
                                    <Code0002 turn={0.5}/>
                                </div>
                            </div>
                        </div>
                    </ProfileContainer>
                    <SecondParteContainer>



                        <div className="card" >
                            <div className="content" style={getAnimationState4(true)}>
                                <div className="front">
                                    <Code0001/>
                                </div>
                                <div className="back">
                                    <Code0001/>
                                </div>
                            </div>
                        </div>
                    </SecondParteContainer>
                    <ThirdPartContainer style={getAnimationState4(false)}>
                        <Code0007/>
                    </ThirdPartContainer>
                    <FourthPartContainer style={getAnimationState4(false)}>
                        <Code0003/>
                    </FourthPartContainer>
                </ThirdContext>
                <FourthContext>
                    <h1>040</h1>
                </FourthContext>
                <FifthContext>
                    <h1>050</h1>
                </FifthContext>
            </CenterContext>


            <FirstSection>

            </FirstSection>
            <SecondSection>
                2
            </SecondSection>
            <ThirdSection>
                3
            </ThirdSection>
            <FourthSection>
                4
            </FourthSection>
            <FifthSection>
                5
            </FifthSection>
        </MasterHomePageStyled>
    );
}


export default MasterHomePage;