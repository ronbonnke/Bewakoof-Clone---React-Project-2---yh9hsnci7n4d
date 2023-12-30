import React, { useEffect, useState } from "react";
import { BsHeart, BsBagCheck, BsHeartFill } from "react-icons/bs";
// import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../styles/details/Details.css'

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useCurrentContext } from "../context/CurrentProvider";

const Sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

const Details = ({ item, loading, error, review, fetchProductDetails }) => {
  const {loginStatus} = useCurrentContext();
  console.log("loginStatus",loginStatus)
  const {dummyreviews, setdummyReviews} = useCurrentContext();
    console.log(item)
  const [number, setNumber] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  console.log("stars", selectedStars);

  const [added, setAdded] = useState(false);
  const [added2, setAdded2] = useState(false);

  const [color, setColor] = useState();
  const [selected, setSelect] = useState(false);
  const [buttonindex, setButtonIndex] = useState();
  
  const handleWishlistClick = () => {
    const addTowishlist = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${item._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              projectID: 'ntymfpzixzjc',
            },
            body: JSON.stringify({
              productId: item._id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch wishlist');
        }

        const data = await response.json();
        
        setAdded2(true);
      } catch (error) {
        console.error('Error fetching wishlist', error.message);
      }
    };

    addTowishlist();
  }
  

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handlePostReview = () => {
    const addReview = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/review/${item._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              projectID: 'ntymfpzixzjc',
            },
            body: JSON.stringify({
              productId: item._id,
              "ratings":selectedStars,
              "text":reviewText,
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch wishlist');
        }
        const data = await response.json();
        setdummyReviews(data)
        setAdded2(true);
      } catch (error) {
        console.error('Error fetching wishlist', error.message);
      }
    };
    addReview();
    setSelectedStars(0);
    setReviewText("");
  };
  const handleStarClick = (starValue) => {
    setSelectedStars((prevStars) => (prevStars === starValue ? 0 : starValue));
  };
  const renderStarIcons = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <StarIcon
            key={index}
            className="StarIcon SelectedStar"
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <StarBorderIcon key={index} className="StarIcon" />
        ))}
      </>
    );
  };
  const navigate = useNavigate();


  const addToCart = async (_id, size, quantity) => {
    console.log("id",_id)
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectID: "ntymfpzixzjc",
          }, 
          body: JSON.stringify({
            quantity: quantity,
            size: size,
          }),
        }
      );
  
      // Rest of your code...
  
      // Handle response status or other logic here if needed
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      // Handle the error
    }
  };
  const removeItem = async (_id) => {
    console.log("id",_id)
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectId: 'ntymfpzixzjc',
          },
        }
      );
    } catch (error) {
      console.error("Error removing to cart:", error.message);
    }
  };
  


  return (
    <div>
      <div className="Container">
        <div className="One">
          {item.images &&
            item.images.map((source, index) => (
              <div key={index}>
                <img src={source} alt="" onClick={() => setNumber(index)} />
              </div>
            ))}
        </div>

        <div className="Two">
          {item.images && item.images.length > 0 ? (
            <img src={item.images[number]} alt="Not Available" />
          ) : (
            <p>No Image Available</p>
          )}
        </div>

        <div className="Three">
          <h6>Bewakoof</h6>
          <p>{item.name}</p>
          <div className="Rate">
            <p>
              {item.ratings}
              <span style={{ color: "gold", fontSize: "20px" }}>★</span>
            </p>
          </div>
          <div className="Price">
            <p>₹{item.price}</p>
            <p>₹{item.actualPrice}</p>
            <p>{item.off} 29% OFF</p>
          </div>
          <p className="Taxes">Inclusive of all taxes</p>
          <div className="Tribe">
            <p>
              TriBe members get an extra discount of ₹30 and FREE shipping.
              <span>Learn more</span>
            </p>
          </div>
          <div>
            <div className="Flex">
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className="Sizes">
              {Sizes.map((size, index) => (
                <div 
                key={index}>
                  <button 
                    style={{
                      border:"none",
                      cursor: "pointer",
                      backgroundColor:
                        selected && buttonindex === index ? color : "none",
                    }}
                    onClick={() => {
                      setSelect(true);
                      setColor("white");
                      setButtonIndex(index);
                    }}
                  >
                    {size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="Btns">
            {added ? (
              <button
                onClick={() => {

                  setAdded(false);
                  removeItem(
                    item._id,
                  )

                }}
                style={{ backgroundColor: "red", color: "white" }}
              >
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
                Remove Item
                
              </button>
            ) : (
              <button
              onClick={() => {
                setAdded(true);
                addToCart(
                  item._id,
                  Sizes[buttonindex],
                  1
                );
              }}
            >
              Add to cart
              <BsBagCheck style={{ fontWeight: "Bolder", fontSize: "18px" }} />
            </button>
            )}
            <button className="Wishlist" onClick={handleWishlistClick}>
              {added2 ? <BsHeartFill /> : <BsHeart />}
              WISHLIST
            </button>
          </div>

          <div className="Flex1">
            <div>
              <h1>Reviews</h1>
              {loading && <p>Loading reviews...</p>}
              {error && <p>Error loading reviews</p>}
              {review && review.length > 0 ? (
                <div>
                  {review.map((review) => (
                    <div key={review._id} className="reviwed">
                      <p>{review.text}</p>
                      
                      <div>{renderStarIcons(review.ratings)}</div>
                      <hr />

                      
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews available</p>
              )}
            </div>


            {loginStatus ? (
              <div className="postreview">
                <h2>Your Review</h2>
                <div className="StarRating">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <label key={starValue}>
                      {selectedStars >= starValue ? (
                        <StarIcon
                          onClick={() => handleStarClick(starValue)}
                          className="StarIcon SelectedStar"
                        />
                      ) : (
                        <StarBorderIcon
                          onClick={() => handleStarClick(starValue)}
                          className="StarIcon"
                        />
                      )}
                    </label>
                  ))}
                </div>
                <textarea
                  value={reviewText}
                  onChange={handleReviewTextChange}
                  placeholder="Write your review..."
                ></textarea>
                <button
                 onClick={handlePostReview}
                >
                  Post Review</button>
              </div>
            ) : (
              <p>
                Please{" "}
                <span onClick={() => navigate("/login")}>login</span> to
                post a review.
              </p>
            )}
            
          </div>
        </div>
        <div></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Details;