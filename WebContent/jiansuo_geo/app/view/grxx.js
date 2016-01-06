/*
 * File: app/view/grxx.js
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

Ext.define('MyApp.view.grxx', {
    extend: 'Ext.form.Panel',
    alias: 'widget.grxx',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.Display',
        'Ext.button.Button'
    ],

    height: 631,
    width: 827,
    autoScroll: true,
    layout: 'absolute',
    bodyPadding: 10,
    title: '个人信息',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    x: 20,
                    y: 20,
                    style: {
                        fontSize: '11pt',
                        fontWeight: '900'
                    },
                    text: '基本信息'
                },
                {
                    xtype: 'label',
                    x: 20,
                    y: 280,
                    style: {
                        fontSize: '11pt',
                        fontWeight: '900'
                    },
                    text: '联系方式'
                },
                {
                    xtype: 'label',
                    x: 90,
                    y: 20,
                    text: '-----------------------------------------------------------------------------------------------------------------------------------------------------------------------'
                },
                {
                    xtype: 'label',
                    x: 90,
                    y: 280,
                    text: '------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 60,
                    id: 'loginname',
                    fieldLabel: '用户名',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '[\'zcw\']'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 90,
                    id: 'loginname1',
                    fieldLabel: '真实姓名',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '[\'zcw\']'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 180,
                    id: 'loginname2',
                    fieldLabel: '身份证号',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '[\'zcw\']'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 150,
                    id: 'loginname5',
                    fieldLabel: '出生日期',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '[\'zcw\']'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 120,
                    id: 'loginname4',
                    fieldLabel: '性别',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '男'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 210,
                    id: 'loginname3',
                    fieldLabel: '性质',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '个人'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 240,
                    id: 'loginname6',
                    fieldLabel: '单位',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '北京师范大学'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 320,
                    id: 'loginname7',
                    fieldLabel: '手机号码',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '15101142173'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 350,
                    id: 'loginname8',
                    fieldLabel: '固定电话',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '55658175'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 380,
                    id: 'loginname9',
                    fieldLabel: '电子邮件',
                    labelWidth: 60,
                    name: 'loginname',
                    value: 'zcw@mail.bnu.edu.cn'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 410,
                    id: 'loginname10',
                    fieldLabel: '地址',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '新街口外大街19号'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 440,
                    id: 'loginname11',
                    fieldLabel: '邮编',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '100875'
                },
                {
                    xtype: 'displayfield',
                    x: 300,
                    y: 470,
                    id: 'loginname12',
                    fieldLabel: '传真号码',
                    labelWidth: 60,
                    name: 'loginname',
                    value: '574982'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var panel=Ext.getCmp('contentPanel');

                        var grxx=Ext.widget('xxxg');
                        panel.removeAll();
                        panel.add(grxx);
                    },
                    x: 340,
                    y: 520,
                    width: 50,
                    href: '',
                    hrefTarget: '',
                    text: '编辑'
                }
            ]
        });

        me.callParent(arguments);
    }

});