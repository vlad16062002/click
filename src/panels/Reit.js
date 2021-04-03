import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, platform, IOS, Cell, List, FormLayout, PanelHeaderButton, Button, Div, Input, FormLayoutGroup} from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24LogoTwitter from '@vkontakte/icons/dist/24/logo_twitter';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

const osname = platform();

const Reit = ({ add2, clicks, props, reputation, handleReputationChange, go, handleReputationSubmit, calcRep}) => (
	<Panel id="reit">
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to="dop">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Рейтинг
		</PanelHeader>
        <List>
            <Cell before={<Icon24Coins className="CellIconCustom" />} asideContent={<b>{clicks}</b>}>
                Баланс:
            </Cell>
            <Cell before={<Icon24Favorite className="CellIconCustom" />} asideContent={<b>{reputation}</b>}>
                Рейтинг:
            </Cell>
        </List>
        <FormLayout>
            <FormLayoutGroup top="Количество">
                <Input type="text" type="number" defaultValue={reputation} onChange={handleReputationChange} />
            </FormLayoutGroup>
        </FormLayout>
        <Div>Стоимость: {calcRep} коинов</Div>
        <Div>
            <Button size="xl" level="primary" onClick={handleReputationSubmit}>Купить рейтинг</Button>
        </Div>
	</Panel>
);

Reit.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Reit;
