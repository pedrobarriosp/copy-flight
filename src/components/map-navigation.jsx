import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import LightWorldMap from '../assets/staticmap-light.png'

export default function Map_Navigation() {
  return (
    <Card sx={{ minWidth:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={LightWorldMap}
          alt="world map"
        />
      </CardActionArea>
    </Card>
  );
}