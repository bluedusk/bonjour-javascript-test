import React from "react";
import { create } from "react-test-renderer";
import Users from "../Users";
import axios from "axios";

jest.mock("axios");

describe("Users component", () => {
  it("shows a list of users", async () => {
    const response = {
      data: [{ name: "Kevin Mitnick" }, { name: "Valentino Gagliardi" }]
    };
    axios.get.mockResolvedValue(response);
    const component = create(<Users />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    const root = component.root;
    const listOfLi = root.findAll(element => element.type === "li");
    expect(listOfLi[0].props.children).toBe("Kevin Mitnick");
    expect(listOfLi[1].props.children).toBe("Valentino Gagliardi");
  });
});
