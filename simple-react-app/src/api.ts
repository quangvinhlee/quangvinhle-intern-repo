export async function fetchData(): Promise<string> {
  // Simulate an API call
  return fetch("https://example.com/api/data").then((res) => res.text());
}
