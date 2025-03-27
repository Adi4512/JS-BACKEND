require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5147;

const data = {
  login: "Adi4512",
  id: 76089839,
  node_id: "MDQ6VXNlcjc2MDg5ODM5",
  avatar_url: "https://avatars.githubusercontent.com/u/76089839?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Adi4512",
  html_url: "https://github.com/Adi4512",
  followers_url: "https://api.github.com/users/Adi4512/followers",
  following_url: "https://api.github.com/users/Adi4512/following{/other_user}",
  gists_url: "https://api.github.com/users/Adi4512/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Adi4512/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Adi4512/subscriptions",
  organizations_url: "https://api.github.com/users/Adi4512/orgs",
  repos_url: "https://api.github.com/users/Adi4512/repos",
  events_url: "https://api.github.com/users/Adi4512/events{/privacy}",
  received_events_url: "https://api.github.com/users/Adi4512/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aditya Sharma",
  company: "TCS",
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "full stack developer with a full time job and a lot of passion for coding",
  twitter_username: null,
  public_repos: 33,
  public_gists: 0,
  followers: 7,
  following: 9,
  created_at: "2020-12-16T06:05:48Z",
  updated_at: "2025-03-23T19:51:22Z",
};

app.get("/", (req, res) => {
  res.send("hello world from aditya");
});
app.get("/twitter", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`port is listening at:${port}`);
});
