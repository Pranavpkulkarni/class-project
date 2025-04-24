import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HallCard({ hall }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={hall.image}
        alt={hall.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {hall.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hall.location} | Capacity: {hall.capacity} | ₹{hall.price}/day
        </Typography>
      </CardContent>
      <Button component={Link} to={`/hall/${hall.id}`} size="small" sx={{ m: 2 }}>
        View Details
      </Button>
    </Card>
  );
}

export default HallCard;