import { SignUp } from '@clerk/nextjs';
export default function Page() {
  return (
    <div className="h-[80vh]">
      <div className="f-center h-full">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </div>
  );
}
