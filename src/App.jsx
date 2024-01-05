import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
 

  return (
    <div className="bg-[#f5fcf9] flex w-full">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
      <Header />
      </div>
    </div>
  )
}

export default App
