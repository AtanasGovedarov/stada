import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
