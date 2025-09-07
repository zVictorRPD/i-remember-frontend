import Cookies from "universal-cookie";

export interface IApiResponse<T> {
  data: T;
  message: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3004";

const cookies = new Cookies(null, { path: "/" });

export function buildRequestParams(params: Record<string, any>): string {
  return new URLSearchParams(params).toString();
}

export async function api<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const userCookie = cookies.get("@iRemember:user");
  if (userCookie) {
    const user = userCookie;
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${user.token}`,
    };
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    body: options?.body ? options.body : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
