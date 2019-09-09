import React from 'react';
import './App.css';
import styled from 'styled-components';
import image from './litchfieldMain.jpg';

const StyledButton = styled.button`
  margin: 0px;
  padding: 1px;
  border: none;
  background-color: white;
  height: 50px;
  width: 50%;
  :focus {outline:0;}
`;

const StyledRightButton = styled(StyledButton)`
  left: 50%;
`;

const StyledBackgroundImg = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
`;

const StyledSection = styled.section`
  border: none;
  padding: 1px;
  position: fixed;
  height: 100%;
  width: 50%;
`;

const StyledConceptTab = styled(StyledSection)`
  background-color: #CD5C5C;
`;

const StyledContactTab = styled(StyledSection)`
  left: 50%;
  background-color: #F0FFF0;
`;

const StyledText = styled.span`
  color: white;
  font-family: "Andale Mono", AndaleMono, monospace; 
`;

const StyledContactText = styled(StyledText)`
  color: black;
`;

const StyledTitleText = styled(StyledText)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 700%;
  line-height: 100%;
  font-weight: bold;
`;

const StyledHref = styled.a`
  font-family: "Andale Mono", AndaleMono, monospace; 
  color: white;
  position: relative;
  left: 20%;
  bottom: 20%;
`;

const StyledHrefContact = styled.a`
  color: black;
  font-family: "Andale Mono", AndaleMono, monospace; 
`;

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = { isConceptVisible: false, isContactVisible: false, };
  }

  handleConceptClick = () => this.setState(({ isConceptVisible, isContactVisible}) => { return  { isConceptVisible: !isConceptVisible, isContactVisible }});

  handleContactClick = () => this.setState(({ isConceptVisible, isContactVisible}) => { return  { isConceptVisible, isContactVisible: !isContactVisible }});

  render() {
      return (
        <React.Fragment>
          <StyledBackgroundImg className="background-image" src={image}/>
          <StyledTitleText>
            WAYS TO DRAW A LINE
          </StyledTitleText>
          <div style={{width: '100%', position: 'fixed'}}>
            <StyledButton onClick={this.handleConceptClick}>Concept</StyledButton>
            <StyledRightButton onClick={this.handleContactClick}>Contact</StyledRightButton>
              { this.state.isConceptVisible && (
                <StyledConceptTab>
                  <div style={{padding: '5%'}}>
                    <StyledText>
                      This project takes the standpoint that the beauty of 
                      the Australian landscape is in the detail, 
                      the complexity,
                      the infinite horizons
                      and the incredible variety of ways to draw a line.
                      <br></br>
                      <br></br>
                      I hope that, though I may not be quite there, 
                      you can kind of see what I’m getting at...
                    </StyledText> 
                  </div>
                  <StyledHref href="https://www.instagram.com/explore/tags/waystodrawaline/">#waystodrawaline</StyledHref>
                </StyledConceptTab> 
              )}
              { this.state.isContactVisible && (
                  <StyledContactTab>
                    <div style={{padding: '5%'}}>
                      <StyledContactText>
                        rowanchase@gmail.com
                        <br></br>
                      </StyledContactText>
                      <StyledHrefContact href="https://www.instagram.com/rowanchase/">https://www.instagram.com/rowanchase/</StyledHrefContact>
                    </div>
                  </StyledContactTab>
              )}
          </div>
        </React.Fragment>
      );
  }
}

export default App;
