import BarChat from "components/barChat";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-4">Dashboard Vendas</h1>

        <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as vendas (+)</h5>
              <DonutChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
              <BarChat />
            </div>

        </div>
        
        <div className="py-3">
            <h2 className="text-primary">Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
