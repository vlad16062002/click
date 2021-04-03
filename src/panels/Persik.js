import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, platform, IOS, Cell, List, Group} from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24LogoTwitter from '@vkontakte/icons/dist/24/logo_twitter';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

const osname = platform();

const Persik = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Магазин
		</PanelHeader>
		<Group title="Разделы магазина" description="Разделы еще будут добавляться ">
		<List>
			<Cell before={<Icon24Home className="CellIconCustom" />} asideContent={<b><Icon24BrowserForward/></b>} onClick={props.go} data-to="house">
				Дома
			</Cell>	
			<Cell before={<Icon24LogoTwitter className="CellIconCustom" />} asideContent={<b><Icon24BrowserForward/></b>} onClick={props.go} data-to="pet">
				Питомцы
			</Cell>
			<Cell before={<Icon24Favorite className="CellIconCustom" />} asideContent={<b><Icon24BrowserForward/></b>} onClick={props.go} data-to="reit">
				Рейтинг
			</Cell>
			<Cell before={<Icon24Favorite className="CellIconCustom" />} asideContent={<b><Icon24BrowserForward/></b>} onClick={props.go} data-to="upgrades">
				Улучшения
			</Cell>
		</List>
		</Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
