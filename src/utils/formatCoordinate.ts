export default function formatCoordinate({
  coordinate,
  isLatitude,
}: {
  coordinate: number;
  isLatitude: boolean;
}) {
  const absolute = Math.abs(coordinate);
  let degrees = Math.floor(absolute);
  let minutes = Math.round((absolute - degrees) * 60);

  if (minutes === 60) {
    minutes = 0;
    degrees += 1;
  }

  const hemisphere = isLatitude
    ? coordinate >= 0
      ? "N"
      : "S"
    : coordinate >= 0
    ? "E"
    : "W";

  return `${degrees}°${minutes < 10 ? "0" + minutes : minutes}' ${hemisphere}`;
}
