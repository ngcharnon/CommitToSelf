import React from 'react';
import { Text, View,TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import moment from 'moment';

import Icon from 'react-native-vector-icons/FontAwesome';
// import Modal from 'react-native-modal';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import DatePicker from 'react-native-date-picker';

import HomeScreen from './HomeScreen';
import Task from  '../objects/Task';

class TaskScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle: (
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'left', marginLeft: 20}}>Adding Task...</Text>
                </View>
            ),
            headerRight:(
                
                    <TouchableOpacity onPress={() =>navigation.navigate("HomeScreen",{
                        newTask: new Task( navigation.getParam('title'), navigation.getParam('description'), navigation.getParam('dueDate'), navigation.getParam('amount') )})} >
                        <Icon name='check' size={30} />
                        {/* <Text>+</Text> */}
                    </TouchableOpacity>
                
            ),
        };
    };

    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            dueDate: new Date(),
            amount: '',
            submittedDate: new Date(),
        }
    }

    processTaskSubmission = () => { 
        console.log("Process task submission");
      
        let newTask = new Task(this.state.title, this.state.description, this.state.dueDate, this.state.amount)
        newTask.submittedDate = new Date();
        newTask.amount = parseInt(this.state.amount, 10);
        console.log(newTask.amount);
        
        // this.props.navigation.setParams({newTask: undefined});
        this.props.navigation.navigate('HomeScreen', {newTask: newTask});
    }


    processTitle(title){
        this.setState({title: title});
        this.props.navigation.setParams({title: title});
    }
    processDescription(description){
        this.setState({description: description});
        this.props.navigation.setParams({description: description});
    }
    processDueDate(dueDate){
        this.setState({dueDate: dueDate});
        this.props.navigation.setParams({dueDate: dueDate});
    }
    processAmount(amount){
        this.setState({amount: amount});
        this.props.navigation.setParams({amount: amount});
    }


    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{flexDirection: 'column', flex: 1, backgroundColor: 'white', justifyContent:'center'}}>

                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Title</Text>
                        <TextInput style={{width: 200}} placeholder="e.g. workout" 
                            onChangeText={ (title) => this.processTitle(title) } 
                            value={this.state.title}
                        />
                    </View>

                    <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Description</Text>
                        <TextInput style={{width: 200}} placeholder="e.g. cardio for 30 minutes" 
                            onChangeText={ (description) => this.processDescription(description) } 
                            value={this.state.description}

                        />
                    </View>
                    
                    <View style={{flexDirection: 'column', flex: 1, backgroundColor: 'white', justifyContent:'center'}}>
                        <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                            <Text style={{fontSize: 12, textAlign:'left'}}>To be done by: </Text>
                            {/* <DatePicker 
                                date={this.state.dueDate}    
                                onDateChange={dueDate => this.setState({dueDate})}
                            />  */}
                            <DatePicker 
                                date={this.state.dueDate}
                                onDateChange={(dueDate) => this.processDueDate(dueDate)}
                            />
                        </View>
                    </View> 

                    <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                        <Text style={{fontSize: 12 }}>Pledging amount: </Text>
                            <TextInput
                                style={{height: 40}}
                                keyboardType='numeric'
                                placeholder="How much do you value this task?"
                                onChangeText={(amount) => this.processAmount(amount) }
                                value={this.state.amount}
                            />
                    </View>

                   

                </View>       
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
})

export default TaskScreen;

