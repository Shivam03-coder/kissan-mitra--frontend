import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const TABLE_HEAD = [
  "COMMODITY",
  "VARIETY",
  "MIN PRICE",
  "MAX PRICE",
  "ARRIVAL DATE",
  "GRADE",
];



function MarketpriceSection() {
  const { marketPriceData } = useSelector((state) => state.stateData);
  return (
    <section className="py-10">
      <Card className="h-full w-[93%]  mx-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-green-200 p-4"
                >
                  <Typography
                    variant="small"
                    className=" text-black font-semibold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {marketPriceData.length > 0 && (
            <tbody>
              {marketPriceData.map(
                (
                  {
                    Commodity,
                    Variety,
                    MinPrice,
                    MaxPrice,
                    ArrivalDate,
                    Grade,
                  },
                  index
                ) => {
                  const isLast = index === marketPriceData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Commodity}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-green-100`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Variety}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {MinPrice}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-green-100`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {MaxPrice}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ArrivalDate}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-green-100`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Grade}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          )}
        </table>
      </Card>
    </section>
  );
}

export default MarketpriceSection;
