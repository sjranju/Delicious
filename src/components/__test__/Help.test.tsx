import { render, screen } from '@testing-library/react'
import Help from '../Help'
import React from 'react';
import '@testing-library/jest-dom'

it("Help component to be rendered", () => {
    render(<Help />);
    const heading = screen.getByText('Help and Support');
    expect(heading).toBeInTheDocument()
})

it("Should load FAQ in Help component", () => {
    render(<Help />);
    const faqItem = screen.getByRole('list')
    // console.log(faqItem)
    expect(faqItem).toHaveTextContent('FAQs')
})