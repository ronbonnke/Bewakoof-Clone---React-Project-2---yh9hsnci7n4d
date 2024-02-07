import React, { useState, useEffect } from 'react';

function OrderDetail() {
  const [orderList, setOrderList] = useState([]);
  const [singleOrder, setSingleOrder] = useState(null);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/ecommerce/order/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              projectID: 'ntymfpzixzjc',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch order list');
        }
        const data = await response.json();
        setOrderList(data.data);
      } catch (error) {
        console.error('Error fetching order list:', error);
      }
    };

    const getSingleOrder = async (orderID) => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/order/${orderID}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              projectID: 'ntymfpzixzjc',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch single order');
        }
        const data = await response.json();
        setSingleOrder(data.data);
        console.log("data", data);
      } catch (error) {
        console.error('Error fetching single order:', error);
      }
    };

    // Call getOrderList() and getSingleOrder() as needed
    getOrderList();
    getSingleOrder('65c314b9f863254f6cac6178');
  }, []);
  console.log("orderlist",orderList)

  return (
    <div>
        <h1>Order data</h1>
       {orderList.map((item) => {
        console.log("item", item)
        return(
            <h1>{item.order._id}</h1>
        )
        // item.data.map((data) => {
        //     console.log("data", data);
        //     return (
        //         <h1></h1>
        //     )
        // })
       })}
    </div>
  );
}

export default OrderDetail;
 
        // <li key={orderData.order._id}>
        //   <h3>Order ID: {orderData.order._id}</h3>
        //   <h4>Total Price: {orderData.order.totalPrice}</h4>
        //   <h4>Shipment Type: {orderData.order.shipmentDetails.type}</h4>
          {/* <p>Address: {orderData.order.shipmentDetails.address.street}, {orderData.order.shipmentDetails.address.city}, {orderData.order.shipmentDetails.address.state}, {orderData.order.shipmentDetails.address.country}, {orderData.order.shipmentDetails.address.zipCode}</p> */}
          {/* <ul>
            {orderData.order.items.map((item) => (
              <li key={item.product._id}>
                <p>Product Name: {item.product.name}</p>
                <p>Price: {item.product.price}</p>
                <img src={item.product.displayImage} alt={item.product.name} style={{ width: '100px' }} />
              </li>
            ))}
          </ul> */}
        //   </li>
        //   ))}