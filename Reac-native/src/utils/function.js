export const getUserLogin = (users, userId) => {
  const index = users.findIndex((user) => user.id === userId);
  return users[index];
};
export const getRandomNumber = (num) => {
  const res = Math.floor(Math.random() * num);
  return res;
};
