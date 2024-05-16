import ListOfNews from "./components/ListOfNews";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className='bg-[#e0e1e3] text-[#030303] font-["Cuprum"] h-[100vh]' >
        <NavBar />
        <ListOfNews />
       </div>
    </>
  )
}

export default App;
