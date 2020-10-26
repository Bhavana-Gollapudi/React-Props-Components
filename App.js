import './App.css';
import React from 'react';
import Footer from './Footer';
import dataArray from './DataArray';

function App(){
    const arr = dataArray.map(info => <Footer key={info.id} info={info} />)

    return (
      <div>{arr}</div>
    )
}


export default App;
