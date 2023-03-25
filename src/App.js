import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

// Importing Components from components folder
// import navBar from './components/navBar'; (<<< Importing 1 by 1)
// Rather than importing 1 by 1 (like above), make an index.js in the components folder and do all imports in one line of code!
import {NavBar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails} from './components';

// Importing CSS
import './App.css';

const App = () => {
  return (
    <Router>
        <div className='app'>

            {/* NAV BAR */}
            <div className='navBar'>
                <NavBar />
            </div>



            {/* MAIN CONTENT */}
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        {/* A Switch Component allows for multiple Routes */}
                        <Routes>
                            <Route path='/' element={ <HomePage/> } />
                            <Route path='/NavBar' element={ <NavBar/> } />
                            <Route path='/Exchanges' element={ <Exchanges/> } />
                            <Route path='/CryptoCurrencies' element={ <Cryptocurrencies/> } />
                            <Route path='/CryptoDetails' element={ <CryptoDetails /> } />
                            <Route path='/News' element={ <News/> } />
                            {/* Route for Error Page (must have component!) */}
                            {/* <Route path='*' element={<ErrorPage />} */}
                        </Routes>
                    </div>
                </Layout>

                {/* FOOTER */}
                <div className='footer'>
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Crypto Tracker<br/>
                        All rights reserved
                    </Typography.Title>
                    {/* Space is used in Ant as a "Div" and adds Space between the items */}
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/Exchanges'>Exchanges</Link>
                        <Link to='/News'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    </Router>   
  );
}

export default App