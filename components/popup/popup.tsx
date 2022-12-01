import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
  chakra,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>demo popup</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          border="2px solid "
          borderRadius={'20px'}
          h={{ base: '50%', md: '60%' }}
          alignItems="center"
          justifyContent={'center'}
          flexDirection={{ md: 'row' }}
          maxW={{ base: '22rem', md: '50rem' }}
          bg="transparent"
        >
          <Flex
            h="100%"
            bg={'white'}
            w="100%"
            borderTopLeftRadius={'19px'}
            borderBottomLeftRadius={'19px'}
          >
            <VStack w="full" textAlign="left" spacing="3">
              <chakra.p mt="0.5rem" mr={{ base: '2rem', md: '4.5rem' }}>
                Available wallets
              </chakra.p>
              <Divider borderColor={'black'} w="100%" />

              <chakra.p
                boxShadow={'lg'}
                w="100%"
                p="10px"
                borderRadius="2px"
                mr="1rem"
              >
                {' '}
                Metamask wallet
              </chakra.p>
            </VStack>
          </Flex>

          <VStack
            color="#fff"
            fontSize={{ base: '12px', md: '15px' }}
            bg="graytext"
            h={'100%'}
            w="100%"
            borderTopRightRadius={'19px'}
            borderBottomRightRadius={'19px'}
          >
            <chakra.p
              mt={'10px'}
              mr={{ base: '5rem', md: '13rem' }}
              fontSize={{ base: '15px', md: '20px' }}
            >
              ChainSignr
            </chakra.p>
            <Stack
              pt={{ base: '4rem', md: '6rem' }}
              pl={{ base: '1rem', md: '2rem' }}
            >
              <chakra.h2 fontSize={{ base: '20px', md: '20px' }}>
                Get Started
              </chakra.h2>
              <chakra.p>Connect your wallet</chakra.p>
              <chakra.p>
                Connecting your wallet is like "logging in" to web3.
              </chakra.p>
              <chakra.p>
                Select your wallet from the option to get started.
              </chakra.p>
            </Stack>
          </VStack>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  )
}
export default Popup
