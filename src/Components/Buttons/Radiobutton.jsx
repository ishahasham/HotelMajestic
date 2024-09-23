import React from 'react'
import {RadioGroup, FormControlLabel, Radio } from '@mui/material';
const Radiobutton = ({label1, label2}) => {
  return (
    <RadioGroup row aria-label="radio" name="radio">
    <FormControlLabel
        value="label1"
        control={
            <Radio
                sx={{
                    color: '#0B1726',
                    '&.Mui-checked': {
                        color: '#0B1726',
                    },
                }}
            />
        }
        label={label1}
    />
    <FormControlLabel
        value="label2"
        control={
            <Radio
                sx={{
                    color: '#0B1726',
                    '&.Mui-checked': {
                        color: '#0B1726',
                        '@media (max-width: 768px)': {
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                          }
                    },
                }}
            />
        }
        label={label2}
    />
</RadioGroup>
  )
}

export default Radiobutton
