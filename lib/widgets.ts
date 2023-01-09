export async function getWidgetData() {
  const res = await fetch("http://localhost:3000/api/widgets");
  const data = await res.json();
  return data;
}
