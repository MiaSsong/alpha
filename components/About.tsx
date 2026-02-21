"use client";

import { Container, Title, Text, SimpleGrid, ThemeIcon, rem, Card, Overlay } from '@mantine/core';
import { IconDatabase, IconTruckDelivery, IconChartBar } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import classes from './About.module.css';

const features = [
    {
        icon: IconDatabase,
        title: '4.4조 규모 유통 데이터',
        description: '지오영의 22년 유통 노하우가 축적된 방대한 헬스케어 데이터를 기반으로 인사이트를 도출합니다.',
    },
    {
        icon: IconTruckDelivery,
        title: 'SCM 현대화',
        description: '복잡한 의약품 유통망을 통합 IT 기술력으로 디지털화하여 효율성을 극대화합니다.',
    },
    {
        icon: IconChartBar,
        title: '데이터 기반 의사결정',
        description: '직관적인 대시보드와 분석 도구를 통해 비즈니스 성장을 위한 최적의 전략을 수립합니다.',
    },
];

export function About() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const bgRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Parallax Effect
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        tl.to(bgRef.current, {
            y: -100,
            ease: "none"
        }, 0);

        // Title Parallax
        gsap.to(titleRef.current, {
            y: -50,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        // Description Parallax (Slower)
        gsap.to(descRef.current, {
            y: -20,
            scrollTrigger: {
                trigger: descRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            }
        });

        // Cards Stagger
        gsap.from(".about-card", {
            scrollTrigger: {
                trigger: ".about-card",
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: container });

    const items = features.map((feature) => (
        <Card key={feature.title} shadow="sm" radius="md" padding="xl" className={`${classes.card} about-card`}>
            <ThemeIcon
                size={50}
                radius={50}
                variant="light"
                color="deepGreen"
                className={classes.icon}
            >
                <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" fw={700} mt="md" mb={7} className={classes.cardTitle}>
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" lh={1.6}>
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <section className={classes.section} id="about" ref={container}>
            <div className={classes.backgroundPattern} ref={bgRef}></div>
            <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
                <div className={classes.header}>
                    <div ref={titleRef}>
                        <Title order={2} className={classes.title}>
                            알스솔루션은 헬스케어<br />
                            <span className={classes.highlight}>데이터 혁신</span>을 이끌어갑니다.
                        </Title>
                    </div>
                    <div ref={descRef}>
                        <Text c="dimmed" mt="md" className={classes.description}>
                            우리는 지오영의 22년 유통 노하우와 알스솔루션의 통합 IT 기술력을 결합하여,<br />
                            아날로그 방식의 수기 업무를 전산화하고 헬스케어 SCM의 새로운 표준을 제시합니다.
                        </Text>
                    </div>
                </div>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                    {items}
                </SimpleGrid>
            </Container>
        </section>
    );
}
