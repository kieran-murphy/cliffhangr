async function getShow(id, setShow, setLoading) {
  const response = await fetch(`/shows/${id}`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const records = await response.json();
  console.log(records);
  setShow(records.shows);
  setLoading(false);
}

export default getShow;
