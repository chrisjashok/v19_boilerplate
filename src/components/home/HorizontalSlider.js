import React, { useState } from 'react';
import './index.css';
import {
    Box,
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Generate mock data
const cardData = Array.from({ length: 10 }, (_, i) => ({
    title: `Card ${i + 1}`,
    content: `This is the content for card ${i + 1}`,
    image: `https://source.unsplash.com/400x200/?technology,${i}`
}));

// Add "View More" card at the end
cardData.push({
    title: 'View More',
    content: 'See all available items',
    isViewMore: true,
    // image: 'https://via.placeholder.com/400x200?text=View+More'
});

const ITEMS_PER_PAGE = 3;

export default function HorizontalSlider(params) {

    const {lable,handleClick} = params
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(cardData.length / ITEMS_PER_PAGE);

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    const currentCards = cardData.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <Box className="sliding-container" onClick={handleClick}>
            {/* Navigation Buttons */}
            <Box className="slider-nav">
                <Typography variant='h5' >{lable}</Typography>
                <Grid>
                    <IconButton onClick={handlePrev} disabled={page === 0}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton onClick={handleNext} disabled={page === totalPages - 1}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Box>

            {/* Cards */}
            <Grid container spacing={5} sx={{ width: '100vw' }} >
                {currentCards.map((card, index) => (
                    <Grid item xs={12} sm={4} key={index} className="card_container" >
                        <Card
                            className={`card-common ${card.isViewMore ? 'card-view-more' : 'card-default'}`}
                        >
                            <div
                                className="card-image"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />
                            <CardContent className="card-content">
                                <Typography variant="h6" className="card-title">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" className="card-description">
                                    {card.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
