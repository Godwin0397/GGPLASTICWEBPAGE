import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { vi } from "vitest";

// ✅ Mock Bootstrap Carousel (Vitest way)
vi.mock("bootstrap/js/dist/carousel", () => {
  return {
    default: class {
      constructor() {
        // you can track calls if needed
      }
      next() {}
      prev() {}
    },
  };
});

describe("Home Component", () => {
  test("renders carousel container", () => {
    render(<Home />);
    const carousel = document.querySelector("#carouselExample");
    expect(carousel).toBeInTheDocument();
  });

  test("renders all carousel images", () => {
    render(<Home />);

    expect(screen.getByAltText("machine1")).toBeInTheDocument();
    expect(screen.getByAltText("machine2")).toBeInTheDocument();
    expect(screen.getByAltText("machine3")).toBeInTheDocument();
  });

  test("renders About Us heading", () => {
    render(<Home />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  test("renders important content", () => {
    render(<Home />);

    expect(screen.getByText(/40 years of experience/i)).toBeInTheDocument();
    expect(screen.getByText(/customized plastic moulding/i)).toBeInTheDocument();
  });

  test("renders about section image", () => {
    render(<Home />);
    expect(screen.getByAltText("About us")).toBeInTheDocument();
  });
});