import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Firstaid extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      firstaid: ds.cloneWithRows(['Potilaalta on katkennut iso valtimo, josta veri suihkuaa', 'Hengitys on lakannut', 'Sydämen toiminta on pysähtynyt', 'Potilaalla on vakava shokki', 'Potilas on ottanut myrkkyä']),
      muodot: ds.cloneWithRows(['Painelu-puhalluselvytys eli PPE', 'Verenvuodon tyrehdyttäminen', 'Sokkipotilaan ensiapu', 'Tajuttoman kylkiasentoon kääntäminen', 'Hengitysteiden avaaminen']),
      ppe: ds.cloneWithRows(['Jos henkilö menee elottomaksi, tarkista, onko hän herätettävissä.', 'Jos ei, tee hätäilmoitus numeroon 112 ja huuda apua.', 'Avaa hengitystiet kohottamalla leuan kärkeä ylöspäin ja tarkista hengitys esimerkiksi kämmenselällä. Jos henkilön hengitys ei ole normaalia, aloita elvytys.', 'Aloita paineluelvytys: painele rintalastaa 30 kertaa', 'Hengitysteiden avaaminen', 'Aloita puhalluselvytys: puhalla ilmaa potilaan keuhkoihin suun kautta kaksi kertaa', 'Toista vaiheet 4. ja 5. niin kauan, kunnes hoitohenkilökunta saapuu, potilaan hengitys palautuu normaaliksi tai et jaksa enää elvyttää.']),
      verenvuoto: ds.cloneWithRows(['Tyrehdytä verenvuoto painamalla sormin tai kämmenellä suoraan vuotokohtaan. Voit myös pyytää loukkaantunutta painamaan itse vuotokohtaa.', 'Auta loukkaantunut tarvittaessa istumaan tai makuulle', 'Sido vuotokohtaan paineside joko käyttäen sidetarvikkeita tai muita saatavilla olevia välineitä, esimerkiksi huivia.', 'Soita hätänumeroon 112, jos arvioit tilanteen sitä vaativan.']),
      shokki: ds.cloneWithRows(['Aseta autettava lepoon, hänelle hyvään asentoon.', 'Soita hätänumeroon 112.', 'Suojaa kylmältä esimerkiksi huovalla tai takilla ja eristä kylmästä alustasta.', 'Rauhoita.', 'Älä tarjoa syötävää tai juotavaa.', 'Seuraa hengitystä ja verenkiertoa.', 'Anna tarvittaessa muu oireenmukainen ensiapu.']),
      tajuton: ds.cloneWithRows([' Jos henkilö menettää tajuntansa selvitä saatko hänet hereille puhuttelemalla ja ravistelemalla olkapäistä.', ' Jos henkilö ei herää, soita hätänumeroon 112 ja aseta puhelin kaiutintoiminnolle.', 'Aseta henkilö selälleen ja selvitä hengittääkö hän normaalisti', 'Jos autettava hengittää normaalisti, käännä hänet kylkiasentoon hengityksen turvaamiseksi.', 'Huolehdi että hengitystie on avoin ja seuraa että hengitys on normaalia. Tarkkaile autettavaa kunnes ensihoitopalvelu ottaa vastuun hänestä.']),
      hengitys: ds.cloneWithRows(['Ojenna autettavan pää leuan kärjestä nostamalla ja toisella kädellä otsasta painamalla.', 'Samalla katso, kuuntele ja tunnustele hengitystä.', 'Liikkuuko rintakehä? Kuuluuko hengityksen ääni? Tuntuuko ilman virtaus poskellasi?', 'Arvioi onko hengitys normaalia, epänormaalia tai se puuttuu.'])
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
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Ensiapu </H1>
           <H3 style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Ensiavun annossa on tärkeätä varmuus ja nopeus. Tilanteita joissa ei saa aikailla:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.firstaid}
            renderRow={this.renderRow}
           />
           <H3 style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Ensiavun muodot:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.muodot}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#e53935', fontFamily: 'IndieFlower'}}>Painelu-puhalluselvytys</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.ppe}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#e53935', fontFamily: 'IndieFlower'}}>Verenvuoto</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.verenvuoto}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#e53935', fontFamily: 'IndieFlower'}}>Sokkipotilaan ensiapu</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.shokki}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#e53935', fontFamily: 'IndieFlower'}}>Tajuttoman kylkiasentoon kääntäminen</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.tajuton}
            renderRow={this.renderRow}
           />
           <H3 style={{padding: 15, color: '#e53935', fontFamily: 'IndieFlower'}}>Hengitysteiden avaaminen</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.hengitys}
            renderRow={this.renderRow}
           />
          </Content>
         </Row>   
      </Grid> 
    )
  }
}