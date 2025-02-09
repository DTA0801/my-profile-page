import React from 'react';
import CustomTable from '../../components/table.tsx';
import { Box } from '@mui/material';

// Define the columns for the projects table
const columns = [
  { key: 'name', label: 'Project Name', align: 'left', type: 'text' },
  { key: 'type', label: 'Project Type', align: 'left', type: 'text' },
  { key: 'technology', label: 'Technology', align: 'left', type: 'text' },
  { key: 'redirectLink', label: 'Demo Link', align: 'left', type: 'url' },
  { key: 'repoLink', label: 'Repository', align: 'left', type: 'url' },
  { key: 'date', label: 'Date', align: 'left', type: 'text' },
  { key: 'status', label: 'Status', align: 'center', type: 'text' },
];

// Sample project data
const projectsData = [
  {
    name: 'E-Commerce Platform',
    type: 'Web Application',
    technology: 'React, Node.js, MongoDB',
    redirectLink: 'https://demo.example.com/ecommerce',
    repoLink: 'https://github.com/username/ecommerce',
    date: '2023-11-15',
    status: 'Active',
  },
  {
    name: 'Task Management System',
    type: 'Web Application',
    technology: 'React, TypeScript, Material-UI',
    redirectLink: 'https://demo.example.com/tasks',
    repoLink: 'https://github.com/username/task-manager',
    date: '2023-10-20',
    status: 'Completed',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box className="p-4">
      <CustomTable columns={columns} data={projectsData} />
    </Box>
  );
};

export default Projects;