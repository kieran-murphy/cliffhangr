async function getReviews(id, setShow, setLoading, type) {
  const response = await fetch(`/reviews/${type}/${id}`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const records = await response.json();
  console.log(records);
  setShow(records.reviews);
  setLoading(false);
}

export default getReviews;
