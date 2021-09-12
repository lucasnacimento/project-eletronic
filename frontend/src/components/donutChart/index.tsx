import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/Sale';
import { BASE_URL } from 'utils/requests';

type CharDate = {
    labels: string[],
    series: number[]
}

function donutChart() {

    /*
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    */

    //FORMA ERRADA DE FAZER
    let charDate: CharDate = { labels: [], series: [] };


    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const date = response.data as SaleSum[];

            const myLabels = date.map(x => x.sellerName);
            const mySeries = date.map(y => y.sum);

            charDate = { labels: myLabels, series: mySeries };
            console.log(charDate);
        })

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: charDate.labels }}
            series={charDate.series}
            type="donut"
            height="240"
        />
    );
}

export default donutChart;