import fs from 'fs';

import { gql } from '@apollo/client/core';
import axios from 'axios';
import { Probot } from "probot";
import { loadFront } from 'yaml-front-matter';

import { client } from './graphql/client';
import { Meta } from './types/md';

export = (app: Probot) => {
  app.on("push", async (context) => {

    const owner = context.payload.repository.owner.name;
    const repo = context.payload.repository.name;

    // コミット一覧を取得
    const commits = context.payload.commits;

    // 追加と更新のファイルパス取得
    const addFilePaths = commits.map((item) => item.added).flat();
    const modFilePaths = commits.map((item) => item.modified).flat();

    // mdのファイルたちを取得する
    const mdlistAdds = [...addFilePaths].filter((item) => item.split('.').pop() === 'md');
    // mdじゃないファイルを取得する
    const imagelistAdds = [...addFilePaths].filter((item) => item.split('.').pop() !== 'md');
    // mdのファイルたちを取得する
    const mdlistMods = [...modFilePaths ].filter((item) => item.split('.').pop() === 'md');
    // mdじゃないファイルを取得する
    const imagelistMods = [...modFilePaths ].filter((item) => item.split('.').pop() !== 'md');

    // 画像取得(全部)
    const imagesAdds = await Promise.all(imagelistAdds.map(async (item) => {
      return await context.octokit.repos.getContent({
        owner: owner || 'sori883',
        repo: repo,
        path: item,
        headers: {
          accept: 'application/vnd.github+json'
        },
      }).then(({data}) => data);
    }));

    // TODO: 1敗
    // 画像追加
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imagesAdds.map(async (item : any) => {
      const image = await axios.get(item.download_url, {responseType: 'arraybuffer'});
      fs.writeFileSync(`./work/image/${item.name}`, Buffer.from(image.data), 'binary');
      await client.mutate({
        mutation: gql`mutation addImage($image: AddImageInput!) {
          saveImage(image: $image) {
            id
          },
        }`,
        variables: {
          image: {
            name: item.name,
            path: item.path
          }}
      });
    });

    // 画像取得(全部)
    const imagesMods = await Promise.all(imagelistMods.map(async (item) => {
      return await context.octokit.repos.getContent({
        owner: owner || 'sori883',
        repo: repo,
        path: item,
        headers: {
          accept: 'application/vnd.github+json'
        },
      }).then(({data}) => data);
    }));

    // TODO: 1敗
    // 画像追加
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imagesMods.map(async (item : any) => {
      const image = await axios.get(item.download_url, {responseType: 'arraybuffer'});
      fs.writeFileSync(`./work/image/${item.name}`, Buffer.from(image.data), 'binary');
      await client.mutate({
        mutation: gql`mutation updateImage($image: UpdateImageInput!) {
          updateImage(image: $image) {
          id
          },
        }`,
        variables: {
          image: {
            name: item.name,
            path: item.path
          }}
      });
    });

    // 記事取得(全部)
    const articleAdds = await Promise.all(mdlistAdds.map(async (item) => {
      return await context.octokit.repos.getContent({
        owner: owner || 'sori883',
        repo: repo,
        path: item,
        headers: {
          accept: 'application/vnd.github+json'
        },
      }).then(({data}) => data);
    }));

    // TODO: 2敗
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    articleAdds.map(async (item : any) => {
      const md = Buffer.from(item.content, 'base64').toString();
      const mdMeta = loadFront(md, {
        contentKeyName: 'entry'
      }) as unknown as Meta; // TODO 3敗北

      // DB登録
      await client.mutate({
        mutation: gql`mutation addArticle($article: AddArticleInput!) {
          saveArticle(article: $article) {
            id
          },
        }`,
        variables: {article: mdMeta}
      });
    });

    // 記事取得(全部)
    const articleMods = await Promise.all(mdlistMods.map(async (item) => {
      return await context.octokit.repos.getContent({
        owner: owner || 'sori883',
        repo: repo,
        path: item,
        headers: {
          accept: 'application/vnd.github+json'
        },
      }).then(({data}) => data);
    }));

    // TODO: 2敗
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    articleMods.map(async (item : any) => {
      const md = Buffer.from(item.content, 'base64').toString();
      const mdMeta = loadFront(md, {
        contentKeyName: 'entry'
      }) as unknown as Meta; // TODO 3敗

      // DB登録
      await client.mutate({
        mutation: gql`mutation updateArticle($article: UpdateArticleInput!) {
          updateArticle(article: $article) {
            id
          },
        }`,
        variables: {article: mdMeta}
      });
    });

  });
};
