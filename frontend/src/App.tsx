import BotaoNotificacao from "./asstes/componentes/BotaoNotificacao"
import Header from "./asstes/componentes/Header"
import CartaoVendas from "./asstes/componentes/CartaoVendas"

function App() {
  return (
    <>
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
