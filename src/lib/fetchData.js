import axios from "axios";

export async function fetchJson(url) {
  try {
    const { data } = await axios.get(url, { timeout: 5000 });
    return data;
  } catch (_e) {
    return null;
  }
}

