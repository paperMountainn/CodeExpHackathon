import React from 'react'
import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';


function QueueCard(){
    return (
        <ScrollView style={{ backgroundColor: "gold" }}>
             <SafeAreaView>
        
                <Card style={styles.card}>
                    <Card.Content style={styles.cardcontent}>
                        <Title style={styles.titleText} >Queue Number</Title>
                        <Title style={styles.titleText} >8950</Title>
                    <Paragraph >Your estimated waiting time is 15 mins.</Paragraph>
                </Card.Content>
                
                </Card>
            </SafeAreaView>

            <Text style={styles.baseText}> Now serving ... </Text>

            <Text style={styles.baseText}> Number of people in front of you: 3</Text>
  
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // group of styles to the text element

    baseText: {
        // fontFamily: "SofiaPro",
        marginLeft: 30,
        marginTop: 15,
        fontSize: 15,
      },
      titleText: {
          fontSize: 20,
          marginTop: 30,
        fontWeight: "bold",
        // fontFamily: "SofiaPro",
        
    },
    
    cardcontent: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    }, 
    card: {
        marginTop: 30,
        marginHorizontal: 30,
        flex: 1,

    }
});

export default QueueCard;