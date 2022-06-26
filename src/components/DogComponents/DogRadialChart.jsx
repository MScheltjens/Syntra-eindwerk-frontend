import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Heading } from "@chakra-ui/react";

const DogRadialChart = ({ dogExe }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const totalAmountDone = dogExe.exerciseRegistrations.reduce((acc, obj) => {
    return acc + obj.amountDone;
  }, 0);

  const percent = Math.round((dogExe.totalAmount / totalAmountDone) * 10);
  console.log(percent);

  const data = {
    labels: ["Total", "Done"],
    datasets: [
      {
        label: "totalOverweek",
        data: [dogExe.totalAmount, totalAmountDone],
        backgroundColor: ["rgba(4, 131, 135, .6)", "rgba(4, 131, 135, 0.2)"],
        borderColor: ["rgb(4, 131, 135)", "rgb(4, 131, 135, .6)"],
        borderWidth: 1,
        cutout: "100",
      },
    ],
  };

  // const hoverLabel = {
  //   id: "hoverLabel",
  //   afterDraw(chart, args, options) {
  //     const {
  //       ctx,
  //       chartArea: { left, right, top, bottom, width, height },
  //     } = chart;
  //     ctx.save();
  //     console.log(chart);
  //     if (chart._active.length > 0) {
  //       ctx.font = "bolder 50px arial";
  //       ctx.fillStyle =
  //         chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[
  //           chart._active[0].index
  //         ];

  //       ctx.textAlign = "center";
  //       ctx.fillText("klmfsq", width / 2, height / 2);
  //     }
  //   },
  // };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 80).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "Foo-bar",
          textX = Math.round((width - ctx.measureText(text).width) / 1),
          textY = height / 2;
        ctx.fillText(`${percent}%`, textX, textY);

        ctx.save();
      },
    },
  ];

  const options = {
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} plugins={plugins} />
    </>
  );
};

export default DogRadialChart;
