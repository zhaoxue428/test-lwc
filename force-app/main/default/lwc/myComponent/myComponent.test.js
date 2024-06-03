import { createElement } from "lwc";
import MyComponent from "c/myComponent";
describe("c-my-component", () => {
  // 测试用例将在这里编写
  it("displays correct greeting", () => {
    const element = createElement("c-my-component", {
      is: MyComponent
    });
    document.body.appendChild(element);

    // 获取并断言渲染的文本
    const div = element.shadowRoot.querySelector("div");
    expect(div.textContent).toBe("Hello, World!");
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
});
