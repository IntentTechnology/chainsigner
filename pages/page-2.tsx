import {
  Box,
  Stack,
  chakra,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import Cards from '../components/walletpage/cards'
import Header from '../components/walletpage/header'
import { BsArrowLeftCircle } from 'react-icons/bs'

const IdCards = [
  {
    id: 1,
    title: 'national Identity number (nin)',
  },
  {
    id: 2,
    title: 'nigerian Voters Card',
  },
  {
    id: 3,
    title: 'International Passport',
  },
  {
    id: 4,
    title: "Driver's License",
  },
  {
    id: 5,
    title: 'Bank Verification number (Bvn)',
  },
]

const WalletPage = () => {
  return (
    <Stack>
      <Header />

      <VStack>
        <Box borderRadius={'5px'} bg="GrayText" w="95%" p="2rem">
          <chakra.p> Connect your Government</chakra.p>
          <chakra.p mb="1rem">Issued ID Card with your wallet</chakra.p>
          <Divider />
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap="2rem">
            {IdCards.map(card => (
              <Cards key={card.id} title={card.title} />
            ))}
            <HStack pt="8rem">
              <chakra.p pr="2.8rem" textDecor={'underline'}>
                Dont Have Any of These?
              </chakra.p>

              <BsArrowLeftCircle fontSize={'1.3rem'} />
              <Button
                h="30px"
                w="170px"
                borderRadius="30px"
                color="#fff"
                bg="purple.100"
              >
                Go Back
              </Button>
            </HStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </Stack>
  )
}

export default WalletPage
