import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './FeesPayment.css';



const FeesPayment = () => {

    const [color, setColor] = useState('primary');

    const goAhead = () => {
        alert('Are you sure you want to continue?');
        setColor('secondary');
        // setDisable(true)
    };


    return (
        <>
            <div className='fees_page'>
                <div>
                    <h4>APPLICATION FORM</h4>
                    <h2>Pay Application Fees</h2>
                    <h5>Application fees to be paid:</h5>
                    <h2>Rs. 300</h2>
                </div>
                <div className="note">
                    <p>Note that payment cannot be made using Debit Card. You can pay using any Credit Card, Netbanking (all Indian banks), wallet, UPI(Google Pay, BHIM, etc.).</p>
                </div>
                <div className="consent">
                    <p>I understand that the information furnished in the Application Form cannot be changed after the payment is made. The Application fees cannot be refunded once the Application form gets accepted.</p>
                </div>

                <div className="buttons">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Agree and Pay</Button>
                        <Button variant="contained">Back</Button>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default FeesPayment;
