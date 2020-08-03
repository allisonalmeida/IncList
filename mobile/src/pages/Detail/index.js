import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, TouchableOpacity, Image, Text, FlatList, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, gostaria de mais detalhes sobre o INC ${incident.number}`; 

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Titulo do INC: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity
          style={styles.detailsButton} 
          onPress={navigateBack}
        >
          <Feather name="arrow-left" size={28} color="#2a5093" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <View style={styles.sidetosideProperty}>  
              <Text style={[styles.sidetosidePropertyText, {marginTop: 0}]}>NÚMERO:</Text>
              <Text style={styles.sidetosidePropertyText}>USER:</Text>
            </View>

            <View style={styles.sidetosideValue}>
              <Text style={styles.sidetosideValueText}>{incident.number}</Text>
              <Text style={styles.sidetosideValueText}>{incident.name}</Text>
            </View>
            
            <Text style={styles.incidentProperty}>TÍTULO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>CLIENTE:</Text>
            <Text style={styles.incidentValue}>{incident.client}</Text>

            <Text style={styles.incidentProperty}>DATA:</Text>
            <Text style={styles.incidentValue}>{incident.date}</Text>
        </View>
        )}
      />

      <View style={styles.contactBox}>
        <Text style={styles.incTitle}>
          Para mais informações entre em contato com o usuario do incidente pelos canais abaixo: 
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
