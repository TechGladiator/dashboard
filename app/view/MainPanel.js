/*
 * File: app/view/MainPanel.js
 *
 * This file was generated by Sencha Architect version 4.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Dashboard.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    requires: [
        'Dashboard.view.MainPanelViewModel',
        'Dashboard.view.ProfitLoss',
        'Ext.grid.Panel',
        'Ext.tab.Tab',
        'Ext.tab.Bar'
    ],

    viewModel: {
        type: 'mainpanel'
    },
    defaults: {
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left',
                    flex: 0
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    flex: 1
                }
            },
            plugins: 'responsive'
        }
    },
    header: {
        layout: {
            align: 'stretchmax'
        },
        iconCls: 'exec-header-icon',
        title: {
            text: 'MyBiz',
            textAlign: 'center',
            flex: 0,
            minWidth: 160
        }
    },
    headerPosition: 'left',
    titleRotation: '0',
    activeTab: 1,
    tabBarHeaderPosition: 1,
    tabRotation: '0',

    items: [
        {
            xtype: 'profitloss'
        }
    ],
    tabBar: {
        xtype: 'tabbar',
        flex: 1
    }

});