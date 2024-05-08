import { Button, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <ChakraProvider>
      <Button>My Button</Button>
    </ChakraProvider>
  );
};

export default App;
