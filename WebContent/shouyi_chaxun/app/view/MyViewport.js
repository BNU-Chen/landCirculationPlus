/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.selection.CheckboxModel'
    ],

    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 1,
                    items: [
                        {
                            xtype: 'panel',
                            layout: 'fit',
                            title: '合同信息查询',
                            items: [
                                {
                                    xtype: 'panel',
                                    height: 485,
                                    id: 'ShouyiFind_Hetong',
                                    width: 876,
                                    layout: 'border',
                                    items: [
                                        {
                                            xtype: 'form',
                                            region: 'north',
                                            height: 87,
                                            layout: 'absolute',
                                            bodyPadding: 10,
                                            title: '选择查询条件',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    x: 450,
                                                    y: 20,
                                                    id: 'ShouyiFindHetongField',
                                                    width: 180,
                                                    fieldLabel: '关键词',
                                                    labelWidth: 60,
                                                    emptyText: '请填写'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    x: 20,
                                                    y: 20,
                                                    id: 'ShouyiFindHetongDateStart',
                                                    width: 180,
                                                    fieldLabel: '起始时间',
                                                    labelWidth: 60,
                                                    emptyText: '请选择日期',
                                                    format: 'Y-m-d'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    x: 240,
                                                    y: 20,
                                                    id: 'ShouyiFindHetongDateEnd',
                                                    width: 180,
                                                    fieldLabel: '结束时间',
                                                    labelWidth: 60,
                                                    emptyText: '请选择日期',
                                                    format: 'Y-m-d'
                                                },
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, event) {
                                                        var getDate1 = Ext.util.Format.date(Ext.getCmp('ShouyiFindHetongDateStart').getValue(),'Y-m-d');
                                                        var getDate2 = Ext.util.Format.date(Ext.getCmp('ShouyiFindHetongDateEnd').getValue(),'Y-m-d');
                                                        var getKeyword1 = Ext.getCmp('ShouyiFindHetongField').getValue();
                                                        var mystore=Ext.StoreMgr.get('ShouyiFind'); //获得store对象
                                                        /*/在load事件中添加参数
                                                        mystore.load(
                                                        {params:{
                                                            searchDate1:getDate1,
                                                            searchDate2:getDate2,
                                                            searchKeyword1:getKeyword1
                                                        }
                                                    }
                                                    );
                                                    /*/
                                                    mystore.on('beforeload', function (store, options) {
                                                        var new_params1 = {searchDate1:getDate1};
                                                        var new_params2 = {searchDate2:getDate2};
                                                        var new_params3 = {searchKeyword1:getKeyword1};
                                                        Ext.apply(store.proxy.extraParams, new_params1);
                                                        Ext.apply(store.proxy.extraParams, new_params2);
                                                        Ext.apply(store.proxy.extraParams, new_params3);
                                                    });
                                                    mystore.load({ params: { start: 0, limit: 20} });
                                                    },
                                                    x: 660,
                                                    y: 20,
                                                    width: 60,
                                                    text: '查询'
                                                },
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, event) {
                                                        var grid = Ext.getCmp('ShouyiHetongTable');
                                                        var record = grid.getSelectionModel().getSelection();
                                                        if(record.length === 0){
                                                            Ext.Msg.alert('提示','请先选择您要操作的行！');
                                                            return;

                                                        }else{

                                                            var  tablexh =new Array(record.length);
                                                            for(var i = 0;i<record.length;i++){
                                                                tablexh[i] = record[i].get("xh");

                                                            }

                                                            Ext.Ajax.request({
                                                                url:'getBenefitList14',
                                                                params:{tablexh:tablexh},

                                                                success:function(response){
                                                                    Ext.Msg.alert('提示','该条信息已成功删除！');
                                                                    var mystore = Ext.StoreMgr.get('ShouyiFind');
                                                                    mystore.load();

                                                                },
                                                                failure:function(response){
                                                                    Ext.Msg.alert('提示','该条信息删除失败！');
                                                                }

                                                            });

                                                        }
                                                    },
                                                    x: 750,
                                                    y: 20,
                                                    width: 60,
                                                    text: '删除'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            region: 'center',
                                            id: 'ShouyiHetongTable',
                                            title: '合同信息列表',
                                            store: 'ShouyiFind',
                                            columns: [
                                                {
                                                    xtype: 'rownumberer',
                                                    width: 39,
                                                    text: '序号'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 69,
                                                    dataIndex: 'htbh',
                                                    text: '合同编号'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    width: 76,
                                                    dataIndex: 'jysj',
                                                    text: '交易时间'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 76,
                                                    dataIndex: 'jyl',
                                                    text: '交易量（公顷）'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 71,
                                                    dataIndex: 'jyqy',
                                                    text: '交易区域'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 83,
                                                    dataIndex: 'gmqymc',
                                                    text: '购买单位名称'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    width: 83,
                                                    dataIndex: 'qyxz',
                                                    text: '单位性质'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 84,
                                                    dataIndex: 'qysy',
                                                    text: '建设单位收益（万元）'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 68,
                                                    dataIndex: 'nhsy',
                                                    text: '农户收益（万元）'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 62,
                                                    dataIndex: 'zfsy',
                                                    text: '政府收益（万元）'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 109,
                                                    dataIndex: 'zxsy',
                                                    text: '土地交易中心收益（万元）'
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'pagingtoolbar',
                                                    dock: 'bottom',
                                                    width: 360,
                                                    displayInfo: true,
                                                    store: 'ShouyiFind'
                                                }
                                            ],
                                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                                            })
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: 'fit',
                            title: '资金流动信息查询',
                            items: [
                                {
                                    xtype: 'panel',
                                    height: 497,
                                    id: 'ShouyiFind_Zijin',
                                    width: 936,
                                    layout: 'border',
                                    items: [
                                        {
                                            xtype: 'panel',
                                            region: 'north',
                                            height: 87,
                                            layout: 'absolute',
                                            title: '选择查询条件',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    x: 460,
                                                    y: 20,
                                                    id: 'ShouyiFindZijinField',
                                                    width: 180,
                                                    fieldLabel: '关键词',
                                                    labelWidth: 60,
                                                    emptyText: '请填写'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    x: 20,
                                                    y: 20,
                                                    id: 'ShouyiFindZijinDateStart',
                                                    width: 180,
                                                    fieldLabel: '起始时间',
                                                    labelWidth: 60,
                                                    emptyText: '请选择日期',
                                                    format: 'Y-m-d'
                                                },
                                                {
                                                    xtype: 'datefield',
                                                    x: 240,
                                                    y: 20,
                                                    id: 'ShouyiFindZijinDateEnd',
                                                    width: 180,
                                                    fieldLabel: '结束时间',
                                                    labelWidth: 60,
                                                    emptyText: '请选择日期',
                                                    format: 'Y-m-d'
                                                },
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, event) {
                                                        var getDate1 = Ext.util.Format.date(Ext.getCmp('ShouyiFindZijinDateStart').getValue(),'Y-m-d');
                                                        var getDate2 = Ext.util.Format.date(Ext.getCmp('ShouyiFindZijinDateEnd').getValue(),'Y-m-d');
                                                        var getKeyword1 = Ext.getCmp('ShouyiFindZijinField').getValue();
                                                        var mystore=Ext.StoreMgr.get('ShouyiFind_Zijin'); //获得store对象
                                                        /*/在load事件中添加参数
                                                        mystore.load(
                                                        {params:{
                                                            searchDate1:getDate1,
                                                            searchDate2:getDate2,
                                                            searchKeyword:getKeyword
                                                        }
                                                    }
                                                    );
                                                    /*/
                                                    mystore.on('beforeload', function (store, options) {
                                                        var new_params1 = {searchDate1:getDate1};
                                                        var new_params2 = {searchDate2:getDate2};
                                                        var new_params3 = {searchKeyword1:getKeyword1};
                                                        Ext.apply(store.proxy.extraParams, new_params1);
                                                        Ext.apply(store.proxy.extraParams, new_params2);
                                                        Ext.apply(store.proxy.extraParams, new_params3);
                                                    });
                                                    mystore.load({ params: { start: 0, limit: 20} });
                                                    },
                                                    x: 670,
                                                    y: 20,
                                                    width: 60,
                                                    text: '查询'
                                                },
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, event) {
                                                        var grid = Ext.getCmp('ShouyiZijinTable');
                                                        var record = grid.getSelectionModel().getSelection();
                                                        if(record.length === 0){
                                                            Ext.Msg.alert('提示','请先选择您要操作的行！');
                                                            return;

                                                        }else{

                                                            var  tablexh =new Array(record.length);
                                                            for(var i = 0;i<record.length;i++){
                                                                tablexh[i] = record[i].get("xh");

                                                            }

                                                            Ext.Ajax.request({
                                                                url:'getBenefitList18',
                                                                params:{tablexh:tablexh},

                                                                success:function(response){
                                                                    Ext.Msg.alert('提示','该条信息已成功删除！');
                                                                    var mystore = Ext.StoreMgr.get('ShouyiFind_Zijin');
                                                                    mystore.load();
                                                                },
                                                                failure:function(response){
                                                                    Ext.Msg.alert('提示','该条信息删除失败！');
                                                                }

                                                            });

                                                        }
                                                    },
                                                    x: 760,
                                                    y: 20,
                                                    width: 60,
                                                    text: '删除'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'gridpanel',
                                            region: 'center',
                                            id: 'ShouyiZijinTable',
                                            title: '资金流动列表',
                                            store: 'ShouyiFind_Zijin',
                                            columns: [
                                                {
                                                    xtype: 'rownumberer',
                                                    width: 39,
                                                    text: '序号'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'htbh',
                                                    text: '合同编号'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'pjh',
                                                    text: '票据号'
                                                },
                                                {
                                                    xtype: 'datecolumn',
                                                    dataIndex: 'jysj',
                                                    text: '交易时间'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'zjlcf',
                                                    text: '资金流出方'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'zjlrf',
                                                    text: '资金流入方'
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    width: 61,
                                                    dataIndex: 'je',
                                                    text: '金额（万元）'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'yt',
                                                    text: '用途'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'jbr',
                                                    text: '经办人'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'scsmj',
                                                    text: '扫描件'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'dzqr',
                                                    text: '到账确认'
                                                }
                                            ],
                                            dockedItems: [
                                                {
                                                    xtype: 'pagingtoolbar',
                                                    dock: 'bottom',
                                                    width: 360,
                                                    displayInfo: true,
                                                    store: 'ShouyiFind_Zijin'
                                                }
                                            ],
                                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                                            })
                                        }
                                    ]
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