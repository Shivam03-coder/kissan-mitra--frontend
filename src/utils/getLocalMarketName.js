import axios from "axios";
import { useEffect } from "react";

export const getLocalMarketName = () => {
    useEffect(() => {
        const FetchLocalmarketData = async () => {
          
            const resp = await axios.get(
              "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd00000152fbd7519425406d75b268ebb947e610&format=json&limit=10000"
            );
            return resp;
        }
        FetchLocalmarketData
  });
};
