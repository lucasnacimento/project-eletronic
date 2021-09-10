import logoEletronic from 'assets/img/logoEletronic.png';
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-black">
            <div className="container">
                <img src={logoEletronic} alt="eletroniclogo" />
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Digite aqui..." aria-label="Search"/>
                    <button className="btn btn-warning" type ="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;