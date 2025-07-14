import {configureStore} from '@reduxjs/toolkit'
import habitReducer from '../app/habit.slice'

const store = configureStore({
    reducer : {
        habits : habitReducer
    }
})

export default store

