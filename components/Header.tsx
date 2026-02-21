"use client";

import { Container, Group, Burger, Text, Box, Paper, Transition, Anchor } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
    { link: '#about', label: '회사 소개' },
    { link: '#service', label: '서비스 소개' },
    { link: '#contact', label: '문의하기' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [scroll] = useWindowScroll();
    const isScrolled = scroll.y > 0;

    const items = links.map((link) => (
        <Anchor
            key={link.label}
            href={link.link}
            underline="never"
            className={classes.link}
            data-active={isScrolled ? 'scrolled' : undefined}
            onClick={(event) => {
                event.preventDefault();
                const target = document.querySelector(link.link);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (opened) toggle();
                }
            }}
        >
            {link.label}
        </Anchor>
    ));

    return (
        <Box
            component="header"
            className={classes.header}
            data-scrolled={isScrolled}
        >
            <Container size="md" className={classes.inner}>
                <Text
                    fw={900}
                    size="xl"
                    component="a"
                    href="/"
                    className={classes.logo}
                    data-scrolled={isScrolled}
                >
                    ALSSOLUTION
                </Text>

                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" color={isScrolled ? 'black' : 'white'} />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Box>
    );
}
