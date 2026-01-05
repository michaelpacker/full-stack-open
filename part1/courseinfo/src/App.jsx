const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
      </div>
  )

}

const Part = (props) => {
  return (
    <>
      <p>{props.partname} {props.amt}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partname={props.part.parts[0].name} amt={props.part.parts[0].exercises} />
      <Part partname={props.part.parts[1].name} amt={props.part.parts[1].exercises} />
      <Part partname={props.part.parts[2].name} amt={props.part.parts[2].exercises} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total total={course} />
    </div>

  )

}

export default App
