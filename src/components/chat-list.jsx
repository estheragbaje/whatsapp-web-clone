import {
  Avatar,
  chakra,
  HStack,
  Stack,
  Flex,
  Box,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { DeliveredIcon } from '../assets/icons';
import { chatData } from '../chat-data';

export function Chat({ name, message, date, seen, src, ...rest }) {
  return (
    <HStack
      _hover={{
        cursor: 'pointer',
        backgroundColor: '#f5f6f6',
      }}
      py='3'
      {...rest}
    >
      <Avatar mx='3' name={name} src={src} />
      <Box flex='1' pr='4'>
        <Flex justify='space-between' align='baseline'>
          <Box>
            <Text fontWeight='medium'>{name}</Text>
            <HStack>
              <DeliveredIcon color={seen ? '#53bdeb' : '#667781'} />
              <Text color='#667781' fontSize='sm'>
                {message}
              </Text>
            </HStack>
          </Box>
          <chakra.time fontSize='xs' color='#667781'>
            {date}
          </chakra.time>
        </Flex>
      </Box>
    </HStack>
  );
}

export function ChatList(props) {
  return (
    <Stack
      spacing='0'
      pr='1'
      divider={<StackDivider w='82%' alignSelf='flex-end' />}
      {...props}
    >
      {chatData.map((item, index) => (
        <Chat
          key={index}
          src={item.src}
          date={item.date}
          message={item.message}
          name={item.name}
          seen={item.seen}
        />
      ))}
    </Stack>
  );
}
