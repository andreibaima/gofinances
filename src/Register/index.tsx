import React from "react";
import { Button } from "../components/Forms/Button";
import { Input } from "../components/Forms/Input";
import { TransactionTypeButton } from "../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
} from "./styles";


export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder="None" />
                    <Input placeholder="Preço" />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                        />
                    </TransactionTypes>
                </Fields>

                <Button title="Enviar" />


            </Form>


        </Container>
    )
}