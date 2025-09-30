import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button
} from '@mui/material';
import './index.css';

const AddUser = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        email: '',
        location: ''
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
        handleClose();
        setFormData({
            username: '',
            mobile: '',
            email: '',
            location: ''
        });
    };

    return (
        <Dialog open={open} onClose={handleClose} className="add-user-modal">
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
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
                    />
                </form>
                <form className="user-form" onSubmit={handleSubmit}>
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
                    />
                    <TextField
                        label="Location"
                        name="location"
                        fullWidth
                        value={formData.location}
                        onChange={handleChange}
                        required
                        margin="dense"
                        className='Txt-Field'
                    />
                </form>
                <form className="user-form" onSubmit={handleSubmit}>

                    <DialogActions className="dialog-actions">
                        {/* <Button onClick={handleClose} color="secondary">
              Cancel
            </Button> */}
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog >
    );
};

export default AddUser;
