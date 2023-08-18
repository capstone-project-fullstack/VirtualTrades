import { SignUp } from "@clerk/nextjs";
// import { prisma } from "../../../lib/prisma";
// import { auth } from '@clerk/nextjs';


// async function createUser(userId: string) {
//   // return prisma
//   const user = await prisma.user.create({
//     data: {
//       id: userId,
//       initial_amount: 0,
//       cash: 0,
//       current_portfolio_value: 0,
//     },
//   });
//   return user;
// }

export default function Page() {
  return (
    <div className="text-white flex justify-center items-center">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
