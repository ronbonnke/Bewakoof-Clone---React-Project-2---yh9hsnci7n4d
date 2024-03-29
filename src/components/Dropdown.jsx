import React, { useState, useEffect } from "react";
import "../styles/dropdown/Dropdown.css";
import { useCurrentContext } from "../context/CurrentProvider";

const Colors = [
  { name: "CREAM" },
  { name: "ORANGE" },
  { name: "BLUE" },
  { name: "RED" },
  { name: "GREY" },
  { name: "GREEN" },
  { name: "BROWN" },
];

const Dropdown = ({ Sort }) => {
  const [open, isOpen] = useState(false);
  const [open1, isOpen1] = useState(false);
  const [open2, isOpen2] = useState(false);
  const [open3, isOpen3] = useState(false);
  const [open4, isOpen4] = useState(false);
  const [open5, isOpen5] = useState(false);
  const [open6, isOpen6] = useState(false);
  const [open7, isOpen7] = useState(false);

  const { mensClothes, setMensClothes } = useCurrentContext();
  const { womensCloths, setWomensCloths } = useCurrentContext();
  const {clothes, setClothes} = useCurrentContext();


  // const dispatch = useDispatch();
  //   const { data, loading, error } = useSelector((state) => state.product);

  const handleDrop = (value) => {
    if (value === 0) {
      isOpen(!open);
    } else if (value === 1) {
      isOpen1(!open1);
    } else if (value === 2) {
      isOpen2(!open2);
    } else if (value === 3) {
      isOpen3(!open3);
    } else if (value === 4) {
      isOpen4(!open4);
    } else if (value === 5) {
      isOpen5(!open5);
    } else if (value === 6) {
      isOpen6(!open6);
    } else if (value === 7) {
      isOpen7(!open7);
    }
  };

  // const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",
          {
            method: "GET",
            headers: {
              projectId: "ntymfpzixzjc",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch best color");
        }

        const data = await response.json();
        setClothes(data);
      } catch (error) {
        console.error("Error fetching color:", error.message);
      }
    };

    fetchColor();
  }, []);

  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          projectId: "ntymfpzixzjc",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }

      const data = await response.json();
      console.log("data", data);
      setMensClothes(data.data);
      setWomensCloths(data.data);
      setClothes(data.data);

      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(0)}>
          Color
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open ? (
          <div className="dropdown-content">
            {Colors.map((item) => (
              <div className="dropdown-item" key={item.name}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      let url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?color=${item.name}`;
                      fetchProducts(url);
                    }
                  }}
                />
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(4)}>
          Tags
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open4 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=trending";
                    fetchProducts(url);
                  }
                }}
              />
              Trending
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=top rated";
                    fetchProducts(url);
                  }
                }}
              />
              Top rated
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sellerTag=new arrival";
                    fetchProducts(url);
                  }
                }}
              />
              New Arrival
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(5)}>
          Ratings
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open5 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=1.5&ratings=1.6&ratings=1.7&ratings=1.8&1.9";
                    fetchProducts(url);
                  }
                }}
              />
              1-2
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=2&ratings=2.1&ratings=2.2&ratings=2.3&ratings=2.4&ratings=2.5&ratings=2.6&ratings=2.7&ratings=2.8&ratings=2.9";
                    fetchProducts(url);
                  }
                }}
              />
              2-3
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?ratings=3&ratings=3.1&ratings=3.2&ratings=3.3&ratings=3.4&ratings=3.5&ratings=3.6&ratings=3.7&ratings=3.8&ratings=3.9";
                    fetchProducts(url);
                  }
                }}
              />
              3-4
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&ratings=4.1&ratings=4.2&ratings=4.3&ratings=4.4&ratings=4.5&ratings=4.6&ratings=4.7&ratings=4.8&ratings=4.9&ratings=5";
                    fetchProducts(url);
                  }
                }}
              />
              4-5
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(2)}>
          Brand
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open2 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?brand=7 Shores";
                    fetchProducts(url);
                  }
                }}
              />
              7 Shores
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?brand=TISTABENE";
                    fetchProducts(url);
                  }
                }}
              />
              Tistabene
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?brand=Campus Sutra";
                    fetchProducts(url);
                  }
                }}
              />
              Campus Sutra
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => handleDrop(6)}>
          Gender
          <span style={{ fontWeight: "bold" }}>+</span>
        </div>
        {open6 ? (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Men";
                    fetchProducts(url);
                  }
                }}
              />
              Men
            </div>
            <div className="dropdown-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked === true) {
                    let url =
                      "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women";
                    fetchProducts(url);
                  }
                }}
              />
              Women
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dropdown;
