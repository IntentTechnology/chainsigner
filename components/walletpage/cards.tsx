import { Button, Flex, chakra, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Cards = ({ title }: { title: string }) => {
  return (
    <Stack>
      <Flex
        w="100%"
        bg="#fff"
        alignItems={'center'}
        justifyContent="center"
        p="3rem"
        borderRadius="2xl"
        mt="2rem"
      >
        <VStack spacing="20">
          <chakra.p>{title}</chakra.p>
          <Button w="250px"> Verify</Button>
        </VStack>
      </Flex>
    </Stack>
  )
}

export default Cards
