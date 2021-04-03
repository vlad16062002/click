import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeaderBack, PanelHeader, PanelHeaderButton, platform, IOS, Cell, List, Group, Div, Button} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';

const osname = platform();

function MyPetIs(props) {
    const isPetIn = props.pet;
    if (isPetIn === "0") {
        return <Cell before={<Icon24Bug className="CellIconCustom" />} asideContent={<b>Питомец не куплен</b>} onClick={props.go} data-to="pet">Питомец</Cell>;
    }
    else {
        return <Cell before={<Icon24Bug className="CellIconCustom" />} asideContent={props.user && <b>{`${props.user.pet_name}`}</b>} onClick={props.go} data-to="myPet">Питомец</Cell>;
    }  
}

function MyHouseIs(props) {
    const isHouseIn = props.house;
    if (isHouseIn === "0") {
        return <Cell before={<Icon24Home className="CellIconCustom" />} asideContent={<b>Дом не куплен</b>} onClick={props.go} data-to="house">Дом</Cell>;
    }
    else {
        return <Cell before={<Icon24Home className="CellIconCustom" />} asideContent={props.user && <b>{`${props.user.house_name}`}</b>} onClick={props.go} data-to="myHouse">Дом</Cell>;
    }  
}

const Imus = ({ go, userAcc, props }) => (
	<Panel id="imus">
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Имущество
		</PanelHeader>
        <List>
        <MyPetIs pet={userAcc && userAcc.pet} user={userAcc && userAcc} go={go}/>
			<MyHouseIs house={userAcc && userAcc.house} user={userAcc && userAcc} go={go}/>
            </List>
	</Panel>
);
Imus.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Imus;
