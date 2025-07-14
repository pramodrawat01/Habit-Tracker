import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addHabit } from '../app/habit.slice';

const AddHabitForm = () => {

    const [habit, setHabit] = useState('');
    const [frequency, setFrequency] = useState("daily")
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(habit.trim()){
            dispatch(addHabit({
                habit, 
                frequency
            }))
            setHabit('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <Box 
            sx={{
                display : 'flex',
                flexDirection : 'column',
                gap : 2
            }}
        >
            <TextField
                label="habit name"
                value={habit}
                onChange={(e)=>{setHabit(e.target.value)}}
                placeholder='Enter habit here'
                fullWidth
            />

            <FormControl fullWidth>
                <InputLabel id="frequency-label">Frequency</InputLabel>
                <Select
                labelId="frequency-label"
                label='frequency'
                value={frequency}
                onChange={(e)=>{setFrequency(e.target.value)}}>
                    
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
            </FormControl>

            <Button
                type="submit" 
                variant="contained"
                color="primary"
            >
                Add Habit
            </Button>
        </Box>
    </form>
  )
}

export default AddHabitForm