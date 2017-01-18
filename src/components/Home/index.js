import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/ko';
import styles from './Home.css';

const propTypes = {
};

const defaultProps = {
};

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.root}>
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedMessage
              </h1>
              <p>
                <FormattedMessage
                  id="Home.formattedMessage"
                  description="Greeting to welcome the user to the app"
                  defaultMessage="Hello, {name}!"
                  values={{
                    name: 'Eric',
                  }}
                />
              </p>
            </div>
          </div>
        </section>

        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedDate
              </h1>
              <p>
                <FormattedDate
                  value={new Date(1459832991883)}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;


export default Home;
