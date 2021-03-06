import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StramShow';
import Header from './header/Header';



const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={ StreamList }  />
                <Route path="/streams/new" exact component={ StreamCreate }  />
                <Route path="/stream/edit" exact component={ StreamEdit }  />
                <Route path="/stream/delete" exact component={ StreamDelete }  />
                <Route path="/stream/show" exact component={ StreamShow }  />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;