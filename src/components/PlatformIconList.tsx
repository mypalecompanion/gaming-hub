import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaFirefoxBrowser,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";

interface Props {
  platforms: Platform[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const iconMap: { [key: string]: IconType } = {
  pc: GrPersonalComputer,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  web: FaFirefoxBrowser,
  nintendo: BsNintendoSwitch,
  ios: MdPhoneIphone,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      <HStack color="gray.500">
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
