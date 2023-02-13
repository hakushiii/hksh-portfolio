import Logo from './logo'
import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoBookmark, IoBug, IoLogoGithub } from 'react-icons/io5'
import ThemeButton from './themebutton'

const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return(
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? useColorModeValue('#2b6cb0','white') : undefined}
            color={active ? useColorModeValue('white','black') : inactiveColor}
            borderRadius='lg'
            {...props}>
        {children}
    </Link>
  )
}

const Navbar = props => {
    const { path } = props

    return(
        <Box position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#C7DEFA80','#12121260')}
        style={{backdropFilter:'blur(2px)'}}
        zIndex={1}
        {...props}>
            <Container display='flex' p={2} maxW='container.md' alignItems='center' justifyItems='space-between'>
                <Flex alignItems='center'>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}>
                    <LinkItem href='/works' path={path} display='inline-flex'>
                        <IoBookmark />
                        Works
                    </LinkItem>
                    <LinkItem href='/tools' path={path} display='inline-flex'>
                        <IoBug />
                        What I Use
                    </LinkItem>
                    <LinkItem href='https://www.github.com/jeromealapad13' path={path} display='inline-flex'>
                        <IoLogoGithub />
                        GITHUB
                    </LinkItem>
                </Stack>

                <Box>
                    <ThemeButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"/>
                            <MenuList
                                verticalAlign='true'>
                                <MenuItem as={NextLink} href="/">
                                    About
                                </MenuItem>
                                <MenuItem as={NextLink} href="/works">
                                    Works
                                </MenuItem>
                                <MenuItem as={NextLink} href="/tools">
                                    What I Use
                                </MenuItem>
                                <MenuItem
                                  as={Link}
                                  href="https://github.com/jeromealapad13">
                                    GITHUB
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar