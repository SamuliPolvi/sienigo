import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Fishing extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      syotit: ds.cloneWithRows(['Madot (kastemato, lehtimato, lantamato ja eri maaperissä viihtyvät lierot).', 'Lierot', 'Toukat', 'Muita syöttejä voivat olla myös kärpäset, heinäsirkat, hyönteiset ja etanat.']),
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
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Kalastus </H1>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Kalastustapoja on montaa erilaista. Retkelle sopii parhaiten onkiminen ja virvelöinti. Ja onkimiseen tarvitaan syöttejä ja niitä voi löytää sekä maalta että vedestä.</Text>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Syötit:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.syotit}
            renderRow={this.renderRow}
           />
           
           <H3 style={{padding: 15, marginBottom: 10, color: '#fff', fontFamily: 'IndieFlower'}}>Yleisimmät kalat:</H3>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontWeight: 'bold', fontFamily: 'IndieFlower'}}>Hauki</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Kesällä ja syksyllä parhaat haukipaikat ovat kaislikoiden reunat, salmet ja vedenalaiset kivikot sekä kiviset kohdat. Yleensä hauki myös sijaitsee paikoissa missä on eri syvyyksiä ja paljon piilopaikkoja. Haukea kannattaa kalastaa sieltäpäin minne tuulee, koska sieltä hauki myös etsii ruokaa. Haukea kalastettaessa pitää muistaa käyttää peruketta, muuten hauenhampaat leikkaavat siiman poikki. 
            Hauen kalastukseen sopii isommat jigit, lusikkauistimet, jerkbaitit ja wobblerit. </Text>
           <Text style={{margin: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'IndieFlower'}}>Ahven</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Aktiivisimmin ahven tarttuu täkyyn aikaisin aamulla ja iltamyöhällä. Syksyllä paras syönti voi osua lähemmäs keskipäivää. Sameissa vesissä vuorokaudenajoilla ei ole yhtä paljoa eroa kuin kirkkaissa. Ahventa kannattaa etsiä sieltä missä vesi on lämpimämpää ja kasvillisuus on suojelevaa.
            Ahvenen kalastukseen sopii pienet jigit, spinnerit sekä lusikat. </Text>
           <Text style={{margin: 15, color: '#fff', fontWeight: 'bold', fontFamily: 'IndieFlower'}}>Kuha</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Kuha syö useimmiten iltahämärässä tai aikaisin aamulla, mutta syö myös päivälläkin. Paras aika kuhan kalastukseen on alkukesästä heinäkuun loppuun. Keväämmällä ja syksymmällä kuha viihtyy syvemmällä eikä ole yhtä aktiivinen kesään verrattuna.
Kesän kuluessa kuhat siirtyvät vähitellen syvemmälle ja varsinkin merellä kannattaa etsiä lahtien läheisyydestä ympäristöstään kohoavia epätasaisia kumpareita sisäseliltä ja salmien suista.
            Kuhaa voi kalastaa jigeillä lähellä pohjaa.</Text>
          </Content>
         </Row>   
      </Grid> 
    )
  }
}