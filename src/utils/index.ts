export function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

// fetch wrapper function like axios
interface CustomFetchOptions {
  method?: string;
  headers?: { [key: string]: string };
  data?: unknown;
}
export async function customFetch(
  url: string,
  options: CustomFetchOptions = {}
) {
  const defaultOptions: CustomFetchOptions = {
    method: "GET",
    headers: {},
    data: null,
  };
  const mergedOptions: CustomFetchOptions = { ...defaultOptions, ...options };

  return fetch(url, mergedOptions).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  });
}

// format currency
export function formatCurrency(
  value: number | string,
  fractionDigits?: number
) {
  let numberValue = value;
  if (typeof numberValue === "string") {
    numberValue = Number(value);
  }

  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: fractionDigits === undefined ? 2 : fractionDigits,
  }).format(numberValue);
}
