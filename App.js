import React from 'react';
import {Form, Shape} from './src/components';
import {Container, Text, Content, Header, Body, Button} from 'native-base';
import {findShape, shapes} from './src/helpers/shapes';
import {Row, Grid} from "react-native-easy-grid";

/** Main Class  */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            shape: '',
            sizes: [],
            values: [],
            hasError: '',
            error: ''
        };
    }

    /** Update the query value */
    handleQueryChange = (value) => {
        this.setState({query: value})
    };

    /** Get Shape Data and clear the state */
    handleOnSubmit = async () => {
        if (!this.state.query) {
            this.setState({
                hasError: 'error',
                error: 'Query field is required.'
            });
            return;
        }
        await this.clear();
        await this.getShape();
    };

    /** Clear old state */
    clear = () => {
        this.setState({
            shape: null,
            sizes: [],
        });
    };

    /** Get and set the shape data to state */
    getShape = () => {
        let shape = findShape(this.state.query);
        if (!shape[0] || !shapes.hasOwnProperty(shape[0])) {
            this.setState({
                hasError: 'error',
                error: 'Shape not found!'
            });
        }

        if (shape[0]) {
            this.setState({
                shape: shape[0],
                sizes: shape[1],
            });
        }
    };

    /** Canvas visibility  */
    checkCanvas = () => {
        if (this.state.shape && typeof this.state.sizes === 'object') {
            return true;
        }
        return false;
    };


    render() {
        return (
            <Container>
                <Content contentContainerStyle={{flexGrow: 1}}>
                    <Header>
                        <Body style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontSize: 30, color: '#ffffff'}}>Shapes</Text>
                        </Body>
                    </Header>
                    <Grid>
                        <Row size={20}>
                            <Form onChange={this.handleQueryChange} error={this.state.error}
                                  hasError={this.state.hasError}
                                  onSubmit={this.handleOnSubmit}/>
                        </Row>
                        <Row size={80}>
                            {this.checkCanvas() ?
                                <Shape shape={this.state.shape}
                                       sizes={this.state.sizes}/> :
                                <Text/>}
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
