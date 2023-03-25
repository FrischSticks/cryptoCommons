import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';

// Importing Images
import icon from '../images/cryptoLogo.png';

const navBar = () => {
  return (

    <div className='navContainer'>
        <div className='logoContainer'>
            {/* Components below come from Ant Design (Explore more options @ https://ant.design/)*/}
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/' >Crypto Tracker</Link>
            </Typography.Title>
            {/* <Button className='menuControlContainer'>

            </Button> */}
        </div>
        {/* The Menu component comes from Ant Design */}
        <Menu theme='dark'>
            <Menu.Item icon={ <HomeOutlined/> }>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={ <FundOutlined/> }>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={ <MoneyCollectOutlined/> }>
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={ <BulbOutlined/> }>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>

  )
}

export default navBar