import LogoFooter from 'assets/img/logoEletronicFooter.png';
function Footer() {
    return (
        <div>
            <footer className="footer footer-dark bg-black d-flex flex-wrap justify-content-between align-items-center py-5 my-4 border-top">
                <p className="col-md-4 mb-0 text-white">Sistema Desenvolvido por <a href="https://github.com/luccasNasc" target="_blank" rel="noreferrer">Lucas Nascimento</a> </p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={LogoFooter} alt="" />
                </a>

                <p className="col-md-4 mb-0 text-white">Curso Semana Spring React 4.0 <br />Promovido por <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></p>
               
            </footer>
        </div>
    );
}

export default Footer;