// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useAsyncStorage = (key: string, initialValue: any) => {
//   const [storedValue, setStoredValue] = useState(initialValue);

//   useEffect(() => {
//     const fetchStoredValue = async () => {
//       try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//           setStoredValue(JSON.parse(value));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchStoredValue();
//   }, [key]);

//   const setValue = async (value: any) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//       setStoredValue(value);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return [storedValue, setValue];
// };

// export default useAsyncStorage;
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage<T>(key: string, initialValue: T): [T, (value: T) => Promise<void>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    async function loadStoredValue() {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        }
      } catch (error) {
        console.error("Failed to load stored value:", error);
      }
    }
    loadStoredValue();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      setStoredValue(value);
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to set stored value:", error);
    }
  };

  return [storedValue, setValue];
}
