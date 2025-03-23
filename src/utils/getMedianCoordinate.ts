export default function getMedianCoordinate(coordinates: number[][]): number[] {
  const [x, y] = coordinates.reduce(
    (acc, [x, y]) => [acc[0] + x, acc[1] + y],
    [0, 0]
  );
  return [x / coordinates.length, y / coordinates.length];
}
