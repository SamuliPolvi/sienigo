import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const { width, height } = Dimensions.get('window');

export default class Camping extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      leiriydy: ds.cloneWithRows(['Leiriydy telttailuun osoitetulla paikalla, mutta yhtäjaksoisesti korkeintaan vuorokauden tai kaksi. Jos telttapaikkoja ei ole, valitse mieluummin aikaisemmin käytössä ollut leiriytymispaikka kuin aivan uusi. Luonnonsuojelualueilla telttailu voi olla sallittu vain sille osoitetuilla paikoilla.',
      'Vältä leiriytymistä jäkäläkankaille ja muille herkästi kuluville alueille.', 
      'Älä häiritse telttapaikan tai autiotuvan muita käyttäjiä, hekin haluavat käyttää kohteen palveluja ja samalla nauttia luonnon rauhasta. Häiriöiden vähentämiseksi isot ryhmät voivat joko jakautua pienemmiksi ryhmiksi tai valita sellaisen yöpymispaikan, jossa ei ole muita yöpyjiä.', 
      'Pidä periaatteena, että leiriytymisestäsi ei jää jälkeäkään. Siivoa aina roskat ja muut jäljet pois ennen kuin jätät leiripaikan.']),
      teltta: ds.cloneWithRows(['Kuiva ja tasainen maaperä', 'Tuulensuoja', 'Vettä', 'Polttopuuta'])
    };
  }

  renderRow(data) {
    return (
      <Text style={{color: '#fff', fontFamily: 'IndieFlower'}}>{`\u2022 ${data}`}</Text>
    );
  }


  render() {

    const ScreenHeight = Dimensions.get("window").height - 100;

    return (
      <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Row style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Leiriytyminen</H1>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>
             Kaikenlaiseen eräkäyntiin kuuluu olennaisena osana yöpyminen maastossa. Monista tekijöistä riipuu, millainen yöpymistapa valitaan. Yksinkertaisimmillaan yöpyminen voi olla pressunpalaan kääriytymistä lämpöisenä kesäyönä,
             toisena äärimmäisyytenä on sitten taidokkaan talviyösuojan rakentelu helmikuisena pakkasyönä.
           </Text>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Teltan paikka ja pystytys</H3>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>
             Leiripaikan valintaan kannattaa kiinnittää huomiota jo eräretkeä suunniteltaessa. Kartalta pystyy melko hyvin päättelemään, missä yön viettäminen saattaisi olla mukavaa.
             Hyvällä leiripaikalla on mm. seuraavia ominaisuuksia:
           </Text>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.leiriydy}
            renderRow={this.renderRow}
           />
          <Image resizeMode='contain'  style={{height: height, width: width}} source={require('../../src/main/assets/images/teltta.jpg')} />
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Leiriydy ympäristöä ajatellen:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.leiriydy}
            renderRow={this.renderRow}
           />
          </Content>
         </Row>   
      </Grid> 
    )
  }
}