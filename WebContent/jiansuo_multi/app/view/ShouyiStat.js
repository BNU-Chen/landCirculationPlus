/*
 * File: app/view/ShouyiStat.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('MyApp.view.ShouyiStat', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ShouyiStat',

    layout: {
        type: 'fit'
    },
    title: '收益分配溯源监测>>收益统计分析',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    height: 450,
                    width: 710,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            height: 324,
                            width: 532,
                            layout: {
                                type: 'absolute'
                            },
                            title: '农户收益分配统计',
                            dockedItems: [
                                {
                                    xtype: 'gridpanel',
                                    x: 0,
                                    y: 60,
                                    dock: 'bottom',
                                    height: 380,
                                    width: 690,
                                    title: '农户收益分配统计',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 63,
                                            dataIndex: 'string',
                                            text: '农户姓名'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 84,
                                            dataIndex: 'string',
                                            text: '拥有地块编号'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 71,
                                            dataIndex: 'number',
                                            text: '地票量（亩）'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 107,
                                            dataIndex: 'number',
                                            text: '所占该地票的百分比（%）'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 60,
                                            dataIndex: 'number',
                                            text: '收益（万）'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 135,
                                            dataIndex: 'number',
                                            text: '所占农户总收益的百分比（%）'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'button',
                                    x: 290,
                                    y: 20,
                                    text: '统计'
                                },
                                {
                                    xtype: 'textfield',
                                    x: 10,
                                    y: 20,
                                    fieldLabel: '合同编号'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            height: 321,
                            width: 532,
                            layout: {
                                type: 'absolute'
                            },
                            title: '建设单位分配统计',
                            dockedItems: [
                                {
                                    xtype: 'gridpanel',
                                    x: 0,
                                    y: 60,
                                    dock: 'bottom',
                                    height: 390,
                                    width: 710,
                                    title: '建设单位收益分配统计',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 66,
                                            dataIndex: 'string',
                                            text: '单位名称'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 74,
                                            dataIndex: 'string',
                                            text: '建设地块编号'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 66,
                                            dataIndex: 'string',
                                            text: '参与任务'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            width: 70,
                                            dataIndex: 'date',
                                            text: '参与时间'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 66,
                                            dataIndex: 'number',
                                            text: '收益（万）'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 156,
                                            dataIndex: 'number',
                                            text: '所占建设成本总收益的百分比（%）'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true
                                        }
                                    ]
                                }
                            ],
                            items: [
                                {
                                    xtype: 'textfield',
                                    x: 10,
                                    y: 20,
                                    fieldLabel: '合同编号'
                                },
                                {
                                    xtype: 'button',
                                    x: 280,
                                    y: 20,
                                    text: '统计'
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