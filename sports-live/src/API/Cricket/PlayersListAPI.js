const PlayersListAPI = async (teamID) => {
  try {
    const url =
      teamID === null || teamID === undefined
        ? "https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/"
        : `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/${teamID}/players/`;
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
export default PlayersListAPI;
