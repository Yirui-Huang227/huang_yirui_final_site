import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Label,
  Card,
  Dropdown,
  Img,
  HeroImage,
  Table,
  TableHeader,
  TableRow,
  TableFooter,
  TableCell,
  Text,
} from './components';

import {
  basicInfo,
  developerSetup,
  projects,
  resources,
  skills,
} from './data/portfolioData';

const Page = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f6f8f5;
  color: #1f2933;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  border-bottom: 2px solid #d9e5dc;
  padding-bottom: 0.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 520px;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  border: none;
  font-size: 1rem;
  margin-top: 1rem;
`;

const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  flex: 1 1 320px;
  min-width: 300px;
`;

const ResourceWrapper = styled.div`
  flex: 1 1 240px;
  min-width: 220px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryOptions = ['All', 'Rails', 'E-commerce', 'CMS'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techList.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Page>
      <Section>
        <HeroWrapper>
          <HeroImage
            src="https://placehold.co/1400x500/2f6b3b/ffffff?text=Full+Stack+Web+Development+Portfolio"
            alt="Portfolio hero"
          />
          <HeroOverlay>
            <h1>{basicInfo.name}</h1>
            <Text content={basicInfo.program} />
            <Text content={basicInfo.summary} />
            <SearchInput
              type="text"
              placeholder="Search projects by title, description, or tech"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </HeroOverlay>
        </HeroWrapper>
      </Section>

      <Section>
        <Title>Basic Information</Title>
        <Label text="Student Profile" />
        <Text content={`Name: ${basicInfo.name}`} />
        <Text content={`Program: ${basicInfo.program}`} />
        <Text content={`Location: ${basicInfo.location}`} />
        <Text content={`Email: ${basicInfo.email}`} />
      </Section>

      <Section>
        <Title>Work</Title>
        <Label text="Projects" />
        <Text content="This section highlights selected academic and technical projects completed during the program." />

        <ControlsRow>
          <div style={{ minWidth: '240px', maxWidth: '280px' }}>
            <Dropdown
              options={categoryOptions}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedCategory(e.target.value)
              }
            />
          </div>
        </ControlsRow>

        <Grid>
          {filteredProjects.map((project) => (
            <CardWrapper key={project.title}>
              <Img src={project.image} alt={project.title} />
              <Card
                title={project.title}
                content={`${project.description} Technologies: ${project.techList}`}
              />
              <ButtonRow>
                <Button label="View Project" />
                <Button label={project.category} disabled />
              </ButtonRow>
            </CardWrapper>
          ))}
        </Grid>
      </Section>

      <Section>
        <Title>Skills</Title>
        <Label text="Technical Skills" />
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

      <Section>
        <Title>Resources</Title>
        <Label text="Supporting Resources" />
        <Grid>
          {resources.map((resource) => (
            <ResourceWrapper key={resource.title}>
              <Img src={resource.image} alt={resource.title} />
              <Card title={resource.title} content={resource.summary} />
              <ButtonRow>
                <Button label="Visit Resource" />
              </ButtonRow>
            </ResourceWrapper>
          ))}
        </Grid>
      </Section>

      <Section>
        <Title>Developer Setup</Title>
        <Label text="Environment" />
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHeader>

            <tbody>
              <TableRow>
                <TableCell>VS Code Setup</TableCell>
                <TableCell>{developerSetup.vscode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Terminal Setup</TableCell>
                <TableCell>{developerSetup.terminal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Preferred Editor Font</TableCell>
                <TableCell>{developerSetup.font}</TableCell>
              </TableRow>
            </tbody>

            <TableFooter>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Portfolio environment configured</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableWrapper>
      </Section>
    </Page>
  );
}

export default App;
