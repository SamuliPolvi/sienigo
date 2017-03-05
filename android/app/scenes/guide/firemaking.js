import React, { Component, PropTypes } from 'react';
import {Image, Dimensions, ListView} from 'react-native';
import {Spinner, Container, Header, Title, H1, Content,H2, H3,Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';



export default class Firemaking extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      tahdet: ds.cloneWithRows(['Palavaa ainetta (puuta, sytykettä)', 'Happea', 'Tarpeeksi korkea lämpötila']),
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
           <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Tulenteko </H1>
           <H3 style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Tulenteossa on hyvä muistaa kolme tähteä:</H3>
           <ListView
            style={{marginLeft: 15}}
            dataSource={this.state.tahdet}
            renderRow={this.renderRow}
           />
           <H3 style={{paddingBottom: 10, margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Sytykkeet</H3>
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Kun nuotiota tehdään tarvitaan sytykkeitä. Sytykkeet ovat helposti syttyviä materiaaleja. Niiden avulla sytytetään nuotion keskikokoiset puut jotka sen jälkeen sytyttää nuotion isot puut.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Sytykkeitä ovat esimerkiksi: </Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Tuohet, kuivat kuusen alaoksat, pitkät ohuet lastut (veistetty polttopuusta), kuivat heinät sekä kaislat</Text>
           
           <H3 style={{padding: 15, marginBottom: 10, color: '#fff', fontFamily: 'IndieFlower'}}>Sytytystavat</H3>
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Tulen voi sytyttää yhdistämällä kaksi tulta eli käyttämällä esimerkiksi palavaa kiehistä tai soihtua tulen levittämiseksi myös sytytettävään nuotioon.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Kolmas tapa on aikaansaada tuli kipinän avulla esimerkiksi tulusraudasta.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Neljäs keino on johtaa sähkövirtaa esimerkiksi laattaparistosta teräsvillaan, jolloin teräsvilla alkaa hehkua ja sytyttää palavan materiaalin.</Text>
           <Text style={{margin: 15, color: '#fff', fontFamily: 'IndieFlower'}}>Tulenteko on sitä helpompaa, mitä pienemmäksi puut on pilkottu ja mitä enemmän on käytettävissä sytykkeitä: puunsäleitä, kiehisiä, tervaksia tai esimerkiksi munakennosytytyspaloja.</Text>

           <H3 style={{padding: 15, marginBottom: 10, color: '#fff', fontFamily: 'IndieFlower'}}>Nuotio</H3>
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Nuotio kannattaa rakentaa tarkoituksenmukaisesti, välillä riittävät pienet ns. kynsitulet päiväretken taukopaikalla, suuremmalle joukolle ja tunnelmanluojaksi laaditaan näyttävä nuotio, ruokailuun ja yöpymiseen on erilaisia nuotiomalleja.</Text>
           <Text style={{margin: 15, marginTop: 0, color: '#fff', fontFamily: 'IndieFlower'}}>Kaikissa tapauksissa tulentekemisen lähtökohtana ovat pieneksi pilkotut sytykepuut ja riittävä määrä sytykkeitä. Hyvällä ennakkovalmistelulla itse tulen saa syttymään "yhdellä tulitikulla".</Text>
           
           <H3 style={{padding: 15, marginBottom: 10, color: '#fff', fontFamily: 'IndieFlower'}}>Nuotiotyypit</H3>
           <Text style={{margin: 15, marginTop: 0, color: '#fff',  fontWeight: 'bold'}}>Raappanan tuli: </Text>
           <Image resizeMode='contain'  style={{height: 200, flex: 1, marginLeft: 20, marginTop: 5, marginRight: 10,}} source={{uri: 'https://fi.scoutwiki.org/images/thumb/1/12/Campfire1_mgx.svg/150px-Campfire1_mgx.svg.png'}} />
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Raappanan tuli on keittonuotio, jossa halottu pölli toimii polttoaineena ja telineenä. Suurin osa lämmöstä suuntautuu nuotion päällä olevaan ruoanlaittovälineeseen, joten yöpymis- tai iltanuotioksi se ei oikein sovi.</Text>

           <Text style={{margin: 15, marginTop: 0, color: '#fff',  fontWeight: 'bold'}}>Ristikkonuotio: </Text>
           <Image resizeMode='contain'  style={{height: 200, flex: 1, marginLeft: 20, marginTop: 5, marginRight: 10,}} source={{uri: 'https://fi.scoutwiki.org/images/5/50/Ristikkonuotio_vp.jpg'}} />
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Ristikkonuotiossa puut ladotaan ristikkäin. Ensin tehdään isoista puista neliö ja niiden keskelle tuli, sitten korotetaan nuotiota kerros kerrokselta kuten hirsimökkiä.</Text>

           <Text style={{margin: 15, marginTop: 0, color: '#fff',  fontWeight: 'bold'}}>Kynnystuli: </Text>
           <Text style={{margin: 15, marginTop: -10, color: '#fff', fontFamily: 'IndieFlower'}}>Kynnystulessa nuotion toisella reunalla, yleensä tuulen suuntaisesti on paksumpi puu tai iso kivi. Sen viereen asetetaan sytykkeet ja siihen päälle tulipuut siten, että toinen pää on maassa, toinen "kynnyksen" päällä. Kynnys myös heijastaa jonkin verran lämpöä, eli paras istumapaikka on se, muissä nuotio jää itsesi ja kynnyksen väliin. Nuotiotavalla saavutetaan monia etuja, mm. selvästi parempi syttyvyys huonoilla puilla kuin ristikkonuotiolla, nuotio ei romahda kekonuotion tavoin ja koloseen voi lisätä sytykkeitä purkamatta koko nuotiota mikäli nuotio ei ensimmäisellä yrityksellä syttynytkään.</Text>

          </Content>
         </Row>   
      </Grid> 
    )
  }
}