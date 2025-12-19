

function App() {


  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-950">
        <div className="flex m-3 bg-slate-200 w-80 border-2 rounded-2xl">
          <div>
            <img src="https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png" alt="amazon" className="h-22 p-3"></img>
          </div>
          <div className="pt-2">
            <div className="text-[21px] font-bold">
              Amazon Sale
            </div>
            <div className="text-[14px] ">
              By Sagar Singh Solanki
            </div>
          </div>
        </div>
        <button className="bg-amber-400 rounded-2xl hover:bg-amber-50 hover:text-red-400 w-20">Click Me!</button>
        <p className="text-white md:text-green-500 sm:text-red-500">hey there it's SAGAR</p>
        <div className="bg-amber-400">
          <div className="text-white">
            <img src="E:\CODING\React\04bgchanger\src\hey.jpg" alt="amazon"></img>
          </div>
          <div className="text-white">Content</div>
        </div>
      </div>
    </>
  )
}

export default App
