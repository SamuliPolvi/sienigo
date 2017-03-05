import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Law extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      oikeudet: ds.cloneWithRows(['Liikkua jalan, hiihtäen ja pyöräillen luonnossa, kuten metsissä, luonnonniityillä ja vesistöissä', 'Ratsastaa', 'Oleskella ja yöpyä tilapäisesti alueilla, joilla liikkuminenkin on sallittua', 'Poimia luonnonmarjoja, sieniä ja rauhoittamattomia kasveja', 'Onkia ja pilkkiä', 'Veneillä, uida ja kulkea jäällä.']),
      eisaa: ds.cloneWithRows(['Haitata maanomistajan maankäyttöä',
      'Kulkea pihamailla, istutuksilla tai viljelyksessä olevilla pelloilla', 'Kaataa tai vahingoittaa kasvavia puita', 
      'Ottaa kuivunutta tai kaatunutta puuta', 'Ottaa sammalta tai jäkälää', 'Tehdä avotulta toisen maalle',
      'Häiritä kotirauhaa esimerkiksi leiriytymällä liian lähellä asumuksia tai meluamalla', 'Roskata ympäristöä', 'Ajaa moottoriajoneuvolla maastossa',
      'Häiritä tai vahingoittaa lintujen pesiä ja poikasia', 'Häiritä eläimiä', 'Kalastaa ja metsästää ilman asianomaisia lupia',
      'Päästää koiraa yleiselle uimarannalle, lasten leikkipaikaksi varatulle alueelle, kunnostetulle ladulle tai urheilukentälle', 'Pitää koiraa kytkemättömänä taajama-alueella, kuntopolulla tai toisen alueella',
      'Pitää koiraa kytkemättömänä 1.3. - 19.8. välisenä aikana edes omalla alueella.']),
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
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}>Jokamiehenoikeudet ja -velvollisuudet</H1>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Perinteiset jokamiehenoikeudet ja maamme runsaat metsät ja vesistöt antavat erinomaiset puitteet liikkua ja virkistäytyä luonnossa.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Jokamiehenoikeuksilla tarkoitetaan jokaisen oikeutta käyttää luontoa siitä riippumatta, kuka omistaa alueen tai on sen haltija. Luonnon käyttämiseen jokamiehenoikeuksien sallimissa rajoissa ei siis tarvita maanomistajan lupaa eikä oikeuksien käyttämisestä tarvitse maksaa mitään. Luonnonsuojelualueilla eivät kuitenkaan jokamiehenoikeudet ole sellaisenaan voimassa.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Jokamiehenoikeudella toimiminen ei kuitenkaan saa aiheuttaa vähäistä suurempaa haittaa maanomistajalle, maankäytölle tai luonnolle.</Text>
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Jokamiehenoikeudella saat:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.oikeudet}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Jokamiehenoikeudella et saa:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.eisaa}
            renderRow={this.renderRow}
           />

          </Content>
         </Row>   
      </Grid> 
    )
  }
}