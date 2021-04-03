import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, PanelHeader, PanelHeaderButton, Button, platform, IOS, Group, Cell, List, Tabs, TabsItem, HorizontalScroll, FormStatus, Div} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const osname = platform();

function GetItem(props) {
	return (
		<Cell description={`${props.upgrade.price} коинов (+${props.upgrade.speed})`} asideContent={<Button onClick={() => props.buy(`${props.upgrade.type}`, `${props.upgrade.name}`)}>Купить <img src={require('../img/coin.png')} width={40} height={40} /></Button>} >{`${props.upgrade.name}`}</Cell>
	)
}

function SetCellClicks(props) {
	const upgrades = props.upgrades;
	const cells = Object.keys(upgrades).map((index) =>
    	<GetItem upgrade={upgrades[index]} buy={props.buyUpgrade}/>
  	);
	return (<List>{cells}</List>);
}

function SetCellAutomatic(props) {
	const upgrades = props.upgrades;
	const cells = Object.keys(upgrades).map((index) =>
    	<GetItem upgrade={upgrades[index]} buy={props.buyUpgrade}/>
  	);	
	return (<List>{cells}</List>);
}

function UpgradeTab(props) {
	const active = props.activeTab;
	if (active === 'click') {
		return (
			<Group title="Улучшения для кликов">
			<Div>
			<FormStatus title="Обратите внимание" state="error">
			Мышки увеличивают скорость майнинга при нажатии на большую кнопку.
			</FormStatus>
			</Div>
	            <SetCellClicks upgrades={props.upgradesOne} buyUpgrade={props.buyUpgrade} /> 
	        </Group>
        );
	} else if (active === 'automatic') {
		return (
			<Group title="Улучшения для автоматического майнинга">
					<Div>
			<FormStatus title="Обратите внимание" state="error">
			Видеокарты увеличивают скорость автоматического майнинга, но данная скорость не будет действовать если вы выйдите из игры.
			</FormStatus>
			</Div>
	            <SetCellAutomatic upgrades={props.upgradesTwo} buyUpgrade={props.buyUpgrade} />
	        </Group>
        )
	}
}

const Upgrade = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Улучшения
		</PanelHeader> 
		<Tabs theme="header" type="buttons">
	        <HorizontalScroll>
	          <TabsItem
	            onClick={() => props.setTab('click')}
	            selected={props.activeTab === 'click'}
	          >
	            Мышки
	          </TabsItem>
	          <TabsItem
	            onClick={() => props.setTab('automatic')}
	            selected={props.activeTab === 'automatic'}
	          >
	            Видеокарты
	          </TabsItem>
	        </HorizontalScroll>
        </Tabs>
		<UpgradeTab activeTab={props.activeTab} buyUpgrade={props.buyUpgrade} upgradesOne={props.upgradesOne} upgradesTwo={props.upgradesTwo} />
	</Panel>
);

Upgrade.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Upgrade;
