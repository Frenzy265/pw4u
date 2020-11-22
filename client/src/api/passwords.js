export const getPassword = async (passwordName) => {
  const response = await fetch(`/api/passwords/${passwordName}`);
  const password = await response.text();
  return password;
};

export const deletePassword = async (passwordName) => {
  const response = await fetch(`/api/passwords/${passwordName}`, {
    method: "DELETE",
  });
  const answer = await response.text();
  return answer;
};
