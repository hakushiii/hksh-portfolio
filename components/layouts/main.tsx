import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from 'components/footer'

const Main = ({ children, router }) => {
    return(
        <Box as='main' pb={10}>
            <Head>
                <meta name='viewport' content='width=device-width ,initial-scale=1'/>
                <title>HKSH - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>

            <Container maxW='container.md' pt={14}>
                {children}
            </Container>

            <Footer />
        </Box>
    )
}
export default Main