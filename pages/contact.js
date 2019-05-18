import Head from 'next/head';

import withLayout from '../lib/withLayout';

const Contact = () => (
  <div style={{ textAlign: 'center', margin: '0 20px' }}>
    <Head>
      <title>
        Contact Erik
      </title>
      <meta name="description" content="Contact page for erikspeece.com" />
    </Head>
    <br />
    <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>
      Contact
    </p>

  </div>
);

export default withAuth(withLayout(Contact), { loginRequired: false });