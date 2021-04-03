import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, List, Button, Group, Div, Avatar, Gallery, Cell, Alert } from '@vkontakte/vkui';

function MyPetIs(props) {
    const isPetIn = props.pet;
    if (isPetIn === "0") {
        return <Cell before={<Icon24Bug className="CellIconCustom" />} asideContent={<b>Питомец не куплен</b>} onClick={props.go} data-to="pet">Питомец</Cell>;
    }
    else {
        return <Cell before={<Icon24Bug className="CellIconCustom" />} asideContent={props.user && <b>{`${props.user.pet_name}`}</b>} onClick={props.go} data-to="myPet">Питомец</Cell>;
    }  
}

function MyHouseIs(props) {
    const isHouseIn = props.house;
    if (isHouseIn === "0") {
        return <Cell before={<Icon24Home className="CellIconCustom" />} asideContent={<b>Дом не куплен</b>} onClick={props.go} data-to="house">Дом</Cell>;
    }
    else {
        return <Cell before={<Icon24Home className="CellIconCustom" />} asideContent={props.user && <b>{`${props.user.house_name}`}</b>} onClick={props.go} data-to="myHouse">Дом</Cell>;
    }  
}

const Home = ({ id, add1, isBtnActive, onBlur1, userAcc, clicks, reputation, speed, aspeed, fetchedUser, go, priv, name, dark, light }) => (
    <Panel id="home">
        <Div>

            <div className="row">
                <div className="col-md-12">
                    <div className="text-center text-muted">
                        <div class="BalanceBox">
                        <center><small>БАЛАНС</small></center>
                        <div className="balanceBox">
                                <center><h1>{parseFloat(clicks).toFixed(3)} <img src={require('../img/coin.png')} width={40} height={40} /></h1></center>
                            </div>
                    <div className="kek"/>
                        <div className="balam">
                        <div className="balanceAmount">
                                <center>+ {parseFloat(speed).toFixed(3)}/клик</center>
                        </div>
                        <div className="balanceAmount">
                            <center>+ {parseFloat(aspeed).toFixed(3)}/сек</center>
                        </div>
                            </div>
                            </div>
                <div class="MenuButtons">
                                <div class="MenuButtons__button" onClick={go} data-to="top">
                                    <h4> </h4>
                                    <div className='MenuButtons__icon'>
                                        <Icon24Poll />
                                    </div>
                                    <p>Рейтинг</p>
                                    </div>
                                    <div class="MenuButtons__button" onClick={go} data-to="dop">
                                    <h4> </h4>
                                    <div className='MenuButtons__icon'>
                                        <Icon24Poll />
                                    </div>
                                    <p>Дополнительно</p>
                                    </div>
                                    <div class="MenuButtons__button" onClick={go} data-to="persik">
                                    <h4> </h4>
                                    <div className='MenuButtons__icon'>
                                        <Icon24Poll />
                                    </div>
                                    <p>Магазин</p>
                                </div>
                </div>

                <div className="container">
                    <Div >
                        <img onClick={add1} src={require('../img/click.png')} width={250} height={250} />
                    </Div>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
    </Panel>
);



Home.propTypes = {
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
export default Home;
