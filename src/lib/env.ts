const x = process.env.BACKEND_URL;
if (!x) {
  throw new Error(`no BACKEND_URL specified in the file ".env.local" `);
}
export const BACKEND_URL = x;
