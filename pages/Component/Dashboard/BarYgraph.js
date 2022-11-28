import { Line, Doughnut, Bar } from "react-chartjs-2";
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardHeader, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { tr } from 'date-fns/locale';
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export default function AppPieGraph() {
    const data = {
        labels: ['นำเข้าทั้งหมด', 'นำเข้าได้', 'นำเข้าไม่ได้', 'เทียบเคียงได้', 'เทียบเคียงไม่ได้'],
        datasets: [
            {
                label: 'จำนวนแปลง',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    '#5C6AC4',
                    '#5AB2ED',
                    '#7FD7D5',
                    '#BF9DEE',
                    '#FCDD45',
                ],
                borderColor: [
                    '#5C6AC4',
                    '#5AB2ED',
                    '#7FD7D5',
                    '#BF9DEE',
                    '#FCDD45',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
            <Card elevation={0}>
                <Grid container justifyContent={'center'} sx ={{height: '50vh'}}>
                    <Bar data={data}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false,
                                    position: 'bottom',
                                    labels: {
                                        usePointStyle: true,
                                        pointStyle: "line",
                                    }
                                },
                                    // title: {
                                    //     display: true,
                                    //     align: 'center',
                                    //     text: 'ข้อมูลเช่าพื้นที่แจกแผ่นพับหน้าด้านฯ แยกตามสายทาง',
                                    //     font:{
                                    //         size:21
                                    //     }
                                    // }
                            }
                        }}
                    />
                </Grid>
            </Card>
        );
}