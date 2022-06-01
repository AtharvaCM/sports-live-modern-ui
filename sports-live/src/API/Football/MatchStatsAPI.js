// returns Football Match Stats

export const MatchStatsAPI = async (matchKey) => {
  try {
    console.log("matchKey", matchKey);
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/football/stats/match/${matchKey}`;
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
