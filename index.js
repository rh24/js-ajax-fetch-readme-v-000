const app = "I don't do much.";

const token = '36463e85db2472cb5be79aa1ea86aaaac9685423'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
