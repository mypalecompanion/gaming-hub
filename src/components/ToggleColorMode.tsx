import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack paddingRight={"10px"}>
      <Switch onChange={toggleColorMode} />
      <Text>{`${colorMode}`} Mode</Text>
    </HStack>
  );
};

export default ToggleColorMode;
