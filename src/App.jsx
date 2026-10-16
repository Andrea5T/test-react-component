import Navbar from "./components/Navbar"
import Header from "./components/Header"
import List from "./components/List"

function App() {
  

  return (
    <>
      <Navbar />
      <Header title="Test Components App" />
      <List items={['Andrea', 'Simona', 'Giovanni', 'Luca', 'Laura']} />
    </>
  )
}

export default App
