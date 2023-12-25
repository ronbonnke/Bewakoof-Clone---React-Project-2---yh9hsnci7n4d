import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details';
import { useCurrentContext } from '../context/CurrentProvider';

function Product() {

    const [productDetail, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState(true);
    const {reviews, setReviews} = useCurrentContext();
    const {dummyreviews, setdummyReviews} = useCurrentContext();
    
    // const [reviews, setReviews] = useState([]);

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

  const fetchReviews = async (_id) => {
    try {
      const reviewsResponse = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/review/${_id}`,
        {
          method: 'GET',
          headers: {
            'projectId': 'ntymfpzixzjc',
          },
        }
      );

      if (!reviewsResponse.ok) {
        throw new Error('Failed to fetch reviews');
      }

      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData.data);

      setLoading(false);
      console.log('reviewsData', reviews)
    } catch (error) {
      console.error('Error fetching reviews:', error.message);
      setLoading(false);
      setError(true);
    }
  };

  const params = useParams();
    const { _id } = params;
    useEffect(() => {
      if (_id) {
        fetchProductDetails(_id);
        fetchReviews(_id);

      }
    }, [_id,dummyreviews]);
  
    console.log('product', productDetail);
    console.log('reviews', reviews);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Details item={productDetail} loading={loading} review={reviews} error={error} fetchProductDetails={fetchProductDetails}/>  
        </div>
      )}
    </div>
  )
}

export default Product