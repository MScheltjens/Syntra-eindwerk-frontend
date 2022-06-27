import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const DogRadialBar = ({ dogExe }) => {
  // amounts for the bar
  const totalAmount = dogExe.Amount;
  const amountDone = dogExe.exerciseRegistrations.reduce((acc, obj) => {
    return acc + obj.amountDone;
  }, 0);
  const exercises = [
    { symbol: "DONE", amount: amountDone, color: "#FBD38D" },
    { symbol: "TOTAL", amount: totalAmount, color: "#2B6CB0" },
  ];

  // bar sizing and active state
  const [active, setActive] = useState(null);
  const width = 100;
  const half = width / 2;

  return (
    <div>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={exercises}
            pieValue={(data) => data.amount}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol == data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
          <Text textAnchor="middle" fill="white">
            {`${amountDone} /  ${totalAmount}`}
          </Text>
        </Group>
      </svg>
    </div>
  );
};

export default DogRadialBar;
