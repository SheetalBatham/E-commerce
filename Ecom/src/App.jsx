import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Products from './components/Admin/Product'
import Orders from './components/Admin/Orders'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'
import Customers from './components/Admin/Customers'
import Dashboard from './components/Admin/Dashoard'
import NotFound from './components/notfound'

const App=()=>{ 
  return(
   <BrowserRouter>
   <Routes>
      <Route path="/admin">
      <Route path="products" element={<Products/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path=" payments" element={< Payments/>}/>
      <Route path="setting" element={< Setting/>}/>
      <Route path="customers" element={<Customers/>}/>
      <Route path=" dashboard" element={< Dashboard/>}/>

      </Route>
      <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App