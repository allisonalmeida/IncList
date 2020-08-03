import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 20,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
    marginTop: 12,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#41414D',
    lineHeight: 18,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },

  action: {
    backgroundColor: '#2a5093',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  sidetosideProperty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  sidetosideValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  sidetosidePropertyText: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 5,
  },

  sidetosideValueText: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
});


