import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, MegaMenu, Navbar } from "flowbite-react";
import Login from './Login'
import Register from "./Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MegaMenu>
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
            <Navbar.Brand href="/">
              <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tubura</span>
            </Navbar.Brand>
            <div className="order-2 hidden items-center md:flex">
              <Link
                to="/login"
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
              >
                Login
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>

            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link as={Link} to="/">Home</Navbar.Link>
              <Navbar.Link as={Link} to="/about">About</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </MegaMenu>

        <Routes>
          {/* <Route exact path="/" element={<App />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
