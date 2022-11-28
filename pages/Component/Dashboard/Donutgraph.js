import { Line, Doughnut, Bar } from "react-chartjs-2";
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardHeader, Grid, Paper, Stack, Typography } from '@mui/material';
import styles from '../../../styles/Home.module.css';
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
                <Grid container justifyContent={'center'} sx ={{height: '50vh', my: 1}}>
                    <Doughnut data={data}
                        options={{
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
                            }
                        }}
                    />
                </Grid>
                <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1,
                                width: '100%',
                                height: '50px',
                            },
                        }}
                    >
                        <Paper elevation={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                            <Grid display="flex" sx= {{alignItems: 'center'}}>
                                <Box item xs={1} sx= {{bgcolor: '#5C6AC4', width: '17px', height: '20px'}}></Box>
                                <Typography variant="subtitle3" className={styles.kanit} ml={1}>นำเข้าทั้งหมด</Typography>
                            </Grid>
                            <Grid display="flex" sx= {{alignItems: 'center'}}>
                                <Box item xs={1} sx= {{bgcolor: '#FCDD45', width: '17px', height: '20px'}}></Box>
                                <Typography variant="subtitle3" className={styles.kanit} ml={1}>นำเข้าไม่ได้</Typography>
                            </Grid>
                            <Grid display="flex" sx= {{alignItems: 'center'}}>
                            <Box item xs={1} sx= {{bgcolor: '#7FD7D5', width: '17px', height: '20px'}}></Box>
                                <Typography variant="subtitle3" className={styles.kanit} ml={1}>เทียบเคียงได้</Typography>
                            </Grid>
                            <Grid display="flex" sx= {{alignItems: 'center'}}>
                                <Box item xs={1} sx= {{bgcolor: '#BF9DEE', width: '17px', height: '20px'}}></Box>
                                <Typography variant="subtitle3" className={styles.kanit} ml={1}>เทียบเคียงไม่ได้</Typography>
                            </Grid>
                        </Paper>
                </Box>
            </Card>
        );
}
