"use client";

import { Container, Title, TextInput, Textarea, Button, Group, Box, Checkbox, SimpleGrid, Text, Stack } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import classes from './Contact.module.css';

export function Contact() {
    const form = useForm({
        initialValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            terms: false,
        },
        validate: {
            name: (value) => (value.length < 2 ? '이름을 입력해주세요' : null),
            company: (value) => (value.length < 1 ? '회사명을 입력해주세요' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : '유효한 이메일을 입력해주세요'),
            terms: (value) => (value ? null : '개인정보 수집 및 이용에 동의해주세요'),
        },
    });

    return (
        <section className={classes.section} id="contact">
            <Container size="md">
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    알스솔루션과 함께<br />
                    헬스케어 SCM의 미래를 만드세요.
                </Title>

                <Box mt={50}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
                        <Box className={classes.infoBox}>
                            <Title order={3} className={classes.infoTitle}>
                                언제든지 연락주세요
                            </Title>
                            <Text className={classes.infoText}>
                                문의주시면 성실하게 답변하겠습니다.
                            </Text>

                            <Stack gap="md">
                                <div className={classes.contactItem}>
                                    <IconMail className={classes.contactIcon} />
                                    <div>contact@alssolution.co.kr</div>
                                </div>
                                <div className={classes.contactItem}>
                                    <IconPhone className={classes.contactIcon} />
                                    <div>02-1234-5678</div>
                                </div>
                                <div className={classes.contactItem}>
                                    <IconMapPin className={classes.contactIcon} />
                                    <div>서울 영등포구 양산로 43, 1004호</div>
                                </div>
                            </Stack>
                        </Box>

                        <div className={classes.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.565457635293!2d126.89668431531086!3d37.5273559798059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f18797435f9%3A0x6b497351652518e3!2z7ISc7JqI7Yq567OE7IucIOyYgeq0ke2PrOq1rCDimpHsgrDroZwgNDM!5e0!3m2!1sko!2skr!4v1646816578000!5m2!1sko!2skr"
                                className={classes.mapFrame}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </SimpleGrid>
                </Box>

                <Box mx="auto" mt={80} className={classes.formBox}>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                            <TextInput
                                label="이름"
                                placeholder="홍길동"
                                {...form.getInputProps('name')}
                                classNames={{ input: classes.input, label: classes.inputLabel }}
                            />
                            <TextInput
                                label="회사명"
                                placeholder="(주)알스솔루션"
                                {...form.getInputProps('company')}
                                classNames={{ input: classes.input, label: classes.inputLabel }}
                            />
                            <TextInput
                                label="이메일"
                                placeholder="email@example.com"
                                {...form.getInputProps('email')}
                                classNames={{ input: classes.input, label: classes.inputLabel }}
                            />
                            <TextInput
                                label="연락처"
                                placeholder="010-1234-5678"
                                {...form.getInputProps('phone')}
                                classNames={{ input: classes.input, label: classes.inputLabel }}
                            />
                        </SimpleGrid>

                        <Textarea
                            mt="md"
                            label="문의내용"
                            placeholder="문의하실 내용을 자유롭게 작성해주세요."
                            maxRows={10}
                            minRows={5}
                            autosize
                            name="message"
                            variant="filled"
                            {...form.getInputProps('message')}
                            classNames={{ input: classes.input, label: classes.inputLabel }}
                        />

                        <Checkbox
                            mt="md"
                            label="개인정보 수집 및 이용에 동의합니다."
                            {...form.getInputProps('terms', { type: 'checkbox' })}
                        />

                        <Group justify="center" mt="xl">
                            <Button type="submit" size="lg" color="deepGreen" className={classes.control}>
                                문의하기
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Container>
        </section>
    );
}
