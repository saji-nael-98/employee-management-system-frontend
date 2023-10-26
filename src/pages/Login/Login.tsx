import React from 'react'
import { Flex } from '@mantine/core';
import { SignInFormContainer } from '../../modules/auth/presentation';

const LoginPage = () => {

  return (
    <Flex h={'100%'} justify='center' align='center'>
      <SignInFormContainer />
    </Flex>
  )
}

export const Component = LoginPage;