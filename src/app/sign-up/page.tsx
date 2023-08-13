import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="text-white flex justify-center items-center">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
