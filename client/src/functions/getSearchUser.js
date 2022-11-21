async function getSearchUser(username, setUser, setLoading) {
  const response = await fetch(`/users/${username}`);
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const f = await response.json();
  console.log(f.user);
  setUser([f.user]);
  setLoading(false);
}

export default getSearchUser;
