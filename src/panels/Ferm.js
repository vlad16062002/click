import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, PanelHeader, PanelHeaderButton, Button, platform, PanelHeader, IOS, Group, Cell, List, FormStatus, Div} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import myIcon from '../img/123.svg';

const osname = platform();

const Ferm = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Фермы
		</PanelHeader>
		<Div>
		<FormStatus title="Обратите внимание" state="success">
        В будущем можно будет продавать фермы и забирать с них прибыль
        </FormStatus> 
		</Div>
        <Group title="Покупка дома">
            <List>
                <Cell className="android" before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description={<Button className="hef" onClick={() => props.buy(5)}>25.000 Coin</Button>} >GigаWаtt</Cell>
                <Cell before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description="50.000 коинов" asideContent={<Button onClick={() => props.buy(2)}>Купить</Button>} >DRАGОNMINT T1</Cell>
                <Cell before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description="165.000 коинов" asideContent={<Button onClick={() => props.buy(3)}>Купить</Button>} >FM2018-BT400</Cell>
                <Cell before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description="245.000 коинов" asideContent={<Button onClick={() => props.buy(4)}>Купить</Button>} >Gеnеsis Mining</Cell>
                <Cell before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description="555.000 коинов" asideContent={<Button onClick={() => props.buy(5)}>Купить</Button>} >GigаWаtt</Cell>
				<Cell before={
                                        <img
                                            style={{
                                                width: 65,
                                                height: 65,
                                                margin: 10,
                                            }}
                                            src="https://sun1-19.userapi.com/QhhRzdOpebnDYchICdoqdSUT60p4WTTYPD88mA/975IvaCqBkM.jpg"
                                        />
                                    } description="785.000 коинов" asideContent={<Button onClick={() => props.buy(6)}>Купить</Button>} >Космическое агенство</Cell>
            </List>
        </Group>
	</Panel>
);

Ferm.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Ferm;
