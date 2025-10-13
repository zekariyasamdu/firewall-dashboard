import Squares from "@/components/ui/Squares";

export const Welcome = () => {
  return (
    <Squares
      speed={0.5}
      squareSize={40}
      direction="diagonal" // up, down, left, right, diagonal
      borderColor="#fff"
      hoverFillColor="#222"
    />
  );
};
