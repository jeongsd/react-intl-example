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

      </div>
    );
  }

}

FakeKhanPage.propTypes = propTypes;
FakeKhanPage.defaultProps = defaultProps;

FakeKhanPage.contextTypes = { intl: intlShape };

export default FakeKhanPage;
