import React from "react";
import styled from "styled-components";
import { useState } from "react";
// Styled Components

const DivideContainer = styled.div`
display: flex;
justify-content: space-between;
width:100%;
gap: 20%;
margin:0;
padding:0;

`;
const Container = styled.div`
  position: relative;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  @media (max-width: 768px) {
    display: none; 
  }
`;

const Header = styled.h2`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MetricCard = styled.div`
  height: 45%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
`;
const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  position: relative;
  
`;

const Metric = styled.div`
  text-align: center;
`;

const MetricValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const MetricLabel = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;



const IssuesCard = styled.div`
  position: absolute;
  top: 45%;
  left: 70%;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 50%;
  height: 20%;
  z-index: 1;

  
`;

const IssuesText = styled.div`
  flex-grow: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Growth = styled.p`
  font-size: 80%;
  color: #14a800;
  font-weight: bold;
  margin: 0;
`;

const IssuesStat = styled.p`
  font-size: 200%;
  font-weight: bold;
  color: #333;
  margin: 0;
  align-self: flex-start;
`;




const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  justify-content: center;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.active ? "#fff" : "#555")};
  background-color: ${(props) => (props.active ? "#4f46e5" : "transparent")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) =>
    props.active ? "#4f46e5" : "rgba(79, 70, 229, 0.1)"};
  }
`;

const SignInOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #555;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f3f3;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 10px;
`;

const App = () => {

  const [toggleButton, setToggleButton] = useState(1)

  const Toggle = () => {
    setToggleButton(!toggleButton)
  }

  const Option = () => {
    if(toggleButton) {
      return (
        <SignInOptions>
          <SignInButton>
          <img src="../public/github.jpeg" alt="GitHub" />
            Sign in with GitHub
          </SignInButton>
          <SignInButton>
            <img src="../public/bitbucket.jpeg" alt="Bitbucket" />
            Sign in with Bitbucket
          </SignInButton>
          <SignInButton>
            <img src="../public/azure.jpeg" alt="Azure DevOps" />
            Sign in with Azure DevOps
          </SignInButton>
          <SignInButton>
            <img src="../public/gitlab.png" alt="GitLab" />
            Sign in with GitLab
          </SignInButton>
        </SignInOptions>
      )
      
    }
    else {
      return (
        <SignInOptions>
          <SignInButton>
            <img src="../public/gitlab.png" alt="GitLab" />
            Self Hosted GitLab
          </SignInButton>
          <SignInButton>
            <img src="../public/SSO.png" alt="GitLab" />
            Sign in with SSO
          </SignInButton>
        </SignInOptions>
      )
    }
  }
  return (
    <DivideContainer>
      <Container>
        <MetricCard>
          <Header>
            <img
              src="../public/logo.png"
              alt="Logo"
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
            />
            AI to Detect & Autofix Bad Code
          </Header>

          <MetricsContainer>
            <Metric>
              <MetricValue>30+</MetricValue>
              <MetricLabel>Language Support</MetricLabel>
            </Metric>
            <Metric>
              <MetricValue>10K+</MetricValue>
              <MetricLabel>Developers</MetricLabel>
            </Metric>
            <Metric>
              <MetricValue>100K+</MetricValue>
              <MetricLabel>Hours Saved</MetricLabel>
            </Metric>
          </MetricsContainer>
        </MetricCard>
        {/* Issues Card */}
        <IssuesCard>
          <TopRow>
            <img
              src="../public/chart.png"
              alt="Logo"
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
            />
            <Growth>↑ 14% This Week</Growth>
          </TopRow>
          <IssuesStat>500K+</IssuesStat>
        </IssuesCard>
      </Container>
      <RightContainer>
        {/* Welcome Text */}
        <Title>Welcome to CodeAnt AI</Title>
        <Subtitle>Sign up for seamless code integration and fixes!</Subtitle>

        {/* SAAS / Self-Hosted Toggle */}
        <ToggleButtonGroup>
          <ToggleButton active={toggleButton} onClick={Toggle}>SAAS</ToggleButton>
          <ToggleButton active={!toggleButton} onClick={Toggle}>Self Hosted</ToggleButton>
        </ToggleButtonGroup>

        {/* Sign-In Options */}
        <Option />
        

        {/* Footer Text */}
        <FooterText>
          By signing up you agree to the <a href="#privacy">Privacy Policy</a>.
        </FooterText>
      </RightContainer>
    </DivideContainer>
  );
};

export default App;
