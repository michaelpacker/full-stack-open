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

const Part = (props) => {
  return (
    <>
      <p>{props.partname} {props.exerciseamt}</p>
    </>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part partname={props.ref1.name} exerciseamt={props.ref1.exercises} />
      <Part partname={props.ref2.name} exerciseamt={props.ref2.exercises} />
      <Part partname={props.ref3.name} exerciseamt={props.ref3.exercises} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content ref1={part1} ref2={part2} ref3={part3}  /> 
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
