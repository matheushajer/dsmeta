import iconeHeader from '../../img/iconeHeader.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={iconeHeader} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.linkedin.com/in/matheus-hajer-de-melo/"> @MatheusHajer</a>
                </p>
            </div>
        </header>
    )
}

export default Header
