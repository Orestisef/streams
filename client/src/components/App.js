import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StramShow';


const App = () => {
    return (
        <div>
            <h1>Header</h1>
            <BrowserRouter>
                <div>
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