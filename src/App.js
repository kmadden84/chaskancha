import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Body from './Components/Body.js'
import Footer from './Components/Footer.js'
import Mission from './Components/Mission.js'
import About from './Components/About.js'
import Products from './Components/Products.js'
import Founder from './Components/Founder.js'

import {Route, Switch} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";


function App(props) {
  const { location } = props;

  return (
    <div className="App">
     <Route path="*" render={(props) => <Header />} />
     <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 30 }}
              classNames={'fade'}
            >
     <Switch>
         <Route path="/" exact={true} render={(props) => <Body {...props} />} />
         <Route exact path="/about" exact={true} render={(props) => <About {...props} />} />
         <Route exact path="/mission" exact={true} render={(props) => <Mission {...props} />} />
         <Route exact path="/products" exact={true} render={(props) => <Products {...props} />} />
         <Route exact path="/our-founder" exact={true} render={(props) => <Founder {...props} />} />

     <Container>

</Container>
      </Switch>
      </CSSTransition>
          </TransitionGroup>
      <Footer />

    </div>
  );
}

export default App;
