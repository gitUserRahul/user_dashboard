//base url
export const baseURL =
  process.env.BASE_URL || "https://jsonplaceholder.typicode.com";

export const fetchData = async <T>(endpoint, options = {}): Promise<T> => {
  const url = `${baseURL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
    });

    if (!response.ok) {
      console.error(`Error in ${response.status}: ${response.statusText}`);
      throw new Error(`failed ${response.status}: ${response.statusText}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Network Error", (error as Error).message);
    throw error;
  }
};
