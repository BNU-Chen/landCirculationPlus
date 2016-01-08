/*
 * File: app/view/crzbdj.js
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

Ext.define('MyApp.view.crzbdj', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.crzbdj',

    requires: [
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.Img',
        'Ext.form.field.Display',
        'Ext.form.field.Number',
        'Ext.form.field.File',
        'Ext.form.Label'
    ],

    id: 'crzbdj',
    width: 940,
    autoScroll: true,
    layout: 'absolute',
    title: '<font size=\'2.5px\'>出让指标</font>',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    x: 20,
                    y: 40,
                    border: false,
                    autoScroll: true,
                    layout: 'auto',
                    bodyPadding: 10,
                    title: '',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            height: 38,
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'fkxmbh',
                                    width: 259,
                                    fieldLabel: '<font size=\'2px\'>建设用地指标编号</font>',
                                    labelWidth: 120,
                                    msgTarget: 'side',
                                    vtype: 'alphanum',
                                    vtypeText: '项目编号格式错误'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        var search=Ext.getCmp('fkxmbh');
                                        if(search.isValid())
                                        {
                                            var fkxmbh=search.getValue();
                                            var form=Ext.getCmp('fkxmxx');
                                            form.getForm().load(
                                            {
                                                url:'getfkxmxx',
                                                params:
                                                {
                                                    fkxmbh:fkxmbh
                                                },
                                                success : function (response){
                                                    //var findTextCmp = Ext.getCmp('fkxmbh');
                                                    //if (findTextCmp) {
                                                    //   var findText = findTextCmp.getValue();
                                                    //  console.log("findText:",findText);
                                                    //  FindFeatureByText(findText);
                                                    // }
                                                },
                                                failure: function(form, action) {
                                                    Ext.Msg.alert("提示", action.result.msg);
                                                    Ext.getCmp('ts').setValue("<font color='red' size='3px'> "+action.result.msg+"</font>");
                                                }

                                            }
                                            );
                                        }
                                    },
                                    width: 69,
                                    text: '查询'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        var store=Ext.StoreMgr.get('zbcrdisplay');

                                        var win=Ext.widget('zblylb');
                                        var num=Ext.getCmp('crzbdj').items.length;
                                        //alert(num);
                                        //alert(Ext.getCmp('crzbdj').items.get(0).getId());
                                        Ext.getCmp('fkxmzs').setValue(num);

                                        var flag=0;
                                        //var f=Ext.getCmp('crzbdj');
                                        //var n=f.items.length;
                                        for(var i=0;i<num;i++)
                                        {
                                            var x=Ext.getCmp('crzbdj').items.get(i).dockedItems.get(1).items.get(1);
                                            if(!x.isValid())
                                            {
                                                flag=1;
                                            }
                                            else
                                            {
                                                var record=Ext.widget('zbcr');
                                                record=x.getValues();

                                                store.add(record);
                                                // alert(store.getAt(0).get('kcrgm'));
                                                //alert(store.getAt(0).get('bccrgm'));

                                                store.getAt(0).set('sykcrgm',store.getAt(0).get('kcrgm')- store.getAt(0).get('bccrgm'));
                                                //store.getAt(i).dirty=false;
                                                store.getAt(0).commit();
                                                //var sykcrgm=record.get('kcrgm')-record.get('bccrgm');
                                                // record.set('sykcrgm',sykcrgm);
                                                //alert(x);

                                            }
                                        }
                                        if(flag==0)
                                        {
                                            win.show();
                                        }
                                        else
                                        {
                                            store.removeAll();
                                            Ext.Msg.alert('提示','输入信息不完整');
                                        }
                                    },
                                    width: 71,
                                    text: '提交'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            dock: 'top',
                            border: false,
                            height: 357,
                            layout: 'border',
                            bodyPadding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    region: 'center',
                                    collapsible: false,
                                    title: '',
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            layout: 'fit',
                                            title: '指标凭证',
                                            items: [
                                                {
                                                    xtype: 'image',
                                                    height: 201,
                                                    id: 'crqspz',
                                                    width: 201
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            html: '<div id = "mapDiv" style="width:100%;height:100%;"></div>',
                                            title: '复垦项目位置图',
                                            listeners: {
                                                afterrender: {
                                                    fn: me.onPanelAfterRender,
                                                    scope: me
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'form',
                                    region: 'west',
                                    id: 'fkxmxx',
                                    width: 496,
                                    layout: 'absolute',
                                    bodyPadding: 10,
                                    title: '',
                                    jsonSubmit: true,
                                    url: 'updateqspz',
                                    items: [
                                        {
                                            xtype: 'displayfield',
                                            x: 20,
                                            y: 30,
                                            itemId: 'bh',
                                            fieldLabel: '复垦项目编号',
                                            name: 'fkxmbh',
                                            submitValue: true
                                        },
                                        {
                                            xtype: 'displayfield',
                                            x: 20,
                                            y: 80,
                                            fieldLabel: '复垦项目名称',
                                            name: 'fkxmmc',
                                            submitValue: true
                                        },
                                        {
                                            xtype: 'displayfield',
                                            x: 20,
                                            y: 130,
                                            fieldLabel: '指标总面积',
                                            name: 'fkxmgm',
                                            submitValue: true
                                        },
                                        {
                                            xtype: 'numberfield',
                                            x: 20,
                                            y: 230,
                                            id: 'bccrgm',
                                            width: 200,
                                            errorMsgCls: '输入格式错误',
                                            fieldLabel: '本次出让面积',
                                            msgTarget: 'under',
                                            name: 'bccrgm',
                                            value: 0,
                                            validateOnBlur: false,
                                            allowBlank: false,
                                            regex: /^(\d*\.)?\d+$/,
                                            vtype: 'max',
                                            baseChars: '0123456789.'
                                        },
                                        {
                                            xtype: 'displayfield',
                                            x: 20,
                                            y: 180,
                                            id: 'kcrgm',
                                            fieldLabel: '可出让面积',
                                            name: 'kcrgm',
                                            submitValue: true
                                        },
                                        {
                                            xtype: 'filefield',
                                            x: 20,
                                            y: 290,
                                            width: 240,
                                            fieldLabel: '上传指标凭证',
                                            msgTarget: 'under',
                                            name: 'scqspz',
                                            allowBlank: false,
                                            blankText: '不能为空',
                                            regex: /(.jpg)$/,
                                            regexText: '必须为JPG格式',
                                            buttonText: '浏览',
                                            clearOnSubmit: false
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var form=Ext.getCmp('fkxmxx');

                                                if(form.isValid())
                                                form.getForm().submit(
                                                {

                                                    // method:'post',
                                                    waitMsg: '正在上传......',
                                                    success:function(form, action){

                                                        var photoUrl=action.result.msg;
                                                        //alert(photoUrl);
                                                        var qspz=Ext.getCmp('crqspz');

                                                        qspz.getEl().dom.src=photoUrl;

                                                    },
                                                    failure:function(){
                                                        Ext.MessageBox.alert('提示','操作失败！');
                                                    }

                                                }
                                                );
                                            },
                                            x: 280,
                                            y: 290,
                                            width: 80,
                                            text: '上传'
                                        },
                                        {
                                            xtype: 'label',
                                            x: 230,
                                            y: 230,
                                            html: '<font size=\'2px\'>公顷</font>',
                                            text: ''
                                        },
                                        {
                                            xtype: 'label',
                                            x: 160,
                                            y: 135,
                                            text: '公顷'
                                        },
                                        {
                                            xtype: 'label',
                                            x: 160,
                                            y: 185,
                                            text: '公顷'
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
    },

    onPanelAfterRender: function(component, eOpts) {
        //加入地图的js文件

        var head = document.getElementsByTagName('head')[0];
        var script= document.createElement("script");
        script.type = "text/javascript";
        script.src="map/map.js";
        head.appendChild(script);

        console.log("map div");

    }

});