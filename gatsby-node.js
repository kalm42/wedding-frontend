/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/guest-management/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = `/guest-management/*`;
    createPage(page);
  }
};
