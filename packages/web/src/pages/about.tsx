import type { NextPage } from 'next';
import getConfig from "next/config";
import Link from 'next/link';



import ContentBox from 'components/elements/contentBox/contentBox';
import SiteHead from 'components/head/siteHead';
import Layout from 'components/layouts/layout';

const { publicRuntimeConfig } = getConfig();


const About: NextPage = () => (
  <div>
    <SiteHead
      title='このサイトについて'
      description='サイトについてのあれこれ'
    />
    <Layout>
      <ContentBox>
        <h2>お問い合わせ</h2>
        <p>
          Twitterまでお願い致します。<Link href={`https://twitter.com/${publicRuntimeConfig.TWITTER_ID}`}>{`@${publicRuntimeConfig.TWITTER_ID}`}</Link>
        </p>

        <h2>このサイトについて</h2>
        <p>個人情報の保護について</p>
        <p>
          「https://inframenma.com」（以下、当サイト）を利用される方は、以下に記載する諸条件に同意したものとみなします。
        </p>

        <p>個人情報の収集について</p>
        <p>
          利用者は匿名のままで、当サイトを自由に閲覧する事ができます。お問合せ等、場合によっては、利用者の氏名やメールアドレスなどの個人情報の開示をお願いする事があります。しかし、利用者の個人情報を利用者の許可なく、当サイトから第三者へ開示・共有する事はありません。
        </p>

        <p>広告の配信について</p>
        <p>
          当サイトはGoogle及びGoogleのパートナーウェブサイト（第三者配信事業者）の提供する広告を設置しております。その広告配信にはCookieを使用し、当サイトを含めた過去のアクセス情報に基づいて広告を配信します。
          DoubleClick Cookie を使用することにより、GoogleやGoogleのパートナーは当サイトや他のサイトへのアクセス情報に基づいて、適切な広告を当サイト上でお客様に表示できます。
          お客様はGoogleアカウントの広告設定ページで、パーソナライズ広告の掲載に使用される DoubleClick Cookie を無効にできます。また aboutads.info にアクセスして頂き、パーソナライズ広告の掲載に使用される第三者配信事業者のCookieを無効にできます。
          その他、Googleの広告における、Cookieの取り扱いについての詳細は、Googleのポリシーと規約ページをご覧ください。
        </p>

        <p>ウェブサーバの記録</p>
        <p>
          当サイトのウェブサーバは、利用者のコンピュータのIPアドレスを自動的に収集・記録しますが、これらは利用者個人を特定するものではありません。利用者が自ら個人情報を開示しない限り、利用者は匿名のままで、当サイトを自由に閲覧する事ができます。
        </p>
        
        <p>免責事項</p>
        <p>
          利用者は、当サイトを閲覧し、その内容を参照した事によって何かしらの損害を被った場合でも、当サイト管理者は責任を負いません。また、当サイトからリンクされた、当サイト以外のウェブサイトの内容やサービスに関して、当サイトの個人情報の保護についての諸条件は適用されません。 当サイト以外のウェブサイトの内容及び、個人情報の保護に関しても、当サイト管理者は責任を負いません。
        </p>

        <p>最終更新:2022年12月1日</p>
      </ContentBox>
    </Layout>
  </div>
);


export default About;