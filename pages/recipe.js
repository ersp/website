import Head from 'next/head';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import { styleLoginButton } from '../lib/SharedStyles';

import { pageLayout } from '../lib/SharedStyles';

const Recipe = () => (
  <div className="page" style={pageLayout}>
    <Head>
      <title>Erik's Recipes</title>
      <meta name="description" content="Erik's Recipes" />
    </Head>
    <p>Recipe page</p>
  </div>
);

export default withAuth(withLayout(Recipe));
