import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { useDispatch, useSelector } from "react-redux";
function Pdf() {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const styles = StyleSheet.create({
        page: {
          
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });
  return (
    <div>
   <Document>
    <Page size="A4" style={styles.page}>
      <div>
          <View style={styles.section}>
            <Text>Name</Text>
          </View>
          <View style={styles.section}>
            <Text>Email</Text>
          </View>
          <View style={styles.section}>
            <Text>Age</Text>
          </View>
          <View style={styles.section}>
            <Text>Phone Number</Text>
          </View>
          <View style={styles.section}>
            <Text>Role</Text>
          </View>
          <View style={styles.section}>
            <Text>Address</Text>
          </View>
          <View style={styles.section}>
            <Text>Location</Text>
          </View>
          <View style={styles.section}>
            <Text>Native Location</Text>
          </View>
      </div>
      {users.map(user=>(  <div key={user.id}>
      <View style={styles.section}>
            <Text>{user.name}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.email}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.age}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.phone}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.role}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.address}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.location}</Text>
          </View>
          <View style={styles.section}>
            <Text>{user.native}</Text>
          </View>
      </div>))}
    </Page>
    
  </Document>

  </div>
  )
}

export default Pdf
