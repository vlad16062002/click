import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, PanelHeaderBack, HeaderButton, platform, Link, IOS, Cell, List, Group} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import Icon24Share from '@vkontakte/icons/dist/24/share';

const osname = platform();

const Dop = props => (
<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack  onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderBack >}
		>
			Дополнительно		
		</PanelHeader>
		<List>
            <Cell before={<Icon24Share className="CellIconCustom" />} onClick={props.go} data-to="Transfer">
                Переводы
            </Cell>	
            <Cell before={<Icon24Mention className="CellIconCustom"/>}>
                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/imperatorblood">О нас</a>
            </Cell>
            <Cell before={<Icon24Mention className="CellIconCustom"/>}>
                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/imperatorblood">Наша группа</a>
            </Cell>
        </List>
	</Panel>
);

Dop.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Dop;
