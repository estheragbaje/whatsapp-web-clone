import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
} from '@chakra-ui/react';
import { FilterIcon, SearchIcon } from '../assets/icons';

export function SearchPanel(props) {
  return (
    <HStack
      spacing={2}
      px='4'
      py='2'
      borderBottom='1px'
      borderColor='#e2e8f0'
      {...props}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          _placeholder={{
            opacity: 0.6,
            color: '#3b4a54',
            paddingLeft: '24px',
            fontSize: '15px',
          }}
          h='36px'
          _hover={{ bg: '#f0f2f5' }}
          bg='#f0f2f5'
          variant='filled'
          placeholder='Search or start new chat'
        />
      </InputGroup>
      <Tooltip
        shouldWrapChildren
        label='Unread chats filter'
        bg='#eae6df'
        color='black'
        fontSize='xs'
      >
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
    </HStack>
  );
}
