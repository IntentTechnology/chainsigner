import React from 'react'
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import Popup from '../popup/popup'

const Header = () => {
  return (
    <>
      <Stack padding={'30px'}>
        <Popup />
        <Flex
          h="70px"
          w="100%"
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Text>ChainSignr</Text>
          <HStack alignItems={'center'} justifyContent="center">
            <Box
              as="div"
              h="24px"
              w="24px"
              borderRadius="50%"
              bg={'purple.200'}
              border="3px solid #fff"
            />
            <Text
              bg="#eee"
              h="27px"
              w="150px"
              borderRadius="30px"
              textAlign={'center'}
              fontSize={{ base: '15px' }}
            >
              yrgyygyeyfyuyu...
            </Text>
          </HStack>
        </Flex>
      </Stack>
    </>
  )
}

export default Header
