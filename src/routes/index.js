import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import ClassInfo from '../pages/ClassInfo/ClassInfo';
import Syllabus from '../pages/Syllabus/Syllabus';
import Presentation from '../pages/Presentation/Presentation';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/class" exact component={ClassInfo} />
        <Route path="/syllabus" exact component={Syllabus} />
        <Route path="/presentation" exact component={Presentation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
