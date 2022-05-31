import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, description , price, children }) {
  return (
    <Card sx={{ width: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={image}
          alt="not founded"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary" >
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
