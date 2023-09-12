'use client';

import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';
import { GradientButtonRounded } from './buttons/Button';

interface NotificationDialogProps {
  dialogContent: {
    open: boolean;
    title: string;
    subTitle?: string;
    message: string;
  };
  setDialogContent: (state: any) => void;
}

export function NotificationDialog({
  dialogContent,
  setDialogContent,
}: NotificationDialogProps) {
  const handleOpen = () => setDialogContent(!dialogContent.open);

  return (
    <Dialog open={dialogContent.open} handler={handleOpen} className="bg-dark-purple">
      <DialogHeader>
        <Typography variant="h5" color="blue-gray">
          {dialogContent.title}
        </Typography>
      </DialogHeader>
      <DialogBody divider className="grid place-items-center gap-4">
        <Typography color="green" variant="h4">
          {dialogContent.subTitle}
        </Typography>
        <Typography className="text-center font-normal">
          {dialogContent.message}
        </Typography>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <GradientButtonRounded text="Close" onClick={handleOpen} color="green"/>
      </DialogFooter>
    </Dialog>
  );
}
