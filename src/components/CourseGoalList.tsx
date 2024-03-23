import CourseGoal from "./CourseGoal"
import { type CourseGoal as CoursGoalType } from "../App"

type CourseGoalListProps = {
  goals: CoursGoalType[]
}

export default function ({goals}: CourseGoalListProps) {
  return (
    <div>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} >
            <p>{ goal.description }</p>
          </CourseGoal>
        </li>
      ))}
    </div>
  )
}
