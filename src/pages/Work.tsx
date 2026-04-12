import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Card, Dropdown, Img, Button, Label, Text } from '../components';
import { projects } from '../data/portfolioData';

const Page = styled.div`
  padding: 2rem;
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

const SearchInput = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 0.8rem;
  margin: 1rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

function Work() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryOptions = ['All', 'Rails', 'E-commerce', 'CMS'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techList.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Page>
      <h1>Work</h1>
      <Label text="Projects" />
      <Text content="This page highlights selected projects completed during the program." />

      <SearchInput
        type="text"
        placeholder="Search projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ maxWidth: '260px', marginBottom: '1rem' }}>
        <Dropdown
          options={categoryOptions}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCategory(e.target.value)
          }
        />
      </div>

      <Grid>
        {filteredProjects.map((project) => (
          <CardWrapper key={project.title}>
            <Img src={project.image} alt={project.title} />
            <Card
              title={project.title}
              content={`${project.description} Technologies: ${project.techList}`}
            />
            <Row>
              <Button label="View Project" />
              <Button label={project.category} disabled />
            </Row>
          </CardWrapper>
        ))}
      </Grid>
    </Page>
  );
}

export default Work;
