export async function fetchData(url) {
  console.log(url, "sfsdfsd");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}
