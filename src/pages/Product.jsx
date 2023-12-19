import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details';

function Product() {

    const [productDetail, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror]= useState(true);
 

  const fetchProductDetails = async (_id) => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`, {
        method: 'GET',
        headers: {
          'projectId': 'ntymfpzixzjc',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }

      const data = await response.json();
      setProductDetails(data.data);
      console.log("data", data);
      setLoading(false);
      seterror(false);
    } catch (error) {
      console.error('Error fetching product details:', error.message);
      setLoading(false);
    }
  };

  const params = useParams();
  const { _id } = params;

  useEffect(() => {
    // Ensure that productID exists before making the API call
    if (_id) {
      fetchProductDetails(_id);
    }
  }, [_id]);

  console.log("product", productDetail);
  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Details item={productDetail} loading={loading} error={error}/>  
        </div>
      )}
    </div>
  )
}

export default Product
