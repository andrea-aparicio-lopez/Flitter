const apiBase =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : process.env.API_URL;

export async function get<TData>(endpoint: string): Promise<TData> {
  const url = `${apiBase}/api/${endpoint}`;
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(`Failed to make request to ${url}`);
    console.error(error);
    alert(error.message);
    throw error;
  }

  const data = (await res.json()).results as TData;

  return data;
}
