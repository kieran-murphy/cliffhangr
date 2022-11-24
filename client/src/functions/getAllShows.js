async function getAllShows(setShows, setLoading) {
  const response = await fetch("/shows");
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const records = await response.json();
  setShows(records.shows);
  setLoading(false);
}

export default getAllShows;
