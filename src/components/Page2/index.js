import React from 'react';
import styles from './Page2.css';

const propTypes = {
};

const defaultProps = {
};

class Page2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.root}>
        page2
      </div>
    );
  }

}

Page2.propTypes = propTypes;
Page2.defaultProps = defaultProps;


export default Page2;
