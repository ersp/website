/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography'
import 'isomorphic-fetch';
import getRootUrl from '../lib/api/getRootUrl';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

class Recipes extends React.Component {
  state = {
    name: 'a',
    description: '',
    directions: '',
  }
  
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    user: null,
  };

  static async getInitialProps() {
    const res = await fetch(`${getRootUrl()}/recipe`);
    const json = await res.json();
    // this.props.recipes
    return { recipes: json };
  }

  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Erik's Website Recipes</title>
          <meta name="description" content="description for Indexing bots" />
        </Head>
        <Typography variant="h3">
          Random Recipe Picker
        </Typography>
        <p>{this.state.name}</p>
        <p>Logged in as: {user.email}</p>
      </div>
    );
  }
}

export default withAuth(withLayout(Recipes));
