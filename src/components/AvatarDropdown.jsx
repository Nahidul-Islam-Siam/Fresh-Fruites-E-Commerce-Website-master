import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOut } from "@/redux/feature/authSlices/authSlices";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


export function Avatar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleNavigate = (path) => {
  
    router.push(path);
  };

  const handleLogout = () => {
  
    dispatch(logOut());

 
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }

    
 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className=" border border-gray-300 hover:bg-gray-300 text-black hover:text-black px-4 py-2 rounded-md text-sm font-medium">
           My Acoount
          </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black shadow-lg">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleNavigate("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/dashboard")}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/add-product")}>
           Add Product
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleNavigate("/change-password")}>
            Change Password
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
