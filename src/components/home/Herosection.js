import "./index.css"
import { Box, Typography, Container } from '@mui/material';

export default function HeroSection() {

    return (
        <Box className="hero_box" >
            {/* Optional dark overlay */}
            <Box className="heroBox_item" />

            <Container className='heroTxt_container'>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Find Your Dream Home
                </Typography>

                <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
                    Owning a home is a keystone of wealth…
                </Typography>

                {/* <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                    Get Started
                </Button> */}
            </Container>
        </Box>
    );
}
