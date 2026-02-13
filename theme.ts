"use client";

import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

const deepGreen: MantineColorsTuple = [
    '#f0fdf4', // 0
    '#dcfce7', // 1
    '#bbf7d0', // 2
    '#86efac', // 3
    '#4ade80', // 4
    '#22c55e', // 5
    '#064E3B', // 6 - Primary (User specified)
    '#064e3b', // 7 (Same for hover consistency or slightly darker)
    '#022c22', // 8
    '#022c22', // 9
];

export const theme = createTheme({
    primaryColor: 'deepGreen',
    primaryShade: 6, // Focusing on #064E3B
    colors: {
        deepGreen,
    },
    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',

    components: {
        Button: {
            defaultProps: {
                radius: 'md',
                color: 'deepGreen',
            },
        },
        Title: {
            styles: {
                root: {
                    letterSpacing: '-0.02em',
                },
            },
        },
        Text: {
            styles: {
                root: {
                    lineHeight: '1.6',
                },
            },
        },
        Card: {
            defaultProps: {
                shadow: 'sm',
                withBorder: true,
                radius: 'md',
            },
        },
        Paper: {
            defaultProps: {
                shadow: 'sm',
                withBorder: true,
                radius: 'md',
            }
        },
        TextInput: {
            styles: (theme: any) => ({
                input: {
                    '&:focus': {
                        borderColor: theme.colors.deepGreen[6],
                    },
                },
            }),
        },
        Select: {
            styles: (theme: any) => ({
                input: {
                    '&:focus': {
                        borderColor: theme.colors.deepGreen[6],
                    },
                },
            }),
        },
        Textarea: {
            styles: (theme: any) => ({
                input: {
                    '&:focus': {
                        borderColor: theme.colors.deepGreen[6],
                    },
                },
            }),
        },
    },
});
