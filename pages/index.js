/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

class Index extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      //email: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;
    
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Erik's Website Homepage</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <Typography 
          variant="h1" 
          className="font-page-myname"
          style={{ 
            textAlign: 'center', 
            fontSize: '5.5rem',
            color: '#fff', 
            fontWeight: 300,
            marginTop: '3.5em',
            fontFamily: 'Roboto',
            fontFamily: 'monospace' }}>
          Erik Speece
        </Typography>
        <div style={{textAlign: 'center', color: '#fff', fontSize: '1.1rem', marginTop: '5rem'}}>
          <EmailIcon /> 
          &nbsp;
          <a href='mailto:erikspeece@gmail.com' style={{
            
            color: '#fff',
          }}>erikspeece@gmail.com</a>
          &nbsp;&nbsp;
          |
          &nbsp;&nbsp;
          <PlaceIcon />
          &nbsp;
          <a target="_blank" href="https://www.google.com/maps/place/Sacramento,+CA/data=!4m2!3m1!1s0x809ac672b28397f9:0x921f6aaa74197fdb?sa=X&ved=2ahUKEwi69OKF7aPiAhXLGjQIHUv8DiUQ8gEwAHoECAoQAQ"
          style={{
            
            color: '#fff',
          }}>
            Sacramento, California
          </a>

        </div>
      </div>
    );
  }
}

export default withAuth(withLayout(Index), { loginRequired: false });
