import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        }else {
          parseItem = JSON.parse(localStorageItem);
          saveItem(parseItem);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }

    }, 1000);
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };


// const defaultTaks = [
//   {text: 'cortar el pelo', completed: false},
//   {text: 'cortar el pasto', completed: true},
//   {text: 'cortar el planta', completed: false},
//   {text: 'LALALALALALALA', completed: false},
//   {text: 'cortar', completed: false}
// ];
// localStorage.setItem('TODO_V1', JSON.stringify(defaultTaks));

