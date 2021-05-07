import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native'

import { Provider as PaperProvider } from 'react-native-paper'
import { Appbar, Avatar, Button, IconButton, Card, Chip, FAB, Headline, Title, Paragraph } from 'react-native-paper'

import PagerView from 'react-native-pager-view'

import moment from 'moment'


const appointments = [
  { 
    id: '1',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '2',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '3',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '4',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '5',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '6',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '7',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '8',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '9',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '10',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
  { 
    id: '11',
    date: Date.now(),
    duration: 120,
    client: {
      id: '1',
      name: 'John Doe',
      tests: ['physical', 'cog', 'bloodpressure'],
      specialNotes: 'asdfasdfasdf',
      icon: 'x/y/z.img',
      phone: '5062302795',
      address: '670 Reid Street, Fredericton NB, E3B 3V5'},
  },
]


const AppointmentCard = props => {
  const { id, date, duration, client } = props.appointment

  const startDateString = moment(date).format('h:mma')
  const endDateString = moment(date).add(duration, 'minutes').format('h:mma')

  const addressLines = client.address.split(', ')


  return (
    <Card style={styles.card}>
      <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%' }} >
          <Avatar.Image size={100} style={styles.avatar} source={{ uri:'http://placekitten.com/1000/1000' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton size={15} icon='phone' onPress={() => {}} />
            <IconButton size={15} icon='message' onPress={() => {}} />
            <IconButton size={15} icon='map' onPress={() => {}} />
          </View>
        </View>

        <View style={{ flexDirection: 'column', alignItems: 'flex-start', maxWidth: '40%' }} >
          <Headline>{client.name}</Headline>
          <Title>{startDateString} - {endDateString}</Title>
          {addressLines.map(line => <Paragraph>{line}</Paragraph>)}
        </View>

        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }} >
          {client.tests.map(test => {
            return (
              <Chip style={styles.testChip} >{test}</Chip>
            )
          })}
        </View>
      </Card.Content>
    </Card>
  )
}

const AppointmentList = props => {
  return (
    <ScrollView>
      {props.appointments.map(appointment => <AppointmentCard appointment={appointment}/>)}
    </ScrollView>
  )
}



export default function App() {

  const splitPoint = Math.floor(appointments.length/3)
  const paginatedAppointments = [appointments.slice(0, splitPoint), appointments.slice(splitPoint+1)]


  return (
      <SafeAreaView style={styles.container}>

        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title='Appointments' />
          <Appbar.Action icon='magnify' onPress={() => {}} />
          <Appbar.Action icon='calendar' onPress={() => {}} />
          <Appbar.Action icon='dots-vertical' onPress={() => {}} />
        </Appbar.Header>

        <PagerView style={styles.pagerView} initialPage={0}>
          {paginatedAppointments.map((appointmentList, index) => {
            return (
              <View key={index}>
                <Headline style={styles.dateHeadline}>
                  Monday, March 15th
                </Headline>
                <AppointmentList appointments={appointmentList}/>
              </View>
            )
          })}
          
        </PagerView>

        <FAB
          style={styles.fab}
          icon='plus'
        />

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  dateHeadline: {
    width: '100%',
    height: '5%',
    textAlign:  'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#eeeeee', // faint grey border, since `elevation` doesn't support shadows on only one side
  },

  avatar: {
    marginRight: 10,
  },
  testChip: {
    marginVertical: 2,
  },
  pagerView: {
    width: '100%',
    height: '95%',
    alignItems: 'center',

  },
  card: {
    width: '100%',
    marginBottom: 5,
  },
  header: {
    width: '100%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
})
