import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeaderBack, platform, PanelHeaderButton, IOS, Cell, List, PanelHeader, View, Group, Footer, Avatar, Button} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';

const osname = platform();

const Katalog = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Дополнительно
		</PanelHeader>
    <Group>
    <List>
        <Cell
          photo="https://pp.userapi.com/c856028/v856028991/3fdb0/cCNJ8VT-WOM.jpg"
          description="Тест"
          bottomContent={<Button component="a" href="https://vk.me/">Играть</Button >}
          before={<Avatar src="https://pp.userapi.com/c856028/v856028991/3fdb0/cCNJ8VT-WOM.jpg" size={80}/>}
          size="l"
        >
          Бот Арбуз
        </Cell>
        <Cell
          photo="https://pp.userapi.com/c846216/v846216737/211f30/PltrjzptlJ8.jpg"
          description="Тест1"
          bottomContent={<Button component="a" href="https://vk.me/">Играть</Button >}
          before={<Avatar src="https://pp.userapi.com/c846216/v846216737/211f30/PltrjzptlJ8.jpg" size={80}/>}
          size="l"
        >
          Good Birds
        </Cell>
        </List>
      </Group>
	</Panel>
);

Katalog.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Katalog;
