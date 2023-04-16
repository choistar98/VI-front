import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
   {
      handleClose();
    }
  }

  const handleSubMenuMouseEnter = () => {
    // 서브메뉴에 마우스가 들어왔을 때 메뉴를 닫지 않음
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{  color: 'black', fontSize: '20px' }}
      >
        {props.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
        onMouseLeave={handleClose}
        
      >
        {props.submenuList.map((item, index) => (
          <MenuItem 
            key={index} 
            onClick={() => handleMenuItemClick(item)}
            onMouseEnter={handleSubMenuMouseEnter}
            style={{color: 'black', fontSize: '20px' }}
            className="custom-menu-item"
          >
            <Link 
              to={`/${item}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
>{item}</Link>
          </MenuItem>
          ))}
      </Menu>
    </div>
  );
}