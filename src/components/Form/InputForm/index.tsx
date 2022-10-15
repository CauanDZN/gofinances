import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form'
import { TextInputProps } from 'react-native';
import { Container, Error } from './styles';

import { Input } from '../Input';

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error?: string;
}

export function InputForm({
    control,
    name,
    error,
    ...rest
}: Props) {

    const formControll = control as unknown as Control<FieldValues, any>

    return (
        <Container>
            <Controller
                control={formControll}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Error>{error}</Error>}
        </Container>
    );
}