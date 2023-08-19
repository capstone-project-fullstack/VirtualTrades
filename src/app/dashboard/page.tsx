import { currentUser } from "@clerk/nextjs";
import HeaderText from "../components/HeaderText";
import CardLineChart from "../components/charts/LineGraph";
import UserService from "../modals/user";

export default async function Dashboard(): Promise<JSX.Element> {
  const currUser = await currentUser();
  if (!currUser) return <div></div>;
  const { id = "" } = currUser;
  const userExist = await UserService.findUser(id);
  if (!userExist) UserService.createUser(id);

  return (
    <div className="h-screen">
      <HeaderText text="Dashboard" />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardPageVisits /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
      </div>
    </div>
  );
}
