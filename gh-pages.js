var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/trevorbehnke/svelteModal", // Update to point to your repository
    user: {
      name: "Trevor Behnke", // update to use your name
      email: "trevorbehnke@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
