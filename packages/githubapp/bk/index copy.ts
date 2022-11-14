import { Probot } from "probot";

export = (app: Probot) => {
  app.on("push", async (context) => {

    const owner = context.payload.repository.owner.name;
    const repo = context.payload.repository.name;

    // imagesのshaを取得してる
    const repoRoot = await context.octokit.request('GET /repos/{owner}/{repo}/contents', {
      owner: owner || 'sori883',
      repo: repo,
    });
    const imageSha = repoRoot.data.filter((item: { name: string; }) => item.name === 'images');

    // images配下（ディレクトリも含むよ）
    const images = await context.octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}{?recursive}', {
      owner: owner || 'sori883',
      repo: repo,
      tree_sha: imageSha[0].sha,
    },);

    console.log(images);

    // const addFiles = context.payload.head_commit?.added;
    // const modFiles = context.payload.head_commit?.modified;

    // // aritlces配下
    // const articles = await context.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //   owner: owner || 'sori883',
    //   repo: repo,
    //   path: 'articles'
    // });

    // console.log(articles.data);


  });
};
