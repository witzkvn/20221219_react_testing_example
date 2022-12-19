import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  it("should render a button element", () => {
    render(<Cart cancel={() => {}} />);
    expect(screen.getByText(/Purchase/i)).toBeInTheDocument();
  });

  describe("When the user clicks on the purchase button", () => {
    it("should write Thank you! on screen on click on the button element", () => {
      render(<Cart cancel={() => {}} />);

      // before click no text
      expect(screen.queryByText(/Thank you!/i)).not.toBeInTheDocument();

      fireEvent.click(screen.getByText(/Purchase/i));
      expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the cancel button", () => {
    it("should call the cancel function", () => {
      const cancelFn = jest.fn();

      render(<Cart cancel={cancelFn} />);

      fireEvent.click(screen.getByText(/Cancel/i));
      expect(cancelFn).toHaveBeenCalledTimes(1);
    });
  });
});
