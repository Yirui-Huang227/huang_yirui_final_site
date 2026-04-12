import React from 'react';
import styled from 'styled-components';
import { Card, Img, Button, Label } from '../components';
import { resources } from '../data/portfolioData';

const Page = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Item = styled.div`
  flex: 1 1 240px;
  min-width: 220px;
`;

function Resources() {
  return (
    <Page>
      <h1>Resources</h1>
      <Label text="Supporting Resources" />

      <Grid>
        {resources.map((resource) => (
          <Item key={resource.title}>
            <Img src={resource.image} alt={resource.title} />
            <Card title={resource.title} content={resource.summary} />
            <Button label="Visit Resource" />
          </Item>
        ))}
      </Grid>
    </Page>
  );
}

export default Resources;
