import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Todo from "../Todo/Todo";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import styles from "./App.module.css";
import logo from '../App/WHS_black.svg';

const App = () => (
    <Router>
      <div className={styles.wrap}>
      <Card className={styles.board}>
          <MenuList className={styles.menu}>
              <img className={styles.logo_img} src={logo}  alt="" />
              <Link className={styles.link} to='/'><MenuItem>Обо мне</MenuItem></Link>
              <Link className={styles.link} to='/todo'><MenuItem>Дела</MenuItem></Link>
              <Link className={styles.link} to='/contacts'><MenuItem>Контакты</MenuItem></Link>
               
          </MenuList>
      </Card>
      <Card className={styles.content}>
           <Route path='/' exact component={About} />
           <Route path='/todo' component={Todo} />
           <Route path='/contacts' component={Contacts} />
      </Card>
      </div>
    </Router>);

export default App;

