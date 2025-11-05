import './App.css';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   this.setState({ progress: progress })
  // }
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={9} country='us' category='sports' />} />
          <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={9} country='us' category='business' />} />
          <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={9} country='us' category='science' />} />
          <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={9} country='us' category='health' />} />
          <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country='us' category='general' />} />
          <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={9} country='us' category='entertainment' />} />
          <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={9} country='us' category='technology' />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
