async function getShow(id, setShow, setLoading) {
  const response = await fetch(`/shows/${id}`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const f = await response.json();
  console.log(f);
  setShow(f.shows);
  setLoading(false);
}

export default getShow;
