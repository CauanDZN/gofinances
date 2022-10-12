import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";

export function Dashboard() {
    const data = [
        {
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$30.000.00",
            category: {
                name: "Vendas",
                icon: "dollar-sign"
            },
            date: "03/10/2022",
        },
        {
            type: 'negative',
            title: "Alimetação",
            amount: "R$10.00",
            category: {
                name: "Vendas",
                icon: "coffee"
            },
            date: "03/10/2022",
        },
        {
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$30.000.00",
            category: {
                name: "Vendas",
                icon: "dollar-sign"
            },
            date: "03/10/2022",
        },
        {
            type: 'negative',
            title: "Desenvolvimento de site",
            amount: "R$30.000.00",
            category: {
                name: "Vendas",
                icon: "dollar-sign"
            },
            date: "03/10/2022",
        },
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: "https://github.com/CauanDZN.png" }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Cauan</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                <HighlightCard title="Entradas" type="up" amount="R$ 2.000,00" lastTransaction="3 de Outubro de 2022" />
                <HighlightCard title="Saídas" type="down" amount="R$ 100,00" lastTransaction="3 de Outubro de 2022" />
                <HighlightCard title="Total" type="total" amount="R$ 1.900,00" lastTransaction="3 de Outubro de 2022" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 12
                    }}
                />

            </Transactions>

        </Container>
    )
}