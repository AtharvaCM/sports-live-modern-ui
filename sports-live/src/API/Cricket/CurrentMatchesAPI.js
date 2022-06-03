const CurrentMatchesAPI = async () => {
  try {
    const url =
      "https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/currentMatches";
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};
export default CurrentMatchesAPI;
