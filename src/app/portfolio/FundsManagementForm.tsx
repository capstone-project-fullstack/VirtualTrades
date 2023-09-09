'use client';

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from '@material-tailwind/react';
import { addFunds, withdrawFunds } from '../redux/features/fundManagementSlice';
import { useAppDispatch } from '../redux/hooks';
import axios from 'axios';

interface FundsManagementForm {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FundsManagementForm({
  open,
  setOpen,
}: FundsManagementForm) {
  const handleOpen = () => setOpen((cur) => !cur);
  const [type, setType] = useState('add');
  const dispatch = useAppDispatch();

  const addFundsHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const funds = Number(e.currentTarget.addAmount.value);
    axios
      .patch('/api/manageFunds?type=add', { amount: funds })
      .then(() => {
        dispatch(addFunds(funds));
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
    e.currentTarget.reset();
  };

  const withdrawFundsHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const funds = Number(e.currentTarget.withdrawAmount.value);
    axios
      .patch('/api/manageFunds?type=withdraw', { amount: funds })
      .then(() => {
        dispatch(withdrawFunds(funds));
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
    e.currentTarget.reset();
  };

  return (
    <>
      <Button className="bg-light-green" onClick={handleOpen}>
        Add Cash
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent"
      >
        <Card className="mx-auto w-full max-w-[24rem] bg-dark-purple">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Virtual Trade Wallet
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0 ">
                <Tab value="add" onClick={() => setType('add')}>
                  Add
                </Tab>
                <Tab value="withdraw" onClick={() => setType('withdraw')}>
                  Withdraw
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-visible"
                animate={{
                  initial: {
                    x: type === 'add' ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === 'withdraw' ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="add" className="p-0">
                  <form
                    onSubmit={addFundsHandler}
                    className="mt-6 flex flex-col gap-4"
                  >
                    <div>
                      <Input
                        label="Add Amount"
                        type="number"
                        containerProps={{ className: 'min-w-[72px]' }}
                        crossOrigin="anonymous"
                        name="addAmount"
                        required
                      />
                    </div>

                    <Button type="submit" className="f-center" size="lg">
                      {' '}
                      Add
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value="withdraw" className="p-0">
                  <form
                    onSubmit={withdrawFundsHandler}
                    className="mt-6 flex flex-col gap-4"
                  >
                    <div>
                      <Input
                        label="Withdraw Amount"
                        type="number"
                        containerProps={{ className: 'min-w-[72px]' }}
                        crossOrigin="anonymous"
                        name="withdrawAmount"
                        required
                      />
                    </div>

                    <Button className="f-center" type="submit" size="lg">
                      Withdraw
                    </Button>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
