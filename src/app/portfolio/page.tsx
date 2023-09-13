import { currentUser } from '@clerk/nextjs';
import HeaderText from '../components/HeaderText';
import UserService from '../modals/user';
import Funds from './Funds';
import PositionTable from './PositionTable';
import Overview from './Overview';
import PortfolioDiversityChart from './PortfolioDiversityChart';
import TradeHistory from './TradeHistory';
import Tooltip from '../components/Tooltip';

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
      <div className="flex flex-wrap m-2">
        <div className="w-full xl:w-8/12 xl:mb-0 p-2">
          <Overview initialValues={initialValues} />
        </div>
        <div className="w-full xl:w-4/12 p-2">
          <div className="h-full flex flex-col flex-grow rounded-xl border border-custom3">
            <div className="m-0 px-5 sm:mr-auto float-left">
              <Funds />
            </div>

            <div className="flex-2 p-2 flex-col">
              <h1 className="text-xl font-bold text-center md:text-left mb-5 ml-3 flex gap-x-1">
                Portfolio Diversity{' '}
                <span className="mt-1">
                  <Tooltip
                    title="Portfolio Diversity"
                    text="% of total portfolio value"
                  />
                </span>
              </h1>
              <div className="f-center">
                <PortfolioDiversityChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-2">
        <div className="w-full xl:w-8/12 xl:mb-0  bg-dark-black px-2">
          <PositionTable />
        </div>
        <div className="w-full xl:w-4/12 px-2 pt-5 md:pt-0">
          <TradeHistory />
        </div>
      </div>
    </div>
  );
}
