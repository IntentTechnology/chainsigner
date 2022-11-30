import {
  Flex,
  Text,
  HStack,
  Button,
  Divider,
  Center,
  Stack,
  useDisclosure,
  IconButton,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { RiMenuLine, RiCloseFill } from 'react-icons/ri'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box px={4}>
        <Stack padding={'40px'}>
          <Flex
            h="70px"
            w="100%"
            justifyContent="space-between"
            alignItems={'center'}
          >
            <IconButton
              pl="8px"
              size={'md'}
              icon={
                isOpen ? (
                  <RiCloseFill size={'1.5rem'} />
                ) : (
                  <RiMenuLine size={'1.5rem'} />
                )
              }
              aria-label={'Open Menu'}
              display={{ lg: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Flex
              display={{ base: 'flex', lg: 'none' }}
              ml="30rem"
              fontSize={'20px'}
            >
              <Text>ChainSignr</Text>
            </Flex>
            <HStack spacing="5" display={{ base: 'none', lg: 'flex' }}>
              <Flex display={{ base: 'flex' }}>
                <Text>ChainSignr</Text>
              </Flex>
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
            <HStack display={{ base: 'none', lg: 'flex' }}>
              <Button h="30px" w="200px" borderRadius="30px">
                Collect Wallet
              </Button>
              <NextLink href="/page-2">
                <Button h="30px" w="200px" borderRadius="30px">
                  Demo link to next page
                </Button>
              </NextLink>
            </HStack>
          </Flex>
        </Stack>
        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack
              as={'nav'}
              spacing={5}
              alignItems="center"
              justifyContent={'center'}
            >
              <Button
                h="30px"
                w="200px"
                borderRadius="30px"
                color="#fff"
                bg="purple.100"
              >
                Check Address
              </Button>
              <Button h="30px" w="200px" borderRadius="30px">
                Collect Wallet
              </Button>
              <NextLink href="/page-2">
                <Button h="30px" w="200px" borderRadius="30px">
                  Demo link to next page
                </Button>
              </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Header
