
import './App.css'
import {Container, Typography} from '@mui/material'
import AddHabitForm from './components/Add.habit.form'
import HabitList from './components/Habit.list'
import HabitStats from './components/Habit.stats'

function App() {

  return (
    <div>

      <Container maxwidth="md">
        <Typography component="h1" variant='h4' align="center">
          Habit Tracker
        </Typography>

        <AddHabitForm/>
        <HabitList/>
        <HabitStats/>
      </Container>
      
    </div>
  )
}

export default App
