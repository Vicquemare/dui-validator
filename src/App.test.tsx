import { describe, test } from 'vitest'
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App Tests', () => { 
  //Implement should render test
  test('should render', () => {
    //Test implementation
    render(<App />);
  });

  //Implement should have title test
  test('should have title "Mi DUI es valido?"', () => {
    //Test implementation
    render(<App />);
    const title = screen.getByText('Mi DUI es valido?');
    expect(title).toBeInTheDocument();
  });

  //Implement should have an input text test
  test('should have an input text', () => {
    //Test implementation
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  //Implement should have a button with text "Validar" test
  test('should have a button with text "Validar"', () => {
    //Test implementation
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Validar');
  });

  //Los que yo hice

  //Implement button should have a click event test
  test('button should have a click event', () => {
    //Test implementation
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Validar');
    button.click();
  } );

  //Implement input should be enabled test
  test('input should be enabled', () => {
    //Test implementation
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
  });


})
