/*
 * File: app/view/ProfitLoss.js
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

Ext.define('Dashboard.view.ProfitLoss', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.profitloss',

    requires: [
        'Dashboard.view.ProfitLossViewModel',
        'Dashboard.view.ProfitLossViewController',
        'Ext.view.Table',
        'Ext.grid.column.Column',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu'
    ],

    controller: 'profitloss',
    viewModel: {
        type: 'profitloss'
    },
    viewModel: 'profitloss',
    title: 'Profit and Loss',
    rowViewModel: 'profitloss',
    store: 'ProfitLosses',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'account',
            text: 'Account'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q1_2010',
            text: 'Q1 2010'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q2_2010',
            text: 'Q2 2010'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q3_2010',
            text: 'Q3 2010'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q4_2010',
            text: 'Q4 2010'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q1_2011',
            text: 'Q1 2011'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q2_2011',
            text: 'Q2 2011'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q3_2011',
            text: 'Q3 2011'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q4_2011',
            text: 'Q4 2011'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q1_2012',
            text: 'Q1 2012'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'q2_2012',
            text: 'Q2 2012'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'region',
            text: 'Region'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    reference: 'regionsButton',
                    text: 'Region',
                    textAlign: 'left',
                    menu: {
                        xtype: 'menu',
                        id: 'region-menu',
                        width: 200
                    }
                }
            ]
        }
    ]

});