export default function getDate(data: Record<string, any>[]) {
  return data.slice().sort((a, b) => {
    const parseDate = (date: string) => {
      const [dd, mm, yy] = date.split("/").map(Number);
      return new Date(yy, mm - 1, dd).getTime();
    };
    return parseDate(b.date) - parseDate(a.date);
  });
}
