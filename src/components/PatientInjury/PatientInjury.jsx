import React from 'react';

// ----- Material UI -----
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


function PatientInjury() {

    function handleTimeStamp() {
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', 
        day: '2-digit', hour: '2-digit', 
        minute: '2-digit', second: '2-digit'}).format(timestamp));
    }

    return (
        <div className="container">
            <h2>Patient Injury Form:</h2>
            <button onClick={handleTimeStamp}>What's Gucci</button><br /><br />
            <p>Time</p>

            <InputLabel 
                id="demo-simple-select-autowidth-label">Cause of Injury</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    // onChange={handleChange}
                    autoWidth
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select> <br /><br />

        </div>
    )
}

export default PatientInjury;