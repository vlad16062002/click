import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, platform, IOS, Cell, List, FormLayout, Button, Div, Input, FormLayoutGroup } from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24LogoTwitter from '@vkontakte/icons/dist/24/logo_twitter';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';

const osname = platform();

const ChangeNickname = ({ go, props, onBackClick, handleNickChange, handleNickSubmit, userAcc }) => (
    <Panel id="changeNickname">
		<PanelHeader
			left={<PanelHeaderBack  onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderBack >}
		>
			Никнейм		
		</PanelHeader>
        <FormLayout>
            <FormLayoutGroup top="Новый ник">
                <Input type="text" defaultValue={userAcc && userAcc.nickname} onChange={handleNickChange} />
            </FormLayoutGroup>
        </FormLayout>
        <Div>
            <Button size="xl" level="primary" onClick={handleNickSubmit}>Сохранить</Button>
        </Div>
    </Panel>
);

ChangeNickname.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default ChangeNickname;
