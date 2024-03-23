import { useState } from 'react'
import goalsImage from './assets/goals.jpg'
import CourseGoal from "./components/CourseGoal"
import Header from './components/Header'
import CourseGoalList from './components/CourseGoalList'

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth'
      } 
      return [...prevGoals, newGoal]
    });
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goals'}} >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>   
      <CourseGoalList goals={goals}/>
        
    </main>
  )
}

export default App
