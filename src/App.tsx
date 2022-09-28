import reactLogo from './assets/react.svg'

import './styles/main.css';

function App() {

  return (
    <div className="flex-1 w-[1280px] h-screen mx-auto p-16 text-center bg-zinc-800 ">
      <div className="flex flex-row mt-12 justify-center ">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="h-32 p-6 mr-4 drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="h-32 p-6 ml-4 drop-shadow-[0_0_2em_#646cffaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="mt-16 text-4xl font-semibold text-blue-500">Vite + React + TS + Tailwind CSS</h1>

      <h3 className="mt-12 text-5xl font-thin text-orange-200">Ready to begin your new project!!!</h3>

    </div>
  )
}

export default App
