import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/Sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';


type SeriesData = {
    name: string;
    data: number[];
}

type ChartDate = {
    labels: {
        categories: string[];
    };

    series: SeriesData[];
}

function BarChat() {

    const [chartDate, setChartDate] = useState<ChartDate>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => {
                const date = response.data as SaleSucess[];

                const myLabels = date.map(x => x.sellerName);
                const mySeries = date.map(y => round(100 * (y.deals/y.visited) ,1));

                setChartDate({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries
                        }
                    ]
                });

            });
    }, []);


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    /*
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
    */

    return (
        <Chart
            options={{ ...options, xaxis: chartDate.labels }}
            series={chartDate.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChat;