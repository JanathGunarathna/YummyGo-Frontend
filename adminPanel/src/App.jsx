import React from 'react';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="d-flex" id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
                <Menubar />
                <div className="container-fluid">
                    <Route>
                      <Route path='/add' element={<AddFood/>}/>
                      <Route path='/list' element={<ListFood/>}/>
                      <Route path='/orders' element={<Orders/>}/>
                      <Route path='/' element={<ListFood/>}/>
                    </Route>
                </div>
            </div>
        </div>
  )
}

export default App;