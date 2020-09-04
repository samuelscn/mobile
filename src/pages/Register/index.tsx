import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Register() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <PageHeader
                    title="Que incrível o interesse em fazer parte da nossa plataforma."
                    description="O primeiro passo, é preencher esse formulário de inscrição."
                />
                <View style={styles.userContainer}>
                    <View style={styles.userData}>
                        <Text style={styles.titleUser}>Dados do Usuário</Text>

                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Sobrenome</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput type="email" style={styles.input} />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput type="password" style={styles.input} />

                        <Text style={styles.label}>Confirme a Senha</Text>
                        <TextInput style={styles.input} />
                        <View style={styles.footerContainer}>
                            <View style={styles.alertContainer}>
                                <Feather name="alert-octagon" size={24} color="#FFCB74" />
                                <Text style={styles.textAlert}>Importante!{'\n'}Preencha todos {'\n'}os dados</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Salvar Cadastro</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register;