import * as React from "react";
import {EmitterSubscription} from "react-native";

import {Button} from "../components/Button";
import {Text} from "../components/Text";
import {View} from "../components/View";
import Events from "../events/Events";
import {Styles} from "../style/Styles";
import {NativeBridge} from "../native/NativeBridge";


export default class CAExample extends React.Component<any, any> {
    private accept: EmitterSubscription;
    private reject: EmitterSubscription;

    constructor(props) {
        super(props);
    }

    public componentDidMount(): void {
        this.accept = NativeBridge.getNativeBridge().addListener(Events.USER_AUTH_ACCEPT, () => {
            this.changeView("results");
        });
        this.reject = NativeBridge.getNativeBridge().addListener(Events.USER_AUTH_REJECT, () => {
            this.changeView("splash");
        });
    }

    public render(): any {
        return <View style={[Styles.centered, Styles.fill]}>
            <Text>This Thing requests the following information:</Text>
            <Text>Your driving license</Text>
            <Text>History of renting cars</Text>
            <Button title="Share my data with the Thing" onPress={() => {
                NativeBridge.getNativeBridge().initSDK();
            }}/>
        </View>;
    }

    private changeView(view: String): void {
        this.accept.remove();
        this.reject.remove();
        this.props.navigation.navigate(view);
    }
}
