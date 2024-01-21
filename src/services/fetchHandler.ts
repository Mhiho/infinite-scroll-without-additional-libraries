import { API_KEY } from '../config/API_KEY';

export const fetchHandler = async (id: number) => {
  try {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/${API_KEY}/${id}`
    );
    return response.json();
  } catch (err) {
    console.error('error:' + err);
  }
};
