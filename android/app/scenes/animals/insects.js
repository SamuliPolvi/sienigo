import React, { Component, PropTypes } from 'react';
import {H1, Content} from 'native-base';
import {Dimensions, Image} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import SearchBar from '../../components/searchbar';
import AnimalsList from '../../components/animalslist';



export default class Insects extends Component {
  render() {

    const ScreenHeight = Dimensions.get("window").height - 177;

    const animals = [
      {
        name: 'Hirvi',
        text: 'Yleiskuvaus: Suurin hirvieläin. Selvästi etupainoinen rakenne. Keskiselkä mustanruskea, kyljet vaaleamman ruskeat. Alaleuasta kaulaan ulottuu muodoltaan vaihteleva ihopoimu, “parta”, joka naarailla pienempi. Suuri pitkulainen pää, pitkä liikkuva kuono-osa, riippuva ylähuuli. Pitkät korvat. Häntä lyhyt, vain noin 10 cm. Pitkät raajat, alaosista vaaleat, usein lähes valkoiset. Uroksilla sarvet, jotka putoavat yleensä tammikuussa, jonka jälkeen kasvavat uudet valmistuen kiima-aikaan mennessä. Suurimmillaan sarvet ovat noin 10-vuotiaalla uroksella. Sarvet voivat olla kahta perustyyppiä: joko hanka- tai lapiosarvityyppiä, myös välimuodot ovat tavallisia. Suomessa hankasarvisuus selvästi yleisempää (Ruotsissa ja Venäjällä lapiosarvisuus). Hirvi on helppo erottaa muista hirvieläimistä suuren kokonsa perusteella.',
        url: 'http://www.luontoportti.com/suomi/images/20182.jpg'
      },
      {
        name: 'Karhu',
        text: 'Yleiskuvaus: Erittäin suuri, raskastekoinen nisäkäs, suurpeto (yksi neljästä suurpedostamme). Pitkä, tiheä turkki, väritys vaihtelee ruskeasta kellanruskeaan, kellanharmaaseen ja lähes mustaan. Pennuilla usein vaalea kaulus. Kallo koiramainen mutta paljon suurempi. Kuono pitkä, suippeneva, suuret matalat poskihampaat ja hyvin suuret kulmahampaat. Pyöreät korvat ja pieni häntä suurelta osin turkin peitossa. Kaula paksu ja lyhyt. Vahvat jalat, käpälissä suuret käyrät kynnet.',
        url: 'http://www.luontoportti.com/suomi/images/20183.jpg'
      },
      {
        name: 'Susi',
        text: 'Yleiskuvaus: Muistuttaa saksanpaimenkoiraa mutta suurempi. Selkäpuoli harmaahko, vatsa kellahtava–harmaanvalkea. Yleisväritys kuitenkin vaihtelee melkein mustasta melkein valkoiseen. Etujaloissa usein mustat juovat. Pitkä kuono, silmät vinossa asennossa pään sivuilla, korvat pyöreäpäiset. Häntä keskimittainen, suora (ei kaarru ylöspäin), tuuhea. Pitkät jalat, suuret käpälät.',
        url: 'http://www.luontoportti.com/suomi/images/20365.jpg'
      }
    ]

    return (
                    <Grid style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                      <SearchBar />
                        <Row>
                            <Content style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: ScreenHeight}}>
                            <H1 style={{margin: 10, color: '#40F49B', fontFamily: 'IndieFlower'}}> Hyönteiset </H1>
                              <AnimalsList animals={animals} />
                            </Content>
                        </Row>   
                    </Grid> 
    )
  }
}