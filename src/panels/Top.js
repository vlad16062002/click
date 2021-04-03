import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, PanelHeader, PanelHeaderButton, Button, platform, IOS, Group, Cell, List, Tabs, TabsItem, HorizontalScroll, Avatar } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const osname = platform();

function GetItemClicks(props) {
    return (
        <Cell asideContent={<h2 className="mr-2">{Number(props.pos) + 1}</h2>} before={
            <Avatar src="https://pp.userapi.com/c856028/v856028991/3fdb0/cCNJ8VT-WOM.jpg" size={80}/>} 
        description= {`${parseFloat(props.users.clicks).toFixed(3)} `} img src={require('../img/coin.png')} width={40} height={40} >
            <a href={"https://vk.com/id" +props.users.user_vk_id}> {`${props.users.first_name} ${props.users.last_name}`}</a></Cell>
    )
}

function GetItemReputation(props) {
    return (
        <Cell before={<h2 className="mr-2">{Number(props.pos) + 1}</h2>} 
        description={`${props.users.reputation} репутации`}>
        {`${props.users.first_name} ${props.users.last_name}`}</Cell>
    )
}

function SetCellClicks(props) {
    const cells = props.users.map((e, index) =>
        <GetItemClicks users={e} pos={index} />
    );
    return (<List>{cells}</List>);
}

function SetCellReputation(props) {
    const cells = props.users.map((e, index) =>
        <GetItemReputation users={e} pos={index} />
    );
    return (<List>{cells}</List>);
}

function TopTab(props) {
    const active = props.activeTab;
    if (active === 'click') {
        return (
            <Group title="Клики">
                <SetCellClicks users={props.usersTopClicks} />
            </Group>
        );
    } else if (active === 'rating') {
        return (
            <Group title="Топ по репутации">
                <SetCellReputation users={props.usersTopReputation} />
            </Group>
        )
    }
}

const Top = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Рейтинг
		</PanelHeader>
        <Tabs theme="header" type="buttons">
            <HorizontalScroll>
                <TabsItem
                    onClick={() => props.setTab('click')}
                    selected={props.activeTab === 'click'}
                >
                    Клики
              </TabsItem>
                <TabsItem
                    onClick={() => props.setTab('rating')}
                    selected={props.activeTab === 'rating'}
                >
                    Рейтинг
              </TabsItem>
            </HorizontalScroll>
        </Tabs>
        <TopTab activeTab={props.activeTab} usersTopClicks={props.usersTopClicks} usersTopReputation={props.usersTopReputation} />
    </Panel>
);

Top.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Top;


