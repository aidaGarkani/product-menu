import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './ItemCard.css';


const ItemCard = ({ product }) => {
    return (
        <Card className='item-card' sx={{
            width: 320
        }}>
            <CardMedia
                className='img'
                component="img"
                height="200"
                image={product.image.src}
                alt={product.alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Price:{product.price}
                </Typography>
            </CardContent>
        </Card >
    );
}
export default ItemCard;



