import React from 'react';
import { Link } from 'react-router';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import koLocaleData from 'react-intl/locale-data/ko';
import classnames from 'classnames';
import styles from './App.css';

addLocaleData(enLocaleData);
addLocaleData(koLocaleData);

const propTypes = {
};

const defaultProps = {
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
    };
  }

  render() {
    const { locale } = this.state;

    return (
      <IntlProvider locale={locale}>
        <div className={styles.root}>
          <nav className="nav has-shadow">
            <div className="container">
              <div className="nav-left">
                <Link to="/" className="nav-item">
                  <h1 className={styles.title}>React Intl Example</h1>
                </Link>
              </div>

              <div className="nav-right nav-menu">
                <Link to="/page1" className="nav-item is-tab" activeClassName="is-active">
                  Page1
                </Link>
                <Link to="/page2" className="nav-item is-tab" activeClassName="is-active">
                  Page2
                </Link>
                <span className="nav-item">
                  <a
                    className={classnames('button', { 'is-primary': locale === 'en' })}
                    onClick={() => (this.setState({ locale: 'en' }))}
                  >
                    <span>English</span>
                  </a>
                  <a
                    className={classnames('button', { 'is-primary': locale === 'ko' })}
                    onClick={() => (this.setState({ locale: 'ko' }))}
                  >
                    <span>한국어</span>
                  </a>
                </span>
              </div>
            </div>
          </nav>

          {this.props.children}

          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                </p>
                <p>
                  <a className="icon" href="https://github.com/jgthms/bulma">
                    <i className="fa fa-github" />
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </IntlProvider>
    );
  }

}

App.propTypes = propTypes;
App.defaultProps = defaultProps;


export default App;
