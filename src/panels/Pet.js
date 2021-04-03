import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, Button, PanelHeader, platform, PanelHeaderButton, IOS, Group, Cell, List, FormStatus, Div} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';

const osname = platform();

const Pet = props => (
	<Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Питомцы
		</PanelHeader>
		<Div>
		<FormStatus title="Обратите внимание" state="error">
        Питомцев можно отправлять в поход,но раз в час. 
        </FormStatus> 
		</Div>
        <Group title="Покупка питомца">
            <List>
                <Cell description="1000 коинов" asideContent={<Button onClick={() => props.buy(1)}>Купить</Button>} >Улитка</Cell>
                <Cell description="25000 коинов" asideContent={<Button onClick={() => props.buy(2)}>Купить</Button>} >Лягушка</Cell>
                <Cell description="95000 коинов" asideContent={<Button onClick={() => props.buy(3)}>Купить</Button>} >Заяц</Cell>
                <Cell description="150000 коинов" asideContent={<Button onClick={() => props.buy(4)}>Купить</Button>} >Лиса</Cell>
                <Cell description="250000 коинов" asideContent={<Button onClick={() => props.buy(5)}>Купить</Button>} >Панда</Cell>
            </List>
        </Group>
	</Panel>
);

Pet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Pet;
