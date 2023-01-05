import { Flex } from '@chakra-ui/react';
import { LeftPanel } from './components/left-panel';
import { RightPanel } from './components/right-panel';

function App() {
  return (
    <Flex h='100vh'>
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
}

export default App;
