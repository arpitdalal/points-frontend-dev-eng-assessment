import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import Theme from "../Theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <Theme>{children}</Theme>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
