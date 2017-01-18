import React from 'react';
import {
  intlShape,
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
} from 'react-intl';
import styles from './Home.css';

const propTypes = {
};

const defaultProps = {
};


function Example({ title, children }) {
  return (
    <div className="columns">
      <div className="column">
        <p>{title}</p>
      </div>
      <div className="column">
        <p>{children}</p>
      </div>
    </div>
  );
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { locale } = this.context;
    const currency = locale === 'en' ? 'USD' : 'KRW';
    return (
      <div className={styles.root}>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedMessage
              </h1>
              <Example title="default" >
                <FormattedMessage
                  id="home.formattedMessage"
                  description="Greeting to welcome the user to the app"
                  defaultMessage="Hello, {name}!"
                  values={{
                    name: 'Eric',
                  }}
                />
              </Example>
            </div>
          </div>
        </section>

        <section className="hero is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedNumber
              </h1>
              <Example title="default" >
                <FormattedNumber value={1000} />
              </Example>
              <Example title="style: percent" >
                <FormattedNumber style="percent" value={0.3} />
              </Example>
              <Example title="style: currency" >
                <FormattedNumber style="currency" currency={currency} value={1000} />
              </Example>
            </div>
          </div>
        </section>

        <section className="hero is-success">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedPlural
              </h1>
              <Example title="default value: 1" >
                <FormattedPlural value={1} one="message" other="messages" />
              </Example>
              <Example title="default value: 10" >
                <FormattedPlural value={10} one="message" other="messages" />
              </Example>
            </div>
          </div>
        </section>

        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedDate
              </h1>

              <Example title="year: numeric, month: long, day: 2-digit" >
                <FormattedDate
                  value={new Date(1459832991883)}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
              </Example>
            </div>
          </div>
        </section>

        <section className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedTime
              </h1>
              <Example title="default" >
                <FormattedTime value={new Date(1459832991883)} />
              </Example>
            </div>
          </div>
        </section>

        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                FormattedRelative
              </h1>
              <Example title="default" >
                <FormattedRelative value={Date.now()} updateInterval={1000} />
              </Example>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
Home.contextTypes = { intl: intlShape };

export default Home;
