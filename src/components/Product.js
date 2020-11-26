import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Product extends React.Component {
    render() {
      return (
        <Card
            image={{uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2456ce8d-7223-4e0a-83f6-c5559a228f0c/air-force-1-gtx-boot-boot-vtm6QP.jpg'}}>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                NIke Air Force 1 GTX Boot
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
            With crisp overlays, bold accents and the perfect amount of flash to let you shine, the Nike Air Force 1 GTX Boot brings OG hoops style into winter. The GORE-TEX lining, large lugs on the outsole and removable silicone ankle strap toughen up the icon while the padded, high-cut collar keeps the heritage b-ball comfort.


            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
      );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#222222'
    }
});

export default withNavigation(Product);
