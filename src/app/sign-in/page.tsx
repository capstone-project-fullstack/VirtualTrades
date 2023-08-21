import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="text-white flex justify-center items-center">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
