import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { SubMenu } = Menu;
const {Title} = Typography;

const ProductPage = () => {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <div className='container'>
      <div>
        <Title level={2} >Danh mục</Title>
      </div>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title="Quần">
            <Menu.Item key="2">Quần bò</Menu.Item>
            <Menu.Item key="3">Quần què</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        
      </Menu>
    </div>
  )
}

export default ProductPage