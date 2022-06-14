import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = {
  name: "35-39",
  uv: 8.22,
  pv: 9800,
  fill: "#82ca9d",
};

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const DogRadialBar = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default DogRadialBar;
