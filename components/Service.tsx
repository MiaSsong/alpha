"use client";

import { Container, Title, Text, Grid, Paper, ThemeIcon, List, rem, Group, Badge, SimpleGrid, Card } from '@mantine/core';
import { AreaChart, BarChart } from '@mantine/charts';
import { IconCheck, IconDeviceAnalytics, IconChartBar, IconRefresh, IconClock, IconTrendingUp, IconDatabase } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';
import classes from './Service.module.css';

// Dummy data for charts
const salesData = [
    { date: 'Jan', sales: 2000, profit: 1200 },
    { date: 'Feb', sales: 3500, profit: 2100 },
    { date: 'Mar', sales: 2800, profit: 1900 },
    { date: 'Apr', sales: 4200, profit: 2800 },
    { date: 'May', sales: 5100, profit: 3200 },
    { date: 'Jun', sales: 6800, profit: 4500 },
];

const msData = [
    { product: 'Prod A', market: 30, myShare: 45 },
    { product: 'Prod B', market: 50, myShare: 20 },
    { product: 'Prod C', market: 40, myShare: 65 },
    { product: 'Prod D', market: 70, myShare: 55 },
];

export function Service() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const featureRef = useRef(null);
    const dashboardRef = useRef(null);
    const statsRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title Animation
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Feature Cards Animation
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: featureRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });

        // Dashboard/Functions Animation
        gsap.from(dashboardRef.current, {
            scrollTrigger: {
                trigger: dashboardRef.current,
                start: "top 75%",
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Stats Animation
        const statTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
            }
        });

        statTimeline.from(".stat-card", {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6
        });

        // Counter Animation for "60~80%"
        // Since it's text "60~80%", we can't easily tween it as a number directly without complex parsing.
        // For simplicity and stability, we'll fade it in or use a simple scale up.
        // If strict number counting is needed, we'd separate the numbers.

    }, { scope: container });

    return (
        <section className={classes.section} id="service" ref={container}>
            <Container size="xl">
                {/* 1. Header Section */}
                <div ref={titleRef} style={{ textAlign: 'center', marginBottom: 80 }}>
                    <Badge color="deepGreen" variant="light" size="lg" mb="md">ALPHA BI Solution</Badge>
                    <Title order={2} className={classes.title}>
                        ALPHA: 제약 SCM을 위한<br />
                        <span className={classes.highlight}>원클릭 데이터 플랫폼</span>
                    </Title>
                    <Text c="dimmed" className={classes.description} mt="md">
                        엑셀로 수작업하던 복잡한 취합 과정을 웹 기반 실시간 분석 대시보드로 전환하세요.<br />
                        데이터 정밀도는 높이고, 작업 시간은 획기적으로 줄여줍니다.
                    </Text>
                </div>

                {/* 2. BI Solution Key Features */}
                <div ref={featureRef}>
                    <SimpleGrid cols={{ base: 1, md: 3 }} spacing={30} mb={100}>
                        <Paper className={`${classes.featureCard} feature-card`} p="xl" radius="lg">
                            <div className={classes.iconWrapper}>
                                <IconDeviceAnalytics size={32} stroke={1.5} />
                            </div>
                            <Title order={4} mb="sm">실시간 대시보드</Title>
                            <Text size="sm" c="dimmed">
                                엑셀 수작업을 실시간 분석 대시보드로 전환하세요.
                                데이터의 흐름을 한눈에 파악할 수 있습니다.
                            </Text>
                        </Paper>
                        <Paper className={`${classes.featureCard} feature-card`} p="xl" radius="lg">
                            <div className={classes.iconWrapper}>
                                <IconChartBar size={32} stroke={1.5} />
                            </div>
                            <Title order={4} mb="sm">통계 시각화</Title>
                            <Text size="sm" c="dimmed">
                                복잡한 데이터를 차트와 그래프로 시각화하여
                                직관적으로 이해할 수 있는 도구를 제공합니다.
                            </Text>
                        </Paper>
                        <Paper className={`${classes.featureCard} feature-card`} p="xl" radius="lg">
                            <div className={classes.iconWrapper}>
                                <IconDatabase size={32} stroke={1.5} />
                            </div>
                            <Title order={4} mb="sm">원클릭 플랫폼</Title>
                            <Text size="sm" c="dimmed">
                                제약 SCM 담당자를 위한 최적화된 구성으로
                                클릭 한 번으로 필요한 모든 데이터를 조회합니다.
                            </Text>
                        </Paper>
                    </SimpleGrid>
                </div>

                {/* 3. Core Functions (Chart Viz + List) */}
                <Grid gutter={60} align="center" mb={100} ref={dashboardRef}>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <div className={classes.dashboardPreview}>
                            <Paper shadow="none" p="xl" className={classes.chartCard}>
                                <Group justify="space-between" mb="lg">
                                    <Title order={4}>월별 매출 및 이익 추이</Title>
                                    <Badge color="gray">Real-time</Badge>
                                </Group>
                                {mounted && <AreaChart
                                    h={300}
                                    data={salesData}
                                    dataKey="date"
                                    series={[
                                        { name: 'sales', color: 'deepGreen.6' },
                                        { name: 'profit', color: 'teal.3' },
                                    ]}
                                    curveType="monotone"
                                    gridAxis="xy"
                                    withLegend
                                />}
                            </Paper>
                            <Paper shadow="none" p="xl" className={classes.chartCardSmall} mt="xs" style={{ borderTop: '1px solid #f1f3f5' }}>
                                <Group justify="space-between" mb="md">
                                    <Title order={5}>제품별 점유율 (MS)</Title>
                                    <Text size="xs" c="dimmed">업데이트: 10분 전</Text>
                                </Group>
                                {mounted && <BarChart
                                    h={180}
                                    data={msData}
                                    dataKey="product"
                                    series={[
                                        { name: 'market', color: 'gray.4', label: '시장 평균' },
                                        { name: 'myShare', color: 'deepGreen.6', label: '자사 점유율' },
                                    ]}
                                    tickLine="y"
                                    gridAxis="y"
                                />}
                            </Paper>
                        </div>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Title order={3} mb="lg">핵심 기능</Title>
                        <List
                            spacing="xl"
                            size="md"
                            center
                            icon={
                                <ThemeIcon size={28} radius="xl" color="deepGreen" variant="light">
                                    <IconCheck style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <div>
                                    <Text fw={700}>ATC 코드 기반 시장 점유율 분석</Text>
                                    <Text size="sm" c="dimmed" mt={4}>약물 분류 체계에 따른 정밀한 시장 분석을 제공합니다.</Text>
                                </div>
                            </List.Item>
                            <List.Item>
                                <div>
                                    <Text fw={700}>적정 재고 파악</Text>
                                    <Text size="sm" c="dimmed" mt={4}>재고 상황을 확인할 수 있어 적정재고량을 예측 할 수 있습니다.</Text>
                                </div>
                            </List.Item>
                            <List.Item>
                                <div>
                                    <Text fw={700}>원하는 주기의 데이터 자동 업데이트</Text>
                                    <Text size="sm" c="dimmed" mt={4}>수동 입력 없이 자동으로 최신 데이터를 유지하여 업무 부담을 줄입니다.</Text>
                                </div>
                            </List.Item>
                        </List>
                    </Grid.Col>
                </Grid>

                {/* 4. Expected Effects */}
                <div ref={statsRef}>
                    <Title order={3} ta="center" mb="xl">도입 기대 효과</Title>
                    <Grid gutter="xl">
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card className={`${classes.statCard} stat-card`}>
                                <IconClock size={40} color="var(--mantine-color-deepGreen-6)" style={{ margin: '0 auto 15px' }} />
                                <div className={classes.statValue}>
                                    <span className="stat-number">40</span>~<span className="stat-number">50</span>%
                                </div>
                                <div className={classes.statLabel}>작업 시간 단축</div>
                                <div className={classes.statDesc}>
                                    자동화를 통해<br />
                                    반복 업무 시간을 획기적으로 줄입니다.
                                </div>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card className={`${classes.statCard} stat-card`}>
                                <IconTrendingUp size={40} color="var(--mantine-color-deepGreen-6)" style={{ margin: '0 auto 15px' }} />
                                <div className={classes.statValue}>정밀도 향상</div>
                                <div className={classes.statLabel}>데이터 정확성</div>
                                <div className={classes.statDesc}>
                                    자동화된 데이터 처리로 인적 오류를<br />
                                    제거하고 데이터 신뢰도를 높입니다.
                                </div>
                            </Card>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card className={`${classes.statCard} stat-card`}>
                                <IconDeviceAnalytics size={40} color="var(--mantine-color-deepGreen-6)" style={{ margin: '0 auto 15px' }} />
                                <div className={classes.statValue}>의사결정</div>
                                <div className={classes.statLabel}>경영 판단 개선</div>
                                <div className={classes.statDesc}>
                                    실시간 분석으로 빠르고 신뢰할 수 있는<br />
                                    전략적 의사결정이 가능해집니다.
                                </div>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>

            </Container>
        </section>
    );
}
