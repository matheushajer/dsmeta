import Header from "./componentes/Header"
import CartaoVendas from "./componentes/CartaoVendas"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <CartaoVendas />
          </div>
        </section>
      </main>

    </>
  )
}

export default App
