import { Select, Option, Button } from "@material-tailwind/react";
import {
  useGetLocalMarketNameMutation,
  useGetMarketDataMutation,
  useGetStateDataQuery,
} from "../../../../redux/endpoints/appdataapi";
import Mainloader from "../../../shared/apploaders/Mainloader";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedStateName,
  setSelectedDistrictName,
  setSelectedLocalMarketName,
  setDistrictsNamesData,
  setLocalMarketNamesData,
  clearSelectedDistrictNamesData,
  clearSelelctedlocaLMarketNamesData,
  setMarketPriceData,
} from "../../../../redux/states/statedataSlice";

const SelectionSection = () => {
  const { data: stateData, isSuccess, error } = useGetStateDataQuery();
  const [getLocalMarketName] = useGetLocalMarketNameMutation();
  const [getmarketData] = useGetMarketDataMutation();
  const dispatch = useDispatch();
  const {
    selectedStateName,
    selectedDistrictName,
    selectedLocalMarketName,
    districtsNamesData,
    localMarketNamesData,
  } = useSelector((state) => state.stateData);

  const handleStateChange = useCallback(
    (value) => {
      dispatch(setSelectedStateName(value));
      dispatch(clearSelectedDistrictNamesData());
      dispatch(clearSelelctedlocaLMarketNamesData());
    },
    [dispatch]
  );

  const handleDistrictChange = useCallback(
    async (value) => {
      dispatch(setSelectedDistrictName(value));

      // CLEAR LOCAL MARKET NAMES BEFOR SETTING NEW MARKET
      dispatch(clearSelelctedlocaLMarketNamesData());

      if (value) {
        try {
          const resp = await getLocalMarketName({
            state: selectedStateName.toUpperCase(),
            district: value.toUpperCase(),
          }).unwrap();
          const { data: finalResp } = resp;
          if (finalResp) {
            dispatch(setLocalMarketNamesData(finalResp));
          }
        } catch (err) {
          console.error("Error fetching market data:", err);
        }
      }
    },
    [selectedStateName, getLocalMarketName, dispatch]
  );

  const handleLocalMarketCahnge = useCallback(
    (value) => {
      dispatch(setSelectedLocalMarketName(value));
    },
    [getLocalMarketName, dispatch]
  );

  const handleMarketData = async () => {
    try {
      const { data } = await getmarketData({
        state: selectedStateName,
        district: selectedDistrictName,
        market: selectedLocalMarketName,
      }).unwrap();
      dispatch(setMarketPriceData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (stateData && selectedStateName) {
      const filteredData = stateData.find(
        (elem) => elem.state === selectedStateName
      );
      dispatch(setDistrictsNamesData(filteredData?.districts || []));
    }
  }, [selectedStateName, stateData, dispatch]);

  const stateOptions = useMemo(
    () =>
      stateData?.map((item, index) => (
        <Option
          className="text-lg font-Inter font-medium"
          key={index}
          value={item.state}
        >
          {item.state}
        </Option>
      )),
    [stateData]
  );

  if (!isSuccess) return <Mainloader />;
  if (error) return <div>Error loading data...</div>;

  return (
    <section className="grid w-[95%] mx-auto md:grid-cols-4 gap-7 md:gap-3  place-items-center py-6">
      <div className="w-64">
        {stateOptions.length > 0 && (
          <Select
            className="border-2 text-lg"
            label="Select State"
            success
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            onChange={handleStateChange}
          >
            {stateOptions}
          </Select>
        )}
      </div>
      <div className="w-64">
        <Select
          className="border-2 text-lg"
          label="Select District"
          success
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          onChange={handleDistrictChange}
        >
          {districtsNamesData?.map((district, index) => (
            <Option
              className="text-lg font-Inter font-medium"
              key={index}
              value={district}
            >
              {district}
            </Option>
          ))}
        </Select>
      </div>
      <div className="w-64">
        <Select
          className="border-2 text-lg"
          label="Select Mandi"
          success
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          disabled={localMarketNamesData.length === 0 ? true : false}
          onChange={handleLocalMarketCahnge}
        >
          {localMarketNamesData?.map((market, index) => (
            <Option
              className="text-lg font-Inter font-medium"
              key={index}
              value={market}
            >
              {market}
            </Option>
          ))}
        </Select>
      </div>
      <Button
        onClick={handleMarketData}
        className="w-60 bg-green-500  text-black rounded-lg shadow-glass-card text-xl"
      >
        CHECK
      </Button>
    </section>
  );
};

export default SelectionSection;
