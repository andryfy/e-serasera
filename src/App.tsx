function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DaisyUI App</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Welcome to your new React + TypeScript + Vite + DaisyUI app!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
