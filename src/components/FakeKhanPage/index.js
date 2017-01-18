import React from 'react';
import classnames from 'classnames';
import { intlShape, FormattedMessage } from 'react-intl';
import styles from './FakeKhanPage.css';

const propTypes = {
};

const defaultProps = {
};

class FakeKhanPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { intl } = this.context;

    return (
      <div className={styles.root}>
        <section className={classnames('hero', 'is-fullheight', styles.section1)}>
          <div className="hero-body">
            <div className="container">
              <h1>
                <FormattedMessage
                  id="khanacademy.section1.title"
                  description="section1 title"
                  defaultMessage="You only have to know on thing:"
                />
              </h1>
              <img src={require(`./ycla-scrawl-${intl.locale}.png`)} alt="you can learn anything" />
              <h2>
                <FormattedMessage
                  id="khanacademy.section1.subTitle"
                  description="section1 subTitle"
                  defaultMessage="For free. For everyone. Forever."
                />
              </h2>

              <div className={styles.buttonWrapper}>
                <a className={styles.startButton}>
                  <FormattedMessage
                    id="khanacademy.section1.startButton"
                    description="section1 student button"
                    defaultMessage="Start learning now"
                  />
                </a>
                <a className={styles.baseButton}>
                  <FormattedMessage
                    id="khanacademy.section1.teachersButton"
                    description="section1 teachers button"
                    defaultMessage="Teachers, start here"
                  />
                </a>
                <a className={styles.baseButton}>
                  <FormattedMessage
                    id="khanacademy.section1.parentsButton"
                    description="section1 parents button"
                    defaultMessage="Parents, start here"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className={classnames('hero', 'is-fullheight', styles.section2)}>
          <div className="hero-body">
            <div className="container">
              <h1>
                <FormattedMessage
                  id="khanacademy.section2.title"
                  description="section2 title"
                  defaultMessage="Take control of your learning by working on the skills you choose at your own pace with free online courses."
                />
              </h1>
            </div>
          </div>
        </section>

        <section className={classnames('hero', 'is-fullheight', styles.section3)}>
          <div className="hero-body">
            <div className="container">
              <h1>
                <FormattedMessage
                  id="khanacademy.section3.title"
                  description="section3 title"
                  defaultMessage="Sharpen your skills with over 100,000 interactive exercises."
                />
              </h1>
            </div>
          </div>
        </section>

        <section className={classnames('hero', 'is-fullheight', styles.section4)}>
          <div className="hero-body">
            <div className="container">
              <h1>
                <FormattedMessage
                  id="khanacademy.section4.title"
                  description="section4 title"
                  defaultMessage="Math, science, computer programming, history, art, economics, and even more free online classes."
                />
              </h1>
            </div>
          </div>
        </section>

        <section className={classnames('hero', 'is-fullheight', styles.section5)}>
          <div className="hero-body">
            <div className="container">
              <h1>
                <FormattedMessage
                  id="khanacademy.section5.title"
                  description="section5 title"
                  defaultMessage="For free. For everyone. Forever."
                />
              </h1>
              <h2>
                <FormattedMessage
                  id="khanacademy.section5.subTitle"
                  description="section5 sub title"
                  defaultMessage="No ads, no subscriptions. We are a not‑for‑profit because we believe in a free, world-class education for anyone, anywhere."
                />
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

FakeKhanPage.propTypes = propTypes;
FakeKhanPage.defaultProps = defaultProps;

FakeKhanPage.contextTypes = { intl: intlShape };

export default FakeKhanPage;
