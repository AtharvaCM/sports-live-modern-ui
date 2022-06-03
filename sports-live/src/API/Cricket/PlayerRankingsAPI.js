export const PlayerBattingRankingTestAPI = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/test`;
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

export const PlayerBattingRankingT20API = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/t20`;
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

export const PlayerBattingRankingODIAPI = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/odi`;
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

export const PlayerBowlingRankingODIAPI = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/odi`;
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

export const PlayerBowlingRankingTestAPI = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/test`;
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

export const PlayerBowlingRankingT20API = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/t20`;
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
