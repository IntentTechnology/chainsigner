import { Box, chakra, Flex, HStack, Spacer, VStack } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
const Banner = () => {
  return (
    <Flex flexDirection={'column'}>
      <VStack width={'700px'} alignItems="left" ml="2rem" mt="4rem" spacing={5}>
        <chakra.h2 fontSize={'50px'}>Welcome to chainSignr</chakra.h2>

        <chakra.p>
          <Box>
            Grow a decentralized identity record with various credentials about
            you.
          </Box>
          <Box>
            Through the network of sources about your personhood,application
            like Gitcoin Grants 2.0
          </Box>
          gives you rights like matching weight in Quadratic funding.
        </chakra.p>
        <Box pt="5rem">
          <AiFillGithub fontSize={'40px'} />
        </Box>
      </VStack>
      <HStack padding={'40px'} mt="5rem">
        <chakra.p>Powered by Klynox</chakra.p>
        <Spacer />
        <chakra.p textDecor={'underline'}>why chainSignr? Document</chakra.p>
      </HStack>
    </Flex>
  )
}

export default Banner
