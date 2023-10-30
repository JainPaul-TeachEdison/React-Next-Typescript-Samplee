import Button from "@/components/Button";


function Homepage() {

  function handleClick(){
    alert('Button Clicked')
  }

  return (
    <div>
      <h1>Composition Example</h1>
      <Button onClick={handleClick}>Click Here</Button>
    </div>
  )
}

export default Homepage
