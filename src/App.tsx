import { useState } from 'react'
import goalsImage from './assets/goals.jpg'
import CourseGoal from "./components/CourseGoal"
import Header from './components/Header'
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      } 
      return [...prevGoals, newGoal]
    });
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goals'}} >
        <h1>Your Course Goals!</h1>
      </Header>
      <NewGoal  onAddGoal={handleAddGoal} />  
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        
    </main>
  )
}

export default App
