import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react';
import './index.css'

export default function AddUser({ open, handleClose }) {

    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        email: '',
        preference: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit to API or state handler here
        // handleClose();
        setFormData({
            username: '',
            mobile: '',
            email: '',
            preference: ''
        });
    };

    return (
        <Grid container sx={{ bgcolor: '#fff', height: '8rem', border: '1px solid #1976d28f', borderRadius: 2, position: 'absolute', zIndex: 1, top: '93vh', padding: '0 0.5rem 0 0.5rem', boxShadow: '0 0 1.5rem 0  rgba(25, 118, 210, 0.59)' }} >
            <form className="user-form" onSubmit={handleSubmit}>
                <TextField
                    label="User Name"
                    name="username"
                    fullWidth
                    value={formData.username}
                    onChange={handleChange}
                    required
                    margin="dense"
                    className='Txt-Field'
                    size='small'
                />
                <TextField
                    label="Mobile No"
                    name="mobile"
                    fullWidth
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    margin="dense"
                    inputProps={{ pattern: "[0-9]{10}" }}
                    placeholder="e.g. 9876543210"
                    className='Txt-Field'
                    size='small'
                />
            </form>
            <form className="user-form" onSubmit={handleSubmit} >
                <TextField
                    label="E-mail"
                    name="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="dense"
                    className='Txt-Field'
                    size='small'
                />
                {/* <TextField
                    label="Location"
                    name="location"
                    fullWidth
                    value={formData.location}
                    onChange={handleChange}
                    required
                    margin="dense"
                    className='Txt-Field'
                    size='small'
                /> */}

                <Select
                    value={formData.preference}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: '100%', margin:'0 0.5rem 0 0' }}
                    renderValue={(selected) => {
                        console.log('selected', selected);
                        return selected ? selected : <em style={{ color: '#aaa' }}>Select BHK Type</em>;
                    }}
                >
                    <MenuItem value="">
                        <em>Select BHK Type</em>
                    </MenuItem>
                    <MenuItem value="2BHK">2BHK</MenuItem>
                    <MenuItem value="3BHK">3BHK</MenuItem>
                </Select>

            </form>
            <form className="user-form" onSubmit={handleSubmit}>
                <Button type="submit" variant="contained" color="primary" size='large'>
                    Submit
                </Button>
            </form>
        </Grid>
    )
}
