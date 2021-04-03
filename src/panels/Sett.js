import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeaderBack, platform, IOS, Cell, PanelHeaderButton, PanelHeader, List, Group, Div, Button} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';

const osname = platform();

const Sett = ({ dark, light, go }) => (
	<Panel id="sett">
		<PanelHeader
			left={<PanelHeaderBack >
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderBack >}
		>
			Темы		
		</PanelHeader>
        <Group title="Смена темы">
		<List>
							<Cell onClick={dark}>
								Темная
							</Cell>	
                            <Cell onClick={light}>
								Стандартная
							</Cell>	
						</List>
                        </Group>
	</Panel>
);
Sett.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Sett;
