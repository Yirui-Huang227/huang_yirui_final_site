import React from 'react';
import styled from 'styled-components';
import { HeroImage, Label, Text, Card } from '../components';
import { basicInfo, skills } from '../data/portfolioData';

const Page = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  flex: 1 1 300px;
`;

function Home() {
  return (
    <Page>
      <Section>
        <HeroImage
          src="https://placehold.co/1400x500/2f6b3b/ffffff?text=Full+Stack+Web+Development+Portfolio"
          alt="Portfolio hero"
        />
      </Section>

      <Section>
        <h1>{basicInfo.name}</h1>
        <Label text="Basic Information" />
        <Text content={`Program: ${basicInfo.program}`} />
        <Text content={`Location: ${basicInfo.location}`} />
        <Text content={`Email: ${basicInfo.email}`} />
        <Text content={basicInfo.summary} />
      </Section>

      <Section>
        <Label text="Skills Overview" />
        <Grid>
          <CardWrapper>
            <Card title="Languages" content={skills.languages.join(', ')} />
          </CardWrapper>
          <CardWrapper>
            <Card title="Frameworks" content={skills.frameworks.join(', ')} />
          </CardWrapper>
          <CardWrapper>
            <Card title="Tools" content={skills.tools.join(', ')} />
          </CardWrapper>
        </Grid>
      </Section>
    </Page>
  );
}

export default Home;
