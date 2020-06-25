import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
import { prettyDOM } from '@testing-library/dom'

test("renders content", () => {
  const blog = {
    title: "Component testing",
    author: "Author testing",
  };

  const component = render(<Blog blog={blog} />);

  component.debug()

  expect(component.container).toHaveTextContent(
    "Component testing",
    "Author testing"
  );

});
