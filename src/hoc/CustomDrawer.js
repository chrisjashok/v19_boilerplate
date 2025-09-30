import React, { useState } from 'react';
import "./hoc.css";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Grid
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function CustomDrawer(params) {
    let { lable,menuItems,color } = params
    const [showCard, setShowCard] = useState(false);

    // Simulate a large list of menu items
     menuItems = Array.from({ length: 30 }, (_, i) => `Menu Item ${i + 1}`);

    const handleToggle = () => {
        setShowCard((prev) => !prev);
    };

    return (
        <Box className="drawer_box">
            {/* Button should stay full width regardless of card size */}
            <Button
                fullWidth
                variant="text"
                onClick={handleToggle}
                endIcon={showCard ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                color={color??'inherit'}
            >
                {/* {showCard ? 'Hide Menu' : 'Show Menu'} */}
                {lable}
            </Button>

            {showCard && (
                <Card
                   className='drawer_card'
                >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Menu
                        </Typography>
                        <Grid container spacing={1}>
                            {menuItems.map((item, index) => (
                                <Grid
                                    item
                                    xs={4} // 12 columns / 4 = 3 columns
                                    key={index}
                                >
                                    <Typography variant="body2">{item}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
}
