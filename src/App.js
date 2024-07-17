import { Route, Routes, useRoutes } from 'react-router-dom';

import './App.css';
import About from './Page/About';
import AddProduct from './Page/AddProduct';
import Home from './Page/Home';
import ListProducts from './Page/ListProducts';
import Products from './Page/Products';
import ProductDetail from './Page/ProductDetail';
import Login from './Page/Login';
import ProtectedRoute from './Page/ProtectedRoute';
import NotFound from './Page/NotFound';

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to Ruangguru!</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />}>
//           <Route path="list" element={<ListProducts />} />
//           <Route path="add" element={<AddProduct />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

function App() {
  const element = useRoutes([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
    },
    { path: "about", element: <About /> },
    {
      path: "products",
      element: <Products />,
      children: [
        { path: "list", element: <ListProducts /> },
        { path: "add", element: <AddProduct /> },
        { path: ":id", element: <ProductDetail /> },
      ]
    },
    { path: "login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="App">
      <h1>Welcome to Ruangguru!</h1>
      {element}
    </div>
  );
}

export default App;
