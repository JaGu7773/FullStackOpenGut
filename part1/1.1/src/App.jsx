const App = () => {
  const Part1 = () => {
    return(
      <div>
        <p>part 1: {part1} Number of exercises: 10</p>
      </div>
    )
  }
  const Part2 = () => {
    return(
      <div>
        <p>part 2: {part2} Number of exercises: 7</p>
      </div>
    )
  }
  const Part3 = () => {
    return(
      <div>
        <p>part 3: {part3} Number of exercises: 14</p>
      </div>
    )
  }
    const Content = () => {
      
      return (
        <div>
          <Part1/>
          <Part2/>
          <Part3/>
        </div>
      )
    }
  const Header = () => {
    return(<h1>{course}</h1>)
  }
  const Total = () => {
    return( 
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }
    const part1 = 'Fundamentals of React'
    const part2 = 'Using props to pass data'
    const part3 = 'State of a component'
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
    const course = 'Half Stack application development'
    return (
        <div>
          <Header course={course} />
          <Content/>
          <Total/>
        </div>
    )
  }
  export default App