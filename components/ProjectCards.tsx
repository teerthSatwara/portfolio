'use client';
import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';

export default function ProjectCards() {
  const projects = useProjects();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {projects.map((project, idx) => (
        <Card
          key={idx}
          sx={{
            maxWidth: 345,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {project.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              {project.description}
            </Typography>

            <Box sx={{ mt: 1.5, mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.tech.map((techItem, i) => (
                <Chip key={i} label={techItem} size="small" variant="outlined" />
              ))}
            </Box>

            {/* Only render if there's a link, and use component="a" to allow href/target/rel */}
            {project.link && (
              <Button
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                endIcon={<LaunchIcon />}
                size="small"
              >
                View Project
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
