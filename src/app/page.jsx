import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

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

      <ModeToggle/>
    </div>
  );
}
