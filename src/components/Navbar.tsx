import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially
            </Link>
  
            {/* Desktop Navbar */}
            <DesktopNavbar />
            {/* Uncomment the Mobile Navbar if needed */}
            {/* <MobileNavbar /> */}
          </div>
        </div>
      </div>
    </div>
  );
  
  }
  