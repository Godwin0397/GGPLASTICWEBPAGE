import { render, screen, fireEvent } from "@testing-library/react";
import Topbar from "../Topbar";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// ✅ Mock bootstrap Offcanvas
const hideMock = vi.fn();

vi.mock("bootstrap", () => {
  return {
    Offcanvas: {
      getInstance: vi.fn(() => ({
        hide: hideMock,
      })),
    },
  };
});

describe("Topbar Component", () => {
  const renderComponent = (initialRoute = "/") => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Topbar />
      </MemoryRouter>
    );
  };

  test("renders navbar and logo", () => {
    renderComponent();

    const logo = screen.getByAltText("GG Plastic Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    renderComponent();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  test("Home link is active by default", () => {
    renderComponent("/");

    const homeLink = screen.getByText("Home");
    expect(homeLink.className).toContain("active");
  });

  test("clicking Products sets it active", () => {
    renderComponent();

    const productsLink = screen.getByText("Products");

    fireEvent.click(productsLink);

    expect(productsLink.className).toContain("active");
  });

  test("clicking Pricing calls Offcanvas hide", () => {
    renderComponent();

    const pricingLink = screen.getByText("Pricing");

    fireEvent.click(pricingLink);

    expect(hideMock).toHaveBeenCalled();
  });
});