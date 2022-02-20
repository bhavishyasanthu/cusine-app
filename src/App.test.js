import { render, screen ,fireEvent} from "@testing-library/react";
import App from "./App";

test("check initial text", () => {
  render(<App />);
  const linkElement = screen.getByTestId("btn");
  expect(linkElement).toHaveTextContent("Change to black");
});

test("check  text after click", () => {
  render(<App />);
  const linkElement = screen.getByTestId("btn");
 fireEvent.click(linkElement);
 expect(linkElement.textContent).toBe("Change to white");
});
