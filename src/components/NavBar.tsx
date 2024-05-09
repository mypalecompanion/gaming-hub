import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={Logo} boxSize="16" />
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
