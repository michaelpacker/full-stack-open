const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const Content = () => {
  // Using 'title' and 'quanity' to reduce confusion 
  const parts = [
    { title: 'Fundamentals of React', quantity: 10},
    { title: 'Using props to pass data', quantity: 7},
    { title: 'State of a component', quantity: 14},
  ]
  return (
  // Return the array index, passing the values into props for the Part component
    <div>
      <Part name={parts[0].title} exercises={parts[0].quantity} />
      <Part name={parts[1].title} exercises={parts[1].quantity} />
      <Part name={parts[2].title} exercises={parts[2].quantity} />
    </div>
  )
}

const Total = (props) => {
  // We should use the array here, too. Leaving it for now, since the exercise instructions do not call for adjusting the Total component.
  return (
    <div>
      <Part partname={props.part1} exercisesamt={props.exercises1} />
      <Part partname={props.part2} exercisesamt={props.exercises2} />
      <Part partname={props.part3} exercisesamt={props.exercises3} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
