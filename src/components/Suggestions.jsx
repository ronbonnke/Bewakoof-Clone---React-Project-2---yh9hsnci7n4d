import React,{useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Suggestions({suggestions, setSuggestions}) {
    const navigate = useNavigate();
    const suggestionRef = useRef(null);
    console.log("suggestions",suggestions)

const handleSelectSuggestion = (name, _id) =>{
return(
  navigate(`/Product/${_id}`)
  // onClose();
)
}

const handleClickOutside = (event) => {
  if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
    // Clicked outside the suggestion box, close it
    // You can add additional logic or state to handle the closing behavior
    // For now, let's just clear the suggestions array
    // This assumes you have a way to manage the suggestions state in your parent component
    setSuggestions([])
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
  return (
    // <div>HEllo</div>
    <div className='search-box'
    ref={suggestionRef}
    >
      {suggestions.length > 0 && (
                      <ul
                        className="suggestionsList"
                        id="suggestionsList"
                      >
                        {suggestions.map((item, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              handleSelectSuggestion(item.name, item._id)
                            }
                          >
                            <p>{item.name}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                    </div>
  )
}

export default Suggestions
