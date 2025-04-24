import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const BanquateDetails = () => {
  const danquates = [
    {
      id: 1,
      title: 'Banquate Title 1',
      description: 'Description of Danquate 1',
      capicity: '200',
      Location: 'Location 2',
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      id: 2,
      title: 'Banquate Title 2',
      description: 'Description of Danquate 2',
      capicity: '200',
      Location: 'Location 2',
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
    },
    // Add more details as needed
  ];

  return (
    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <Grid container spacing={3}>  {/* Changed spacing to 0 */}
        {danquates.map((danquate) => (
          <Grid item xs={12} key={danquate.id}>
            <Card sx={{ width: '370px' }}>
              <CardMedia
                component="img"
                height="140"
                image={danquate.imageUrl}
                alt={danquate.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {danquate.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {danquate.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {danquate.Location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  People Capicity: {danquate.capicity}
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BanquateDetails;