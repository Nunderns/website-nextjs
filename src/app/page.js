import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Logar</Button>
        </SignInButton>
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>

      <Button variant={"secondary"}>Logar</Button>
    </div>
  );
}
