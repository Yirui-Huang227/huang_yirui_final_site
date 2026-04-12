import React from 'react';
import styled from 'styled-components';
import {
  Label,
  Table,
  TableHeader,
  TableRow,
  TableFooter,
  TableCell,
} from '../components';
import { developerSetup } from '../data/portfolioData';

const Page = styled.div`
  padding: 2rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

function DeveloperSetup() {
  return (
    <Page>
      <h1>Developer Setup</h1>
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
              <TableCell>Developer environment configured</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableWrapper>
    </Page>
  );
}

export default DeveloperSetup;
