const ip = "localhost";
const port = 5121;

export function getUrl(endpoint: string): string{
  return `http://${ip}:${port}/api/${endpoint}`;
}

