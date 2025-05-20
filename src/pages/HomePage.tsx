export default function HomePage() {
  return (
    <div className="h-full bg-base-100">
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
