import React from 'react';
import {Text} from 'react-native';
import {Card, CardItem, Body, Item, Input, Button} from 'native-base';
//Form Component
const Form = ({onChange, error, hasError, onSubmit, buttonText}) => (
    <Card>
        <CardItem>
            <Text>
                Eg -: {'Draw a(n) <shape> with a(n) <measurement> of <amount> (and a(n) <measurement> of <amount>)'}
            </Text>
        </CardItem>
        <CardItem>
            <Item regular error={!!hasError}>
                <Input onChangeText={value => onChange(value)}
                       error={hasError}
                       placeholder={'please enter the query'}/>
            </Item>
        </CardItem>
        {error ? <CardItem> <Text style={{color: 'red'}}> {error ? error : ''} </Text> </CardItem> : <Text></Text>}
        <CardItem>
            <Body>
            <Button full onPress={onSubmit}>
                <Text style={{fontSize: 20, color: '#ffffff'}}>
                    {buttonText}
                </Text>
            </Button>
            </Body>
        </CardItem>
    </Card>
);

export default Form;