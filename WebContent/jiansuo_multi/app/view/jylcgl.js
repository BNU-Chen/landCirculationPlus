/*
 * File: app/view/jylcgl.js
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

Ext.define('MyApp.view.jylcgl', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jylcgl',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.Img',
        'Ext.toolbar.Paging'
    ],

    height: 685,
    width: 901,
    title: '<font size=\'2.5px\'>交易流程管理</font>',
    store: 'zbgglbstore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 38,
                    align: 'center',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'zbpcbh',
                    text: '指标批次编号'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value+'公顷/张';
                    },
                    align: 'center',
                    dataIndex: 'dwed',
                    text: '单位额度'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value+'张';
                    },
                    width: 76,
                    align: 'center',
                    dataIndex: 'sl',
                    text: '数量'
                },
                {
                    xtype: 'gridcolumn',
                    width: 85,
                    align: 'center',
                    dataIndex: 'jylx',
                    text: '交易类型'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value+'万元/张';
                    },
                    align: 'center',
                    dataIndex: 'dj',
                    text: '底价'
                },
                {
                    xtype: 'datecolumn',
                    align: 'center',
                    dataIndex: 'fbrq',
                    text: '发布日期',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'datecolumn',
                    align: 'center',
                    dataIndex: 'sqjzrq',
                    text: '申请截止日期',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if(value==1)
                        return "审核阶段";
                        if(value==2)
                        return "审核阶段";
                        if(value==3)
                        return "竞价阶段";
                        if(value==4)
                        return "网签网备";
                        if(value==5)
                        return "网签网备";
                    },
                    width: 90,
                    align: 'center',
                    dataIndex: 'dqhj',
                    text: '当前环节'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return "<button style='background-color:dodgerblue;color:white'>管理</button>";
                    },
                    align: 'center',
                    text: '操作',
                    tooltip: '进入该指标交易流程'
                }
            ],
            viewConfig: {
                cls: 'x-grid3-row',
                listeners: {
                    cellclick: {
                        fn: me.onViewCellClick,
                        scope: me
                    }
                }
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 44,
                    items: [
                        {
                            xtype: 'image',
                            height: 33,
                            width: 527,
                            src: 'images/step1.png'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'zbgglbstore'
                }
            ]
        });

        me.callParent(arguments);
    },

    onViewCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var myTabPanel = Ext.getCmp('htglTabPanelMain');
        var store=Ext.StoreMgr.get('zbgmstore');
        if(cellIndex==9&&record.get('dqhj')<=2)
        {

            myTabPanel.removeAll(true);
            store.clearFilter();
            store.filter('zbpcbh',record.get('zbpcbh'));
            store.filter('dqhj',1);
            var p=Ext.widget('zbsgsh');
            myTabPanel.add(p);
            myTabPanel.add(Ext.widget('bzjsh'));
            Ext.getCmp('bzjshpc').setValue(record.get('zbpcbh'));
            Ext.getCmp('sgshpc').setValue(record.get('zbpcbh'));
            myTabPanel.setActiveTab(0);
            // p.setActive();

            /*
            store.load(
            {
            url:'getsgsh',

            params:
            {
            'zbpcbh':record.get('zbpcbh')
            }
            }
            );
            store.filter('dqhj',7);
            */
        }




        if(cellIndex==9&&record.get('dqhj')==3)
        {
            myTabPanel.removeAll(true);
            myTabPanel.add(Ext.widget('pmjj'));
            var form=Ext.getCmp('jpxx');
            form.load({
                params:{zbpcbh:record.get('zbpcbh')},
                 success:function(form,action){

                   // Ext.MessageBox.alert('提示','设置成功');
                    runner.stopAll();
                    var dif=action.result.dif;
                    var day=parseInt(dif/(24*3600*1000));
                    var hour=parseInt(dif/(3600*1000))-day*24;
                    var minute=parseInt(dif/(60*1000))-day*24*60-hour*60;
                    var second=parseInt(dif/1000)-day*24*3600-hour*3600-minute*60;

                    var djs=Ext.getCmp('pcqt');

                    var task =runner.newTask({
                        run: function()
                        {
                            var flag=1;
                            if(second>0)
                            {
                                second=second-1;
                            }
                            else
                            {
                                if(minute>0)
                                {

                                    second=59;
                                    minute=minute-1;
                                }
                                else
                                {
                                    if(hour>0)
                                    {
                                        minute=59;
                                        hour=hour-1;
                                    }
                                    else
                                    {
                                        if(day>0)
                                        {
                                            hour=23;
                                            day=day-1;
                                        }
                                        else
                                        {
                                            djs.setValue('正在进行');
                                            Ext.getCmp('pczt').setValue('正在进行');
                                            flag=0;
                                        }
                                    }
                                }

                            }
                            if(flag==1)
                            {//alert(second);
                                djs.setValue(day+'天'+hour+'小时'+minute+'分'+second+'秒');
                            }

                        },
                        interval:1000
                    }

                    );
                    task.start();

                }
            });

        }

        if(cellIndex==9&&record.get('dqhj')==4)
        {
            myTabPanel.removeAll(true);
            myTabPanel.add(Ext.widget('wqgl'));
            store.clearFilter();
            store.filter('zbpcbh',record.get('zbpcbh'));
            store.filter('pczt','中标');

        }

        if(cellIndex==9&&record.get('dqhj')==5)
        {
            myTabPanel.removeAll(true);
            myTabPanel.add(Ext.widget('wbgl'));

        }

        if(cellIndex==9&&record.get('dqhj')>=4)
        {

            myTabPanel.removeAll(true);
            store.clearFilter();
            store.filter('zbpcbh',record.get('zbpcbh'));
            store.filter('dqhj',4);
            var wqgl=Ext.widget('wqgl');
            myTabPanel.add(wqgl);
            myTabPanel.add(Ext.widget('wbgl'));
            Ext.getCmp('wqglzbpcbh').setValue(record.get('zbpcbh'));
            Ext.getCmp('wbglzbpcbh').setValue(record.get('zbpcbh'));
            myTabPanel.setActiveTab(0);
            // p.setActive();

            /*
            store.load(
            {
            url:'getsgsh',

            params:
            {
            'zbpcbh':record.get('zbpcbh')
            }
            }
            );
            store.filter('dqhj',7);
            */
        }
    }

});