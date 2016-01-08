/*
 * File: app/view/fkxm1.js
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

Ext.define('MyApp.view.fkxm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.fkxm',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.Img',
        'Ext.form.field.Number',
        'Ext.form.field.File',
        'Ext.form.Label'
    ],

    border: false,
    height: 397,
    autoScroll: true,
    layout: 'auto',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 38,
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'fkxmbh',
                            fieldLabel: '复垦项目编号',
                            name: 'fkxmbh'
                        },
                        {
                            xtype: 'button',
                            width: 69,
                            text: '查询',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'ts',
                            width: 192,
                            fieldLabel: 'Label',
                            hideLabel: true
                        }
                    ]
                },
                {
                    xtype: 'form',
                    dock: 'top',
                    border: false,
                    height: 357,
                    itemId: 'con',
                    layout: 'border',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            region: 'center',
                            title: '',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: 'fit',
                                    title: '权属凭证',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 201,
                                            itemId: 'qspz',
                                            width: 201
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    title: '复垦项目位置图'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            region: 'west',
                            itemId: 'fkxmxx',
                            width: 471,
                            layout: 'absolute',
                            bodyPadding: 10,
                            title: '',
                            url: 'updateqspz',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    x: 20,
                                    y: 30,
                                    itemId: 'fkxmbh',
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
                                    itemId: 'fkxmgm',
                                    fieldLabel: '项目总规模',
                                    name: 'fkxmgm',
                                    submitValue: true
                                },
                                {
                                    xtype: 'numberfield',
                                    x: 20,
                                    y: 230,
                                    itemId: 'bccrgm',
                                    width: 200,
                                    fieldLabel: '本次出让规模',
                                    msgTarget: 'under',
                                    name: 'bccrgm',
                                    allowBlank: false,
                                    regex: /^(\d*\.)?\d+$/,
                                    vtype: 'zd',
                                    baseChars: '0123456789.',
                                    listeners: {
                                        change: {
                                            fn: me.onBccrgmChange,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'displayfield',
                                    x: 20,
                                    y: 180,
                                    itemId: 'kcrgm',
                                    fieldLabel: '可出让规模',
                                    name: 'kcrgm',
                                    submitValue: true
                                },
                                {
                                    xtype: 'filefield',
                                    x: 20,
                                    y: 290,
                                    width: 240,
                                    fieldLabel: '上传权属凭证',
                                    msgTarget: 'under',
                                    name: 'scqspz',
                                    allowBlank: false,
                                    blankText: '不能为空',
                                    regex: /(.jpg)$/,
                                    regexText: '输入格式必须为jpg',
                                    buttonText: '浏览',
                                    clearOnSubmit: false
                                },
                                {
                                    xtype: 'button',
                                    x: 280,
                                    y: 290,
                                    width: 80,
                                    text: '上传',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick1,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'label',
                                    x: 225,
                                    y: 235,
                                    html: '<font size=\'2px\'>公顷</font>',
                                    text: ''
                                },
                                {
                                    xtype: 'label',
                                    x: 175,
                                    y: 135,
                                    height: 10,
                                    text: '公顷'
                                },
                                {
                                    xtype: 'label',
                                    x: 175,
                                    y: 185,
                                    height: 10,
                                    text: '公顷'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {

        var search=this.dockedItems.get(0).getComponent('fkxmbh');
        var ts=this.dockedItems.get(0).getComponent('ts');
        if(search.isValid())
        {
            var fkxmbh=search.getValue();
            var form=this.dockedItems.get(1).getComponent('fkxmxx');
            form.getForm().load(
            {
                url:'getfkxmxx',
                failure: function(form, action) {
                    Ext.Msg.alert("提示", action.result.msg);
                    ts.setValue("<font color='red' size='3px'> "+action.result.msg+"</font>");
                },
                params:
                {
                    fkxmbh:fkxmbh
                }

            }
            );
        }


    },

    onBccrgmChange: function(field, newValue, oldValue, eOpts) {
        var value=this.queryById('fkxmxx').getComponent('kcrgm').getValue();
         var cr=this.queryById('fkxmxx').getComponent('bccrgm').getValue();
        Ext.apply(Ext.form.VTypes, {
            //  vtype validation function
            zd: function(val, field) {
                //var value=this.queryById('fkxmxx').getComponent('kcrgm').getValue();
               // var cr=this.queryById('fkxmxx').getComponent('bccrgm').getValue();
                if(cr>value)
                {


                return false;
                }
                else
                {
                    return true;
                }
            },
            // vtype Text property: The error text to display when the validation function returns false
            zdText: '输入值不能大于可出让规模'

        });
    },

    onButtonClick1: function(button, e, eOpts) {
        var qspz=this.dockedItems.get(1).items.get(0).items.get(0).getComponent('qspz');
        var form=this.dockedItems.get(1).getComponent('fkxmxx');

        if(form.isValid())
        form.getForm().submit(
        {

            // method:'post',
            waitMsg: '正在上传......',
            success:function(form, action){

                var photoUrl="http://localhost:8080/sell/"+action.result.msg;
                //alert(photoUrl);
                // var qspz=this.dockedItems.get(1).items.get(0).items.get(0).getComponent('qspz');

                qspz.getEl().dom.src=photoUrl;

            },
            failure:function(){
                Ext.MessageBox.alert('提示','操作失败！');
            }

        }
        );
    }

});