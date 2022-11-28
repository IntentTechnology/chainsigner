import {
  Flex,
  Text,
  HStack,
  Button,
  Divider,
  Center,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Stack padding={'40px'}>
      <Flex
        h="70px"
        w="100%"
        justifyContent="space-between"
        alignItems={'center'}
      >
        <HStack spacing="5">
          <Text>ChainSignr</Text>
          <Center height="30px">
            <Divider
              orientation="vertical"
              border="5px solid"
              borderColor={'purple.500'}
            />
          </Center>
          <Button
            h="30px"
            w="200px"
            borderRadius="30px"
            color="#fff"
            bg="purple.100"
          >
            Check Address
          </Button>
        </HStack>
        <Stack>
          <Button h="30px" w="200px" borderRadius="30px">
            Collect Wallet
          </Button>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Header
