"use client";

import { Container, Title, Text, Button, Group, Overlay } from '@mantine/core';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import classes from './Hero.module.css';

gsap.registerPlugin(useGSAP);

export function Hero() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Text Reveal Animation (Split Text manually for better control without paid plugins)
        const lines = gsap.utils.toArray('.text-line');

        tl.to(lines, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        })
            .from(subTitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(buttonsRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: container });

    return (
        <div className={classes.hero} id="hero" ref={container}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.65) 100%)"
                opacity={1}
                zIndex={1}
            />

            <Container className={classes.container} size="md" style={{ zIndex: 2, position: 'relative' }}>
                <Title ref={titleRef} className={classes.title}>
                    <div className={classes.textReveal}>
                        <div className={`text-line ${classes.textLine}`}>대한민국 헬스케어의 미래,</div>
                    </div>
                    <br />
                    <div className={classes.textReveal}>
                        <div className={`text-line ${classes.textLine}`}>
                            데이터로 <Text component="span" inherit className={classes.highlight}>혁신</Text>하다
                        </div>
                    </div>
                </Title>
                <Text ref={subTitleRef} className={classes.description} size="xl" mt="xl">
                    전국 약국 80% 인프라, 4.4조 규모의 유통 데이터 파워
                </Text>

                <Group ref={buttonsRef} mt={40} justify="center">
                    <Button
                        size="xl"
                        variant="filled"
                        color="deepGreen"
                        radius="md"
                        className={classes.control}
                        component="a"
                        href="#service"
                    >
                        서비스 소개
                    </Button>
                    <Button
                        size="xl"
                        variant="default"
                        radius="md"
                        className={classes.control}
                        component="a"
                        href="#contact"
                    >
                        서비스 문의하기
                    </Button>
                </Group>
            </Container>
        </div>
    );
}
