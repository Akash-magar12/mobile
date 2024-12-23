/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Define the context type
export const Contexted = createContext(null);

//

// Create the Context provider
export const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  // handleAdd function will add items to the cart
  const handleAdd = (item) => {
    setCart((prev) => {
      // Check if item already exists in the cart
      const itemExists = prev.find((cartItem) => cartItem._id === item._id);

      if (itemExists) {
        // If item exists, update the quantity of that item
        return prev.map(
          (cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity  + 1 } // Update the quantity
              : cartItem // Keep the other items unchanged
        );
      } else {
        // If item doesn't exist, add the new item to the cart
        return [...prev, { ...item, quantity: 1 }]; // Add item with quantity 1
      }
    });
  };
  const handleIncre = (id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (id === item._id) {
          // Update the quantity of the item if the id matches
          return { ...item, quantity: item.quantity + 1 };
        }
        return item; // Return unchanged item if id does not match
      });
    });
  };

  const handleDecre = (id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (id === item._id) {
          // Update the quantity of the item if the id matches
          return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
          };
        }
        return item;
      });
    });
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const API_URL = "https://jsonserver.reactbd.com/amazonpro";

  const fetchAllData = async (endpoint) => {
    setLoading(true);
    try {
      const url = await fetch(endpoint);
      const response = await url.json();
      setProducts(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData(API_URL);
  }, []);

  return (
    <Contexted.Provider
      value={{
        loading,
        products,
        cart,
        handleAdd,
        handleIncre,
        handleDecre,
        setQuery,
        handleDelete,
        query,
      }}
    >
      {children}
    </Contexted.Provider>
  );
};
