import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import './Contact.css';





const Contact = () => {

    return (
        <div className='column middle'>
            <div className="content">
                <div>
                    <h4>APPLICATION FORM</h4>
                    <h2>Contact Details</h2>
                    <h5>All fields marked with * are compulsory</h5>
                </div>
                <div>
                    <label htmlFor="alt-email"><h4>Alternate Email Address</h4></label>
                    <input type="text" id='alt-email' name='alt-email' placeholder='Alternate email address' />
                    <label htmlFor="mobile"><h4>Mobile Phone Number*</h4></label>
                    <div className='c-code'>
                        <Select name="country" id="code">
                            <MenuItem value="India" >+91</MenuItem>
                            <MenuItem value="Kenya" >+11</MenuItem>
                            <MenuItem value="Uganda" >+18</MenuItem>
                            <MenuItem value="Somalia" >+33</MenuItem>
                        </Select>
                        <input type="text" id='mob-number' placeholder='Enter mobile number' />
                    </div>
                    <label htmlFor="country"><h4>Country*</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter your country' />
                    <label htmlFor="country"><h4>State / Province</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter your state' />
                    <label htmlFor="country"><h4>City / Town</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter your city' />
                    <label htmlFor="country"><h4>House No., Building Name, Street Address*</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter Address...' />
                    <label htmlFor="country"><h4>Street Address Line 2</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter Address...' />
                    <label htmlFor="country"><h4>PIN Code*</h4></label>
                    <input type="text" id='country' name='country' placeholder='Enter PIN Code...' />
                </div>
                <div className="consent">
                    <p><h4>Communication via SMS/Email/Whatsapp: I expressly consent to receive academic and promotion messages from KEEWE SOLUTIONS, on the mobile phone number and e-mail id I provide via this application form.</h4></p>
                </div>
                <div className="button">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" >Back</Button>
                        <Button variant="contained" type='submit'>Next</Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Contact;
