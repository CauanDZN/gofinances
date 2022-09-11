import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

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
    HighlightCards
} from "./styles";

export function Dashboard(){
    return(
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
                <HighlightCard title="Entradas" type="up" amount="R$ 2.000,00" lastTransaction="3 de Outubro de 2022"/>
                <HighlightCard title="Saídas" type="down" amount="R$ 100,00" lastTransaction="3 de Outubro de 2022" />
                <HighlightCard title="Total" type="total" amount="R$ 1.900,00" lastTransaction="3 de Outubro de 2022" />
            </HighlightCards>
            
        </Container>
    )
}