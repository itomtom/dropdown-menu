import "./App.css";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </button>

          <div
            className={`${
              showMenu
                ? "max-h-36 border-box border-2 border-green-200"
                : "max-h-0"
            } transition-max-height ease-in-out duration-500 absolute right-0 mt-2 w-32 rounded-md overflow-hidden bg-white shadow-lg`}
            role="menu"
            aria-orientation="vertical"
          >
            <button
              onClick={() => {
                console.log("click");
              }}
              className="w-full font-semibold py-3 hover:bg-green-100 text-black hover:text-green-500 hover:opacity-100"
              role="menuitem"
            >
              Item 1
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
