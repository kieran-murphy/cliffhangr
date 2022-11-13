async function getAllUsers(setUsers, setLoading) {
  const response = await fetch("/users");
  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  console.log(response);
  const records = await response.json();
  setUsers(records.users);
  setLoading(false);
}

export default getAllUsers;
