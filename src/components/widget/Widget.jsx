import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100
  const percentage = 20

  if(type=="user"){
    data={
      title: "USER",
      isMoney: false,
      link: "See all users",
      icon: <PeopleAltIcon 
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(255, 217, 0, 0.253)"
              }}/>
    }
  }else if(type=="order"){
    data={
      title: "ORDERS",
      isMoney: false,
      link: "See all orders",
      icon: <ShoppingCartCheckoutIcon 
              className="icon"
              style={{
                color: "gray",
                backgroundColor: "rgba(128, 128, 128, 0.253)"
              }}/>
    }
  }else if(type=="earning"){
    data={
      title: "EARNINGS",
      isMoney: true,
      link: "See net earnings",
      icon: <AttachMoneyIcon 
              className="icon"
              style={{
                color: "teal",
                backgroundColor: "rgba(0, 128, 128, 0.253)"
              }}/>
    }
  }else if(type=="balance"){
    data={
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: <PointOfSaleIcon 
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(220, 20, 60, 0.253)"
              }}/>
    }
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget