import React from 'react';
import styles from './Page1.css';

const propTypes = {
};

const defaultProps = {
};

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.root}>
        page1
      </div>
    );
  }

}

Page1.propTypes = propTypes;
Page1.defaultProps = defaultProps;


export default Page1;
