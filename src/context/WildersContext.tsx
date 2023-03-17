import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { IWilderProps } from "../components/Wilder";

interface WildersContextProps {
  wilders: IWilderProps[];
  fetchData: () => void | Promise<void>;
}

export const WildersContext = createContext<WildersContextProps>({
  wilders: [],
  fetchData: () => {},
});

interface WildersProviderProps {
  children?: React.ReactNode;
}

export function WildersProvider({ children }: WildersProviderProps) {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/wilder");

    setWilders(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WildersContext.Provider value={{ wilders, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
}

export const useWilders = () => useContext(WildersContext);
