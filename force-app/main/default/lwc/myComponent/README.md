## ✅Jest test

https://trailhead.salesforce.com/ja/content/learn/modules/test-lightning-web-components/set-up-jest-testing-framework?trail_id=build-lightning-web-components

## 🥹相关配置及对应命令行

安装 Node.js 和 npm
https://nodejs.org/en/download/ 
node --version
npm --version

## 🥹Jest测试的原因

所有 Lightning Web 组件都使用 Jest 来编写单元测试
Jest不在浏览器中运行或连接到组织

## 🥹@salesforce/sfdx-lwc-jest Node モジュール及对应命令行

允许您编写、运行和调试 Lightning Web 组件的 Jest 测试。 Salesforce CLI 可以轻松地将 Jest 及其依赖项安装到您的项目中
-- ⚠️命令行
sf update -验证 CLI 是否已正确安装并具有最新版本
sf force lightning lwc test setup -将 npm 和 @salesforce/sfdx-lwc-jest 安装到您的项目

## 🥹创建lwc-component

cd path/to/your/project/force-app/main/default/lwc/myComponent

## 🥹创建test.js （测试文本内容）

touch myComponent.test.js

test.js
代码块：
import { createElement } from "lwc";
import MyComponent from "c/myComponent";

describe('c-my-component', () => {
// 测试用例将在这里编写
});

it('displays correct greeting', () => {
const element = createElement('c-my-component', {
is: MyComponent
});
document.body.appendChild(element);

    // 获取并断言渲染的文本
    const div = element.shadowRoot.querySelector('div');
    expect(div.textContent).toBe('Hello, World!');

});

afterEach(() => {
while (document.body.firstChild) {
document.body.removeChild(document.body.firstChild);
}
});

## 🥹配置lwc-compoennt（该组件在其模板中显示一条问候语）

⚠️html
<template>
<div>Hello, World!</div>
</template>

⚠️ JavaScript
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
// 这个组件不需要JavaScript逻辑来处理数据或事件
}

⚠️元数据文件 (myComponent.js-meta.xml)

<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="myComponent">
    <apiVersion>60.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>

or

<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="myComponent">
    <apiVersion>60.0</apiField name="apiVersion">60.0</apiField name="apiVersion"></apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>

## 🥹启动测试运行程序

node node_modules/@salesforce/sfdx-lwc-jest/bin/sfdx-lwc-jest
