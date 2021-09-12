import logoEletronic from 'assets/img/logoEletronic.png';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-black">
            <div className="container">
                <Link to="/">
                    <img src={logoEletronic} alt="eletroniclogo" />
                </Link>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Digite aqui..." aria-label="Search" />
                    <button className="btn btn-warning" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;