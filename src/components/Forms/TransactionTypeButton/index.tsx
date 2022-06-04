import React from "react";
import { TouchableOpacityProps } from "react-native";

import { 
    Container,
    Icon,
    Title,
} from './styles'

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down'
}

export function TransactionTypeButton( {
    title, 
    type,
    ...res
} :Props) {
    return (
        <Container >
            <Icon 
            name={icons[type]}
            type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}