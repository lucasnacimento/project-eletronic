function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Rarry Ellen</td>
                        <td>24</td>
                        <td>19</td>
                        <td>16015.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Bobby Rillen</td>
                        <td>31</td>
                        <td>20</td>
                        <td>12017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Sarry Mllen</td>
                        <td>38</td>
                        <td>29</td>
                        <td>18017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;