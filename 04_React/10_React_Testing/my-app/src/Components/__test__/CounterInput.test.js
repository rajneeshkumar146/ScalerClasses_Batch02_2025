import { fireEvent, render, screen } from '@testing-library/react';
import CounterInput from "../CounterInput";


describe("CounterInput component test cases", () => {

  test("0. Snapshot for CounterInput", () => {
    const { asFragment } = render(<CounterInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("1. Intial State of app", () => {
    // Action.
    render(<CounterInput />);

    expect(screen.getByText(/Counter Number/)).toHaveTextContent("Count : 0");
    expect(screen.getByRole("spinbutton")).toHaveValue(null);
  });

  test("2. Input value is always a number", () => {
    // Action.
    render(<CounterInput />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "10" } });
    expect(input.value).toBe("10");

    // Try entering non-numeric entry.
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input.value).toBe("");
  });

  test("3. Input value can be negative or positive", () => {
    // Action.
    render(<CounterInput />);

    const input = screen.getByRole("spinbutton");

    // For negative number.
    fireEvent.change(input, { target: { value: "-5" } });
    expect(input.value).toBe("-5");

    // For Positive number.
    fireEvent.change(input, { target: { value: "15" } });
    expect(input.value).toBe("15");
  });

  test("4. Increment state check", () => {
    // Action.
    render(<CounterInput />);

    // Arrange for assertions.
    const plusText = screen.getByText("+");
    const counterText = screen.getByText(/Counter Number/);

    // Emulate one + click.
    fireEvent.click(plusText);

    // Assertions.
    expect(counterText).toHaveTextContent("Count : 1")

    // Emulate one + click.
    fireEvent.click(plusText);

    // Assertions.
    expect(counterText).toHaveTextContent("Count : 2")
  });

  test("5. Decrement state check", () => {
    // Action.
    render(<CounterInput />);

    // Arrange for assertions.
    const minusText = screen.getByText("-");
    const counterText = screen.getByText(/Counter Number/);

    // Emulate one + click.
    fireEvent.click(minusText);

    // Assertions.
    expect(counterText).toHaveTextContent("Count : -1")

    // Emulate one + click.
    fireEvent.click(minusText);

    // Assertions.
    expect(counterText).toHaveTextContent("Count : -2")
  });

  test("6. Reset Count", () => {
    // Action.
    render(<CounterInput />);

    const input = screen.getByRole("spinbutton");
    const resetBtn = screen.getByText("Reset");
    const counterText = screen.getByText(/Counter Number/);

    // Change input to 50 and click reset. Here 50 is a random pick.
    fireEvent.change(input, { target: { value: "50" } });
    fireEvent.click(resetBtn);

    expect(counterText).toHaveTextContent("Count : 50");
    expect(input.value).toBe("");

    // One more click on reset btn make count to rest at 0.
    fireEvent.click(resetBtn);
    expect(counterText).toHaveTextContent("Count : 0");
  });
});

