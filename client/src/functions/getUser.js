async function getUser(username, setUser, setLoading) {
  const response = await fetch(`/users/${username}`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const f = await response.json();
  console.log(f);
  setUser(f.user);
}

export default getUser;
