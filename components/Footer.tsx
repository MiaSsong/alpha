import { Container, Text } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.info}>
                    <Text fw={700} size="lg" mb="xs" c="white">ALSSOLUTION</Text>
                    <Text size="sm" c="dimmed" lh={1.6}>
                        (주)알스솔루션 | 대표이사: 이주호<br />
                        사업자등록번호: 000-00-00000 | 주소: 서울특별시 ... <br />
                        대표전화: 02-000-0000
                    </Text>
                    <Text size="xs" c="dimmed" mt="md">
                        © 2024 ALSSOLUTION. All rights reserved.
                    </Text>
                </div>
            </Container>
        </div>
    );
}
