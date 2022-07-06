//$2a$10$deafqrm8tMe2OE0vMr3ZGOHN0M8JYoiLWpccHr5LQew1EUyxIX8BW : abcd1234

export let users = [
  {
    id: '1',
    username: 'kwanghwi',
    password: '$2a$10$deafqrm8tMe2OE0vMr3ZGOHN0M8JYoiLWpccHr5LQew1EUyxIX8BW',
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

export async function createUser(userinfo) {
  const user = { ...userinfo, id: Date.now().toString() };
  users.unshift(user);
  return user;
}
