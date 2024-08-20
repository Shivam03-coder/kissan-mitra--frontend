import { Select, Option } from "@material-tailwind/react";
import {
  useGetLocalMarketNameMutation,
  useGetStateDataQuery,
} from "../../../../redux/endpoints/appdataapi";
import Mainloader from "../../../shared/apploaders/Mainloader";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedStateName,
  setSelectedDistrictName,
  setLocalMarketName,
  setDistrictsNamesData,
  setLocalMarketNamesData,
  clearSelectedDistrictNamesData,
  clearSelelctedlocaLMarketNamesData,
} from "../../../../redux/states/statedataSlice";

const SelectionSection = () => {
  const { data: stateData, isSuccess, error } = useGetStateDataQuery();
  const [getLocalMarketName] = useGetLocalMarketNameMutation();
  const dispatch = useDispatch();
  const {
    selectedStateName,
    selectedDistrictName,
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
      dispatch(setLocalMarketName(value));
    },
    [getLocalMarketName, dispatch]
  );

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
    <section className="grid md:grid-cols-3 gap-5 place-items-center py-6">
      <div className="w-72">
        {stateOptions.length > 0 && (
          <Select
            className="border-2 text-lg"
            label="Select State"
            success
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            value={selectedStateName}
            onChange={handleStateChange}
          >
            {stateOptions}
          </Select>
        )}
      </div>
      <div className="w-72">
        <Select
          className="border-2 text-lg"
          label="Select District"
          success
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          value={selectedDistrictName}
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
      <div className="w-72">
        <Select
          className="border-2 text-lg"
          label="Select Mandi"
          success
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          disabled={localMarketNamesData.length === 0 ? true : false}
          value={selectedDistrictName}
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
    </section>
  );
};

export default SelectionSection;
