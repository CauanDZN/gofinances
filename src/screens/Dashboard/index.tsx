import React from "react";

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName
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
                </UserWrapper>
                

            </Header>

        </Container>
    )
}