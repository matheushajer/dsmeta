import Header from "./asstes/componentes/Header"
import CartaoVendas from "./asstes/componentes/CartaoVendas"

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
