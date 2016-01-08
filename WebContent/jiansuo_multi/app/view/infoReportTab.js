/*
 * File: app/view/infoReportTab.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.infoReportTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.infoReportTab',

    requires: [
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.selection.CheckboxModel',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    title: '举报信箱-列表',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 421,
                    autoScroll: true,
                    layout: 'fit',
                    bodyPadding: 10,
                    title: 'My Form',
                    jsonSubmit: true,
                    items: [
                        {
                            xtype: 'gridpanel',
                            height: 241,
                            collapsible: false,
                            title: '举报信箱',
                            store: 'InfoReportStore',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reportTitle',
                                    text: '来信主题'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reporterName',
                                    text: '来信人'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reportClass',
                                    text: '类别'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reportTime',
                                    text: '来信时间'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'reportedTime',
                                    text: '问题发生时间'
                                }
                            ],
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            }),
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    frame: false,
                                    enableOverflow: true,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            width: 211,
                                            fieldLabel: '按来信主题查询'
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 176,
                                            fieldLabel: '按来信人查询'
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 176,
                                            fieldLabel: '按类别查询'
                                        },
                                        {
                                            xtype: 'datefield',
                                            width: 204,
                                            fieldLabel: '按时间查询'
                                        },
                                        {
                                            xtype: 'textfield',
                                            width: 176,
                                            fieldLabel: '按关键词查询'
                                        },
                                        {
                                            xtype: 'button',
                                            text: '查询来信'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            text: '查看详细'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    height: 36,
                                    width: 360,
                                    displayInfo: true,
                                    store: 'InfoReportStore'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});