module.exports = {

  /**************************
   * Used at: shipjs prepare
   *************************/

  /**
   * By default, it's running package install (silent)
   */
  installCommand: ({ isYarn }) => isYarn ? "yarn install --silent" : "npm install",

  /**
   * This is a lifecycle hook where you can decide whether to proceed with the preparation.
   * By default, it's skipped
   */
  shouldPrepare: ({
    commits,
    nextVersion,
    releaseType,
    releaseTag,
    commitNumbersPerType
  }) => {
    /* ... */
  },

  /**
   * If true, Ship.js will create a draft pull request.
   * By default, it's false
   */
  draftPullRequest: true,

  /**************************
   * Used at: shipjs trigger
   *************************/

  /**
   * If true, Ship.js will create a draft pull request.
   * By default, it's running package's script build
   */
  buildCommand: ({ isYarn }) => isYarn ? "yarn build" : "npm run build",

  /**
   * Ship.js runs this command at shipjs trigger before publishing the package to make sure if it works correctly.
   * By default, it's undefined because you may already have a CI service running tests on your GitHub PR.
   */
  testCommandBeforeRelease: ({ isYarn }) => isYarn ? "yarn test" : "npm run test",

  /**
   * You can use Ship.js to release projects somewhere other than NPM.
   * By default, publishCommand returns npm publish.You can override it like the above to release it to wherever you want.
   */
  publishCommand: () => "npx now",

  // Assign Reviewers Team
  pullRequestTeamReviewers: ["team-slug1", "team-slug2"],

  /**
   * If you want to maintain a branch for release snapshot, you can use afterPublish hook.
   * By default, it's skipped
   */
  afterPublish: ({ exec }) => {
    exec("git config --global user.email \"your@email.com\"");
    exec("git config --global user.name \"Your Name\"");

    exec("git checkout master");
    exec("git merge develop");
    exec("git push origin master");
  }
};