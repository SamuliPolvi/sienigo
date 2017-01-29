import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import theme from '../../../Themes/main';
import Guide from './guide';

export default class Main extends Component {
  render() {
      const headerImg = {
          width: 100,
          height: 100
      }
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

                <Content>
                  <H1>{this.props.title}</H1>
                  <Text />
                  <Text>Index: {this.props.index}</Text>
                  <Spinner />
                </Content>
                <Image resizeMode='cover' source={{uri: 'https://68.media.tumblr.com/af344b03b663f604be76c25c0070762e/tumblr_nog65y7IWY1urlch8o1_1280.png'}}>
                <Footer>
                    <FooterTab>
                        <Button transparent onPress={this.props.toGuidePage}>
                            <Icon name='ios-albums' />
                        </Button>
                        <Button transparent onPress={this.props.toAnimalsPage}>
                            <Icon name='ios-add' />
                        </Button>  
                        <Button transparent onPress={this.props.toForestPage}>
                            <Icon name='ios-flower' />
                        </Button>  
                        <Button transparent onPress={this.props.toLocationPage}>
                            <Icon name='ios-arrow-forward' />
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