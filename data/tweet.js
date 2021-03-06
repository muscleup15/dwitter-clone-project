export let tweets = [
  {
    id: 1,
    text: 'hello',
    createAt: Date,
    name: 'panghwi',
    username: 'panghwi',
    //url: string(optional),
  },
  {
    id: 2,
    text: 'hi',
    createAt: Date,
    name: 'kwanghwi',
    username: 'kwanghwi',
    //url: string(optional),
  },
];

export async function getAllTweets() {
  return tweets;
}

export async function getTweetByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export async function getTweetById(id) {
  return tweets.find((t) => t.id == id);
}

export async function create(text, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    username,
  };
  tweets.unshift(tweet);
  return tweet;
}

export function update(id, text) {
  const data = tweets.find((t) => t.id == id);
  data.text = text;
  return data;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id != id);
}
