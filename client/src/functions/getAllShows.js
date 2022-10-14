async function getAllShows(setShows) {
  const response = await fetch("/shows");
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  console.log(response);
  const records = await response.json();
  setShows(records.shows);
}

export default getAllShows;
