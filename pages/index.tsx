import { Container, Box, Heading, useColorModeValue, Image, Flex, Spacer, Stack } from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection,BioYear } from 'components/bio'
import TWFeed from 'components/twitterfeed'

const Page = () => {
  return (
  <Flex>
    
  <Stack direction={{ base: 'column', md: 'row' }}
                  display={{ base: 'none', md: 'flex' }}
                  width={{ base: 'full', md: 'auto' }}
                  flexGrow={1}
                  mx={2}
                  mt={{ base: 4, md: 0 }}>
    <Box maxWidth={300}>

    </Box>
  </Stack>
    
  <Spacer />

  <Container>
    <br /><br /><br /><br />
    <Box borderRadius='lg' bg={useColorModeValue('teal.200', 'whiteAlpha.200')} p={3} mb={6} textAlign='center'>  
      01001000 01001011 01010011 01001000
    </Box>
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as='h2' variant='page-title'>
          Jerome A.
        </Heading>
        Computer Engineer / Junior Software Dev
      </Box>
      <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md:6}} textAlign='center'>
        <Box
            borderColor='blackAlpha.600'
            borderWidth={1}
            borderStyle='solid'
            w='100px'
            h='100px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'>
          <Image src='/images/king.jpg' alt='SID AI image from Viva la Vida' width='100' height='100' />
        </Box>
      </Box>
    </Box>
    <Box borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={5} mt={6}>
      <Section delay={0.5}>
        <Heading as='h3' variant='section-title'>
        WORK
        </Heading>
        <p>
          Haven't worked yet. Currently had University projects though.
        </p>
      </Section>
      <Section delay={0.5}>
        <Heading as='h3' variant='section-title'>
        BIO
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in the PH Server
        </BioSection>
        <BioSection>
          <BioYear>2019 - 20XX</BioYear>
          Started University taking Bachelor of Science in Computer Engineering
        </BioSection>
      </Section>
      <Section delay={0.5}>
        <Heading variant='section-title'>
          SNS
        </Heading>
        <BioSection>
          <p></p>
          <a href='https://www.linkedin.com/in/jerome-christian-alapad-3547631b7/'>LINKEDIN</a><br />
          <a href='https://www.github.com/jeromealapad13'>GITHUB</a><br />
          <a href=''></a>SNS2<br />
          SNS3
        </BioSection>
      </Section>
    </Box>  
  </Container>
  
  <Stack 
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    flexGrow={1}
                    mx={2}
                    mt={{ base: 4, md: 0 }}>
    <br /><br /><br /><br />
    <TWFeed/>
  </Stack>

  </Flex>
  )
} 

export default Page