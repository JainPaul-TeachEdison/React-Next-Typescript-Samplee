import Head from "next/head";

function MetaPage() {
  return (
    <div>
      <Head>
        <title>Meta Page</title>
        <meta property="og:title" content="Meta Data Page"/>
        <meta property="og:description" content="Description of my page."/>
        <meta property="og:image" content="https://t3.ftcdn.net/jpg/04/70/37/00/360_F_470370030_TxVCOsONUxh659YzwP2wCkX0ijAetDh9.jpg"/>
      </Head>
    </div>
  );
}

export default MetaPage;
