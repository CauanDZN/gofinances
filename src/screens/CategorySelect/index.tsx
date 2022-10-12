import React from 'react';
import { Container } from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: string;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect() {
    return (
        <Container>

        </Container>
    );
}