import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { AiOutlineSend } from "react-icons/ai";
import { KeyfeaturesData } from "../../../../data";

function AdminOfficeinfoSection() {
  return (
    <section className=" w-[20rem] md:w-[25rem] md:mt-4">
      <Timeline className="-space-y-7">
        {KeyfeaturesData.map((items) => {
          const IconComponent = items.icon;
          return (
            <TimelineItem key={items.id} className="h-28">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-2 pl-4 pr-8 shadow-glass">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <IconComponent className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    {items.feature}
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}

export default AdminOfficeinfoSection;
