import {PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  id: number
  title: string, 
  onDelete: (id: number) => void;
}>



// another way to do function

export default function CourseGoal({
  id,
  title, 
  children,
  onDelete
}: CourseGoalProps) {



  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {

//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// export default CourseGoal;


// Destructuring {title, description}: {}
// export default function CourseGoal({title, description}: { 
//   title: string, 
//   description: string 
// }) {


//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }


// export default function CourseGoal(props: { 
//   title: string, description: string 
// }) {


//   return (
//     <article>
//       <div>
//         <h2>Title</h2>
//         <p>description</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }
