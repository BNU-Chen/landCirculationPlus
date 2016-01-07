/*
 * File: app/view/zbsq.js
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

Ext.define('MyApp.view.zbsq', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.zbsq',

    requires: [
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.grid.column.Date',
        'Ext.toolbar.Paging'
    ],

    cls: 'x-column-header',
    width: 950,
    title: '<font size=2.5px>指标购买</font>',
    store: 'zbgglbstore',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            bodyStyle: {
                'font-size': '11px'
            },
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 43,
                    align: 'center',
                    text: '序号'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'zbpcbh',
                    text: '批次编号'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value+'公顷';
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
                    align: 'center',
                    dataIndex: 'sl',
                    text: '数量'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'jylx',
                    text: '交易类型'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value+'万元';
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
                        return "<button style='background-color:dodgerblue;color:white'>预订</button>";

                    },
                    align: 'center',
                    text: '操作'
                }
            ],
            viewConfig: {
                cls: 'x-grid3-row',
                style: {
                    size: '11px',
                    color: 'red'
                },
                listeners: {
                    cellclick: {
                        fn: me.onViewCellClick1,
                        scope: me
                    },
                    beforerender: {
                        fn: me.onViewBeforeRender,
                        scope: me
                    }
                }
            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'zbgglbstore',
                    listeners: {
                        change: {
                            fn: me.onPagingtoolbarChange1,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onViewCellClick1: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        if(cellIndex==8)
        {
            var hj=record.get('dqhj');
            if(hj==1)
            {

                var store=Ext.StoreMgr.get('zbgmstore');
                if(store.find('zbpcbh',record.get('zbpcbh'))==-1)
                {
                    var panel=Ext.getCmp('contentPanel');
                    var p=Ext.widget('tjdd');
                    p.loadRecord(record);
                    //var title=record.get('zbpcbh');
                    //p.setTitle("<font size=2.5px>"+"指标批次编号"+title+"</font>");

                    var zed=Ext.Number.from(record.get('dwed'),1)*Ext.Number.from(record.get('sl'),1);
                    var sgze=Ext.Number.from(record.get('dwed'),1)*Ext.Number.from(record.get('sgsl'),1);
                    Ext.getCmp('zed').setValue(zed);
                    Ext.getCmp('sgze').setValue(zed);

                    panel.removeAll();
                    panel.add(p);
                   // store.add(p.getValues());
                    //alert('没找到');
                    /*
                    Ext.Ajax.request(
                    {
                    url:'addgmsq',
                    method:'post',
                    headers:{

                    'Content-Type':'application/json'
                    },
                    params:Ext.encode(record.getData()),
                    success:function(response){
                    //var result=Ext.decode(response.responseText);
                    Ext.MessageBox.alert('信息','已加入我的申购指标',function(btn){

                        var panel=Ext.getCmp('contentPanel');
                        var p=Ext.widget('tjdd');
                        p.loadRecord(record);
                        //var title=record.get('zbpcbh');
                        //p.setTitle("<font size=2.5px>"+"指标批次编号"+title+"</font>");

                        var zed=Ext.Number.from(record.get('dwed'),1)*Ext.Number.from(record.get('sl'),1);
                        var sgze=Ext.Number.from(record.get('dwed'),1)*Ext.Number.from(record.get('sgsl'),1);
                        Ext.getCmp('zed').setValue(zed);
                        Ext.getCmp('sgze').setValue(zed);

                        panel.removeAll();
                        panel.add(p);


                    });
                },
                failure:function(){
                    //Ext.MessageBox.alert('错误','操作失败！');
                }

            }
            );
            store.add(record);
            */
        }
        else
        {//alert('找到');
            Ext.MessageBox.alert('提示','该指标已经在您的订单中，不能重复提交');

        }
        }
        else
        {
        //Ext.MessageBox.alert('提示','超过申请截止日期，不能申购！');
        }
        }

    },

    onViewBeforeRender: function(component, eOpts) {
        setTimeout(function(){

        var gmstore=Ext.StoreMgr.get('zbgmstore');
        var ggstore=Ext.StoreMgr.get('zbgglbstore');
            ggstore.clearFilter();
        //alert(gmstore.count());
        ggstore.each(function(record){
            var cdate=new Date();
            var jzrq=record.get('sqjzrq');
            var jzdate=new Date(jzrq);
            if(jzdate<cdate)
            {
                record.set('pcqt','jz');
            }
        });

        //var zbpcbhs = [];
        gmstore.each(function(rec){
            // zbpcbhs.push(gmstore.get('zbpcbh'));
            var zbpcbh=rec.get('zbpcbh');
            //alert(zbpcbh);
            ggstore.getAt(ggstore.find('zbpcbh',zbpcbh)).set('pcqt','yd');
            //rec.setValue('pcqt','yd');//已订
            //ggstore.removeAt(ggstore.find('zbpcbh',rec.get('zbpcbh')));
        });

        //ggstore.clearFilter();
        ggstore.filter('pcqt','wd');},500);

    },

    onPagingtoolbarChange1: function(pagingtoolbar, pageData, eOpts) {

    }

});