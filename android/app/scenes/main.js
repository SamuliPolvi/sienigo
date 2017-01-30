import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import theme from '../../../Themes/main';
import Guide from './guide';
import MainGrid from '../containers/mainGrid';

export default class Main extends Component {
  render() {

    const ScreenHeight = Dimensions.get("window").height - 135;

    return (
            <Container theme={theme}> 
                <Image resizeMode='cover' source={{uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}>
                    <Header>
                    {this.props.index !== 0
                    ? <Button transparent onPress={this.props.toFrontPage}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    : '' }                
                        <Title>{this.props.title}</Title>
                    </Header>
                </Image>

                <Content style={{backgroundColor: '#616161'}}>
                    {this.props.index === 0 
                        ?
                         <MainGrid toGuidePage={this.props.toGuidePage}
                                    toAnimalsPage={this.props.toAnimalsPage}
                                    toForestPage={this.props.toForestPage}
                                    toLocationPage={this.props.toLocationPage} 
                          />
                        : <Text></Text> }
                </Content>

                <Image height={64} source={{uri: 'https://68.media.tumblr.com/af344b03b663f604be76c25c0070762e/tumblr_nog65y7IWY1urlch8o1_1280.png'}}>
                <Footer>
                    <FooterTab>
                        <Button transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-book' />
                            <Text> Opas </Text>
                        </Button>
                        <Button transparent onPress={this.props.toAnimalsPage}>
                            <Icon name='md-paw' />
                            <Text> Eläimet </Text>
                        </Button>  
                        <Button transparent onPress={this.props.toForestPage}>
                            <Icon name='ios-leaf' />
                            <Text> Kasvit </Text>
                        </Button>  
                        <Button transparent onPress={this.props.toLocationPage}>
                            <Icon name='md-pin' />
                            <Text> Opas </Text>
                        </Button>                                                                          
                    </FooterTab>
                </Footer>
                </Image>
            </Container>
            
    )
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};