import React from "react";

import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from "./styles";

export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>R$ 2.000,00</Amount>
                <LastTransaction>Última entrada: Dia 1 de Outubro</LastTransaction>
            </Footer>
        </Container>
    )
}