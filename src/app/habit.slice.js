import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    habits : [],
    isLoading : false,
    error : null
}

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async ()=>{
    // simulatin gan api call
    await new Promise((resolve => setTimeout(resolve, 1000)))
    const mockHabits = [
        {id : 1, name : "Write script for youtube video", frequency : "weekly", completedDates : [], createdAt : new Date().toISOString()},
        {id : 2, name : "Run 2 km" , frequency : "Daily", completedDates : [], createdAt : new Date().toISOString()},
       
    ]

    return mockHabits
})

const habitSlice = createSlice({
    name : 'habits',
    initialState, 
    reducers : {
        addHabit : (state, action)=> {
            const {habit, frequency} = action.payload

            const newHabit = {
                id : nanoid(),
                name : habit,
                frequency : frequency,
                completedDates : [],
                createdAt : new Date().toISOString()
            }

            state.habits.push(newHabit)
        },
        removeHabit : (state, action)=> {
            state.habits = state.habits.filter( (habit)=> habit.id !== action.payload.id)
        },

        // ?? what is happning here
        toggleHabit : (state, action)=>{
            const habit = state.habits.find( h=> h.id === action.payload.id)
            if(habit){
                const index = habit.completedDates.indexOf(action.payload.date)
                if(index > -1){
                    habit.completedDates.splice(index, 1)
                }
                else{
                    habit.completedDates.push(action.payload.date)
                }
            }
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchHabits.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(fetchHabits.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.habits = action.payload
        })
        .addCase(fetchHabits.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.error || "Failed to fetch habits"
        })
    }
})

export const{addHabit, removeHabit, toggleHabit} = habitSlice.actions
export default habitSlice.reducer