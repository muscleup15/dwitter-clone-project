//$2a$10$K2JT5JlH9Q9vUTd7Ax4VFeHtthN3wmc79DwhddlY8vCxrhEMEGjka

export let users = [
  {
    id: '1',
    username: 'kwanghwi',
    password: '$2a$10$K2JT5JlH9Q9vUTd7Ax4VFeHtthN3wmc79DwhddlY8vCxrhEMEGjka',
    name: 'kwanghwi',
    email: 'ellie@gmail.com',
    url: '',
  },
  {
    id: '2',
    username: 'panghwi',
    password: 'qwer1234',
    name: 'panghwi',
    email: 'ellie@gmail.com',
    url: '',
  },
];

export async function findByUserName(username) {
  const user = users.find((user) => user.username == username);
  return user;
}

export async function findByID(id) {
  const user = users.find((user) => user.id == id);
  return user;
}
export async function createUser(userinfo) {
  const user = { ...userinfo, id: Date.now().toString() };
  users.unshift(user);
  return user.id;
}
