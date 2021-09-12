import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/Sale';
import { BASE_URL } from 'utils/requests';

type CharDate = {
    labels: string[],
    series: number[]
}

function DonutChart() {

    const [chartDate, setChartDate] = useState<CharDate>({ labels: [], series: [] });
    
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const date = response.data as SaleSum[];

                const myLabels = date.map(x => x.sellerName);
                const mySeries = date.map(y => y.sum);

                setChartDate({ labels: myLabels, series: mySeries });
                
            });
    }, []);

    /*
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
   

    //FORMA ERRADA DE FAZER
    let charDate: CharDate = { labels: [], series: [] };

    //FORMA ERRADA DE FAZER
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const date = response.data as SaleSum[];

            const myLabels = date.map(x => x.sellerName);
            const mySeries = date.map(y => y.sum);

            charDate = { labels: myLabels, series: mySeries };
            console.log(charDate);
        })
     */



    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartDate.labels }}
            series={chartDate.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;