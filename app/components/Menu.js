'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, TouchableOpacity, View
} from 'react-native'

import Text from './form/Text'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from './../resources/styles/colors';

let SideMenuWidth = 250
class Menu extends Component {

    render() {
        return (
            <View style={[styles.sideMenu, this.props.style || {}]}>
                <Text type='h1White' style={[ styles.sideMenuTitle, this.props.titleStyle || {} ]}>Menu</Text>
                <View style={{ width: 170 }}>
                    <TouchableOpacity onPress={ this.onPress.bind(this, 'Index' )} style={[ styles.menu, { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 30} ]}>
                        <Icon name='home' color={colors.txtWhite} size={24} />
                        <Text style={styles.menuText} type='h5White'>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.onPress.bind(this, 'Profile' )} style={ styles.menu }>
                        <Icon name='user-o' color={colors.txtWhite} size={24} />
                        <Text style={styles.menuText} type='h5White'>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.onPress.bind(this, 'Saved' )} style={ styles.menu }>
                        <Icon name='floppy-o' color={colors.txtWhite} size={24} />
                        <Text style={styles.menuText} type='h5White'>Saved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.onPress.bind(this, 'Trips' )} style={ styles.menu }>
                        <Icon name='suitcase' color={colors.txtWhite} size={24} />
                        <Text style={styles.menuText} type='h5White'>Trips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.onPress.bind(this, 'Inbox' )} style={ styles.menu }>
                        <Icon name='inbox' color={colors.txtWhite} size={24} />
                        <Text style={styles.menuText} type='h5White'>Inbox</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    onPress(name) {
        //console.log('navigate menu',  this.props.navigation.navigate(name))
        this.props.navigation.navigate(name, { showNavbar: true })
    }
}

const styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: SideMenuWidth,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        marginLeft: 30
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20
    }
})

module.exports = Menu
