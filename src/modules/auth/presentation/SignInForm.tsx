import { Paper, Stack, TextInput, Button, Title, Text } from '@mantine/core';
import React from 'react';
import { useForm, Controller } from 'react-hook-form'
import { IForm } from '../types';
import { useSignIn } from '../infrastructure';
import { useIsMutating } from '@tanstack/react-query';

type SignInFormProps = {
    formValuesHandler: (values: IForm) => void
}
const SignInFormContainer = () => {
    const [formValuesHandler] = useSignIn()
    return <SignInForm formValuesHandler={formValuesHandler} />
}
const SignInForm: React.FC<SignInFormProps> = ({ formValuesHandler }) => {
    const isMutating = useIsMutating({ mutationKey: ['sign-in'] })
    const { control, handleSubmit } = useForm<IForm>({
        defaultValues: {
            username: 'kminchelle',
            password: '0lelplR'
        }
    })
    return (
        <Paper shadow="xl" p="md" withBorder h={400} w={350} m={20} radius="md" bg="dark.6">
            <Text fw={700} mt='md'>Welcome to Materio! 👋🏻</Text>
            <Text size="sm" c="dimmed">
                Please sign-in to your account and start the adventure
            </Text>
            <Stack spacing='xs' h='100%' mt='md'>
                <Controller control={control} name='username' render={({ field }) => <TextInput
                    placeholder="Your username"
                    label="Username"
                    variant="filled"
                    {...field}
                />} />
                <Controller control={control} name='password' render={({ field }) => <TextInput
                    placeholder="Your password"
                    label="Password"
                    variant="filled"
                    type='password'
                    {...field}
                />} />
                <Button mt='md' onClick={handleSubmit(formValuesHandler)} loading={!!isMutating} uppercase>{!isMutating && "Sign in"}</Button>
            </Stack>
        </Paper>
    )
}

export { SignInFormContainer };

