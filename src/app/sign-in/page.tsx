import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-[70vh]">
      <div className="f-center h-full">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
}
