import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/actions/action';
import { toast } from 'react-toastify';
import { userSchema } from '../validations';

export default function AddUser({ open, handleClose }) {

    const [formData, setFormData] = useState({
        name: '',
        mobile_no: '',
        email: '',
        preference: ''
    });
    const dispatch = useDispatch();
    const { user, loading, /*error*/ } = useSelector((state) => state.user);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        const { error, value } = userSchema.validate(formData)
        e.preventDefault();
        // Submit to API or state handler here
        // handleClose();
        if (error) { 
            const message = error.details.map(err => err.message);
            toast.error(...message)
        } else {
            dispatch(createUser(formData))
        }
    };

    useEffect(() => {
        setFormData({
            name: '',
            mobile_no: '',
            email: '',
            preference: ''
        });

    }, [user])

    return (
        <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'cente', bgcolor: '#fff', height: '8rem', border: '1px solid #1976d28f', borderRadius: 2, position: 'absolute', zIndex: 1, top: '95vh', padding: '0 0.5rem 0 0.5rem', boxShadow: '0 0 1.5rem 0  rgba(25, 118, 210, 0.59)' }} >
            <Grid size={{ xs: 6, md: 8, lg: 10 }} className='user-form' >
                <TextField
                    label="User Name"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                    // margin="dense"
                    className='Txt-Field'
                    size='small'
                />
                <TextField
                    label="Mobile No"
                    name="mobile_no"
                    fullWidth
                    value={formData.mobile_no}
                    onChange={handleChange}
                    required
                    // margin="dense"
                    slotProps={{ pattern: "[0-9]{10}" }}
                    placeholder="e.g. 9876543210"
                    className='Txt-Field'
                    size='small'
                />
                <TextField
                    label="E-mail"
                    name="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                    // margin="dense"
                    className='Txt-Field'
                    size='small'
                />
                <FormControl fullWidth >
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                        // labelId='demo-simple-select-label'
                        placeholder="place"
                        value={formData.preference}
                        onChange={handleChange}
                        fullWidth
                        name="preference"
                        size="small"
                        sx={{ width: '100%', margin: '0 0.5rem 0 0' }}
                        displayEmpty

                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Select BHK Type</em>; // Your placeholder text
                            }
                            return selected;
                        }}

                    >
                        <MenuItem disabled value="">
                            <em>Select BHK Type</em>
                        </MenuItem>
                        <MenuItem value="2BHK">2BHK</MenuItem>
                        <MenuItem value="3BHK">3BHK</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 2 }} className='user-form-btn' >
                <Button type="submit" variant="contained" color="primary" size='medium' onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}
