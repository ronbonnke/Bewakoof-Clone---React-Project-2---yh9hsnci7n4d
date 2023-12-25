import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details';

function Product() {

    const [productDetail, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seterror]= useState(true);
    const [reviews, setReviews] = useState([]);
 

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
      // Ensure that productID exists before making the API call
      if (_id) {
        fetchProductDetails(_id);
        fetchReviews(_id);

      }
    }, [_id]);
  
    console.log('product', productDetail);
    console.log('reviews', reviews);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Details item={productDetail} loading={loading} review={reviews} error={error}/>  
        </div>
      )}
    </div>
  )
}

export default Product














// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Details from '../components/Details';

// function Product() {
//   const [productDetail, setProductDetails] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const fetchProductDetails = async (_id) => {
//     try {
//       const productResponse = await fetch(
//         `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`,
//         {
//           method: 'GET',
//           headers: {
//             'projectId': 'ntymfpzixzjc',
//           },
//         }
//       );

//       if (!productResponse.ok) {
//         throw new Error('Failed to fetch product details');
//       }

//       const productData = await productResponse.json();
//       setProductDetails(productData.data);

//       // Fetch reviews after getting product details
//       fetchReviews(_id);
//     } catch (error) {
//       console.error('Error fetching product details:', error.message);
//       setLoading(false);
//       setError(true);
//     }
//   };

//   const fetchReviews = async (_id) => {
//     try {
//       const reviewsResponse = await fetch(
//         `https://academics.newtonschool.co/api/v1/ecommerce/review/${_id}`,
//         {
//           method: 'GET',
//           headers: {
//             'projectId': 'ntymfpzixzjc',
//           },
//         }
//       );

//       if (!reviewsResponse.ok) {
//         throw new Error('Failed to fetch reviews');
//       }

//       const reviewsData = await reviewsResponse.json();
//       setReviews(reviewsData.data.reviews);

//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching reviews:', error.message);
//       setLoading(false);
//       setError(true);
//     }
//   };

//   const params = useParams();
//   const { _id } = params;

//   useEffect(() => {
//     // Ensure that productID exists before making the API call
//     if (_id) {
//       fetchProductDetails(_id);
//     }
//   }, [_id]);

//   console.log('product', productDetail);
//   console.log('reviews', reviews);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <Details item={productDetail} loading={loading} error={error} />
//           <div>
//             <h2>Reviews</h2>
//             {reviews.map((review, index) => (
//               <div key={index}>
//                 <p>{review.comment}</p>
//                 <p>{review.rating}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Product;
