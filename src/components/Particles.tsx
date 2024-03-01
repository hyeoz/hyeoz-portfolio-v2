import { Point, Points } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const particleColor = [
  "#f64444",
  "#fffd89",
  "#ffe661",
  "#708ae9",
  "#373cb5",
  "#9ebd90",
  "#ffb1cb",
  "#92a9cf",
  "#fac854",
  "#b2a6e4",
];

function Particles({ size = 5000 }: { size?: number }) {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <Points limit={size}>
      <pointsMaterial size={0.03} vertexColors />
      {new Array(size).fill(null).map((_, index) => (
        <Point
          key={`point-${index}`}
          position={[
            (0.5 - Math.random()) * width * 2,
            (0.5 - Math.random()) * height * 5 * 2,
            (0.5 - Math.random()) * 25,
          ]}
          color={
            particleColor[
              Math.floor(Math.random() * (particleColor.length - 1))
            ]
          }
        />
      ))}
    </Points>
  );
}

export default Particles;
