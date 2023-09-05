import { currentUser } from '@clerk/nextjs';
import HeaderText from '../components/HeaderText';
import UserService from '../modals/user';
import Funds from './Funds';
import PositionTable from './PositionTable';
import Overview from './Overview';
import PortfolioDiversityChart from './PortfolioDiversityChart';
import TradeHistory from './TradeHistory';

export default async function Portfolio() {
  const currUser = await currentUser();
  if (!currUser) return <div></div>;
  const userId = currUser.id;
  let user = await UserService.findUser(userId);
  if (!user) user = await UserService.createUser(userId);

  const initialValues = {
    initial_amount: user?.initial_amount || 0,
    cash: user?.cash || 0,
    current_portfolio_value: user?.current_portfolio_value || 0,
  };

  return (
    <div className="min-h-screen">
      <HeaderText text="Portfolio" />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <Overview initialValues={initialValues} />
        </div>
        <div className="w-full xl:w-4/12 px-4 flex flex-col flex-grow">
          <div className="m-0 sm:mr-auto float-left">
            <Funds />
          </div>

          <div className="flex-2 p-0 sm:p-6 sm:f-center">
            <PortfolioDiversityChart />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 bg-dark-black">
          <PositionTable />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <TradeHistory />
        </div>
      </div>
    </div>
  );
}
