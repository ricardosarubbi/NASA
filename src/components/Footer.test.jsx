import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import React from "react";

test("Footer Test", () => { 
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Nasa API.' })).toHaveAttribute('href', 'https://api.nasa.gov/');
})