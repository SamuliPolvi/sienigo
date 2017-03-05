import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Travelling extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      perusteet: ds.cloneWithRows(['Kartta', 'Karttamerkit',
      'Kompassi ja sen käyttö']),
      varoen: ds.cloneWithRows(['Älä pelästytä laiduneläimiä', 'Älä riko aitoja, kivimuureja tai ojanpientareita',
      'Sulje portti kuljettuasi siitä', 'Älä kulje nuoren taimikon läpi', 'Kunnioita kiellettyjä alueita', 'Käyttäydy rauhallisesti kohdatessasi riistaeläin',
      'Liiku varoen maaston aroilla alueilla, ota huomioon kasvit ja eläimet', 'Keväällä lintujen pesimäaikaan noudata erityistä varovaisuutta']),
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
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Maastossa liikkuminen</H1>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Liiku luonnossa varoen:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.varoen}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Roskaaminen</H3>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Roskat eivät kuulu luontoon: ne tekevät ympäristöstä epämiellyttävän ja jopa turvattoman näköisen.
           Metalliset, muoviset ja lasiset roskat eivät myöskään hajoa luonnossa, joten maahan heitettynä ne säilyvät siellä lähes ikuisesti. Etenkin lasinsirpaleet voivat olla vaaraksi myös paljain jaloin kulkeville ihmisille, koirille, kissoille ja luonnon eläimille.
           </Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontWeight: 'bold', fontFamily: 'IndieFlower'}}>Olet vastuussa luonnosta!</Text>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Suunnistus</H3>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Retkeilijälle on välttämätöntä osata liikkua tuntemattomassa maastossa. Sen vuoksi hyvä suunnistustaito on retkeilijälle tärkeä.</Text>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Suunnistuksen perusteet:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.perusteet}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Kartta</H3>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Suunnistajan tärkein apuväli on kartta. Kartta on pienennetty kuva maastosta.
             Kartan mittakaava kertoo, paljonko pienennetty kuva kartta on maastosta, ts. paljonko jonkin etäisyys kartalla on pienempi kuin maastossa.
           </Text>
          </Content>
         </Row>   
      </Grid> 
    )
  }
}