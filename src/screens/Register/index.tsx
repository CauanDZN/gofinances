import React, { useState } from "react";

import {
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';

import { InputForm } from "../../components/Form/InputForm";

import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O nome é obrigatório'),

    amount: Yup
        .number()
        .typeError('Informe um valor númerico')
        .positive('O valor não pode ser negativo')
})

type NavigationProps = {
    navigate: (screen: string) => void;
}

export function Register() {
    const [transactionType, setTransactionType] = useState("")
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const dataKey = "@gofinances:transactions"

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const navigation = useNavigation<NavigationProps>();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleTransactionTypeSelect(type: "positive" | "negative") {
        setTransactionType(type)
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    async function handleRegister(form: Partial<FormData>) {
        if (!transactionType)
            return Alert.alert('Selecione o tipo de transação!')

        if (category.key === 'category')
            return Alert.alert('Selecione a categoria!')

        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: transactionType,
            category: category.key,
            date: new Date()
        }

        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];
            const dataFormatted = [...currentData, newTransaction];

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType("");
            setCategory({ name: "Categoria", key: "category" });

            navigation.navigate("Listagem");


        } catch (error) {
            console.log(error)
            Alert.alert("Não foi possível salvar.")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors?.name && errors?.name.message}
                        />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors?.amount && errors?.amount.message}
                        />

                        <TransactionTypes>
                            <TransactionTypeButton
                                type="up"
                                title="Entrada"
                                onPress={() => handleTransactionTypeSelect("positive")}
                                isActive={transactionType === "positive"}
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Saída"
                                onPress={() => handleTransactionTypeSelect("negative")}
                                isActive={transactionType === "negative"}
                            />
                        </TransactionTypes>

                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />
                    </Fields>

                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}