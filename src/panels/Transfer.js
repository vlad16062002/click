import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderBack, FormStatus,PanelHeaderButton, platform, PanelHeader, IOS, Cell, List, FormLayout, Button, Div, Input, Footer, FormLayoutGroup } from '@vkontakte/vkui';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24LogoTwitter from '@vkontakte/icons/dist/24/logo_twitter';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon24Repost from '@vkontakte/icons/dist/24/repost';

const osname = platform();

const Transfer = ({ go, props, handleTransferChange, fetchedUser, handleTransferSubmit, userAcc, clicks, viv, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v_id1, v_id2, v_id3, v_id4, v_id5, v_id6, v_id7, v_id8, v_id9, v_id10, v_s1, v_s2, v_s3, v_s4, v_s5, v_s6, v_s7, v_s8, v_s9, v_s10, history, history1, history2, history3, history4, history5, history6, history7, history8, history9, history10, h_id1, h_id2, h_id3, h_id4, h_id5, h_id6, h_id7, h_id8, h_id9, h_id10, h_s1, h_s2, h_s3, h_s4, h_s5, h_s6, h_s7, h_s8, h_s9, h_s10 }) => (
    <Panel id="Transfer">
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderBack >}
        >
            Переводы
		</PanelHeader>
        <Div> 
        <FormStatus title="Обратите внимание" state="error">
        Для перевода нужно вводить ID ВКонтакте. 
        </FormStatus> 
        </Div> 
        <List>
        <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{clicks}</b>}>
                 Баланс:
            </Cell>
            </List>
        <FormLayout>
        
            <FormLayoutGroup top="Введите ID">
                <Input type="text" type="number" name="toId" defaultValue="" onChange={handleTransferChange} />
            </FormLayoutGroup>
            <FormLayoutGroup top="Введите кол-во">
                <Input type="text" type="number" name="transferCoins" defaultValue="1" onChange={handleTransferChange} />
            </FormLayoutGroup>
        </FormLayout>
        <Div>
            <Button size="xl" level="primary" onClick={handleTransferSubmit}>Перевести</Button>
        </Div>

        <FormStatus title="История переводов">
        </FormStatus> 

        <List>
            <Cell before={<Icon24Add className="CellIconCustom" />} asideContent={<b>{history}</b>}>
                 Пополнения:
            </Cell>








            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history10}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id10}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s10}</b>}>
                 Сумма:
            </Cell>
            </Cell>



            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history9}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id9}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s9}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history8}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id8}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s8}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history7}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id7}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s7}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history6}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id6}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s6}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history5}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id5}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s5}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history4}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id4}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s4}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history3}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id3}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s3}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history2}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id2}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s2}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{history1}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{h_id1}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{h_s1}</b>}>
                 Сумма:
            </Cell>
            </Cell>

            <Footer>Больше пополнений  не найдено. </Footer>

            
            
        </List>

        <List>
            <Cell before={<Icon24Repost className="CellIconCustom" />} asideContent={<b>{viv}</b>}>
                 Выводы:
            </Cell>





            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v10}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id10}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s10}</b>}>
                 Сумма:
            </Cell>
            </Cell>



            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v9}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id9}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s9}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v8}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id8}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s8}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v7}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id7}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s7}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v6}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id6}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s6}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v5}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id5}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s5}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v4}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id4}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s4}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v3}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id3}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s3}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v2}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id2}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s2}</b>}>
                 Сумма:
            </Cell>
            </Cell>


            <Cell before={<Icon24MoreVertical className="CellIconCustom" />} >
            <Cell before={<Icon24Play className="CellIconCustom" />} asideContent={<b>{v1}</b>}>
                 ФИ:
            </Cell>
            <Cell before={<Icon24User className="CellIconCustom" />} asideContent={<b>{v_id1}</b>}>
                 ID:
            </Cell>
            <Cell before={<Icon24MoneyTransfer className="CellIconCustom" />} asideContent={<b>{v_s1}</b>}>
                 Сумма:
            </Cell>
            </Cell>
            




            <Footer>Больше выводов не найдено. </Footer>
            </List>
        

        

    </Panel>
);

Transfer.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};



export default Transfer;
