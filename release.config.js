module.exports = {
  branches: [
    { name: "main" },
    { name: "pre/rc", channel: "pre/rc", prerelease: "rc" }, // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
    { name: "beta", channel: "beta", prerelease: "beta" } // `prerelease` is set to `beta` as it is the value of `name`
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-github-pullrequest", {
      "assets": ["CHANGELOG.md"],
      "baseRef": "main"
    }
    ],
    "@semantic-release/release-notes-generator", [
      "@semantic-release/github", { "assets": ["dist/**"] }],
    "@semantic-release/git"
  ],
  tagFormat: "v$\{version}",
  ci: false,
  dryRun: true,
  debug: true,
  extends: "semantic-release-github-pullrequest"
};