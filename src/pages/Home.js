import React, { Component } from 'react';

import AppDownload from '../components/AppDownload';
import HowItWorks from '../components/HowItWorks';

class Home extends Component {
  render() {
    return (
      <div>
        <AppDownload />

        <HowItWorks />
      </div>
    )
  }
}

export default Home;
