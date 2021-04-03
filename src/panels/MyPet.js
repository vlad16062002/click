import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, PanelHeaderButton, Button, platform, PanelHeader, IOS, Group, Cell, List } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const osname = platform();

const MyPet = props => (
    <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="dop">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
    Питомец
    </PanelHeader>  
        <Group title="Питомец">
            <List>
                <Cell
                size="l"
                description="Вы можете отправить своего питомца в поход, а так же продать."
                bottomContent={
                    <div style={{ display: 'flex' }}>
                        <Button size="m" onClick={props.pohod}>В поход</Button>
                        <Button size="m" level="secondary" style={{ marginLeft: 8 }} onClick={() => props.sell(`${props.userAcc.pet}`)}>Продать</Button>
                    </div>
                } 
                >
                    {props.userAcc.pet_name}
                </Cell>
            </List>
        </Group>
    </Panel>
);

MyPet.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default MyPet;
