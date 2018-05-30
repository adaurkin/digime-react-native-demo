import * as React from "react";
import {Button} from "../components/Button";
import {Image} from "../components/Image";
import {Text} from "../components/Text";
import {View} from "../components/View";
import {Styles} from "../style/Styles";

export class WelcomeView extends React.Component<any, any> {
    public render() {
        return <View style={[Styles.container, Styles.centered, Styles.fill]}>
            <View style={[Styles.tbar, Styles.centered, Styles.fill]}>
                <Image source={require("../../assets/images/poweredby_digi.me_logo.png")}/>
            </View>

            <View style={[Styles.centered, Styles.fill]}>
            <Text style={Styles.h1}>
                digi.me for Things
            </Text>
            <Button title="Connect to the thing!" onPress={() => {
                this.props.navigation.navigate("example");
            }}/>
        </View>
        </View>;
    }
}
