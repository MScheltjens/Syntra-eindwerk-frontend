import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Heading } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DogBarChart = ({ dogExe }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      linearScale: {
        display: true,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = dogExe.exerciseRegistrations.map((ex) => ex.date);

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Exercises",
        data: dogExe.exerciseRegistrations.map((ex) => ex.amountDone),
        backgroundColor: "#63B3ED",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default DogBarChart;
