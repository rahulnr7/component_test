import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';


afterEach(cleanup)
it('Renders button without crashing', () => {
    const div = document.createElement("div");
   ReactDOM.render(<Button />, div);
})

it('Renders button correctly', () => {
   render(<Button label="Click me please"></Button>);
    expect(screen.getByTestId('button')).toHaveTextContent("Click me please");
})

it('Renders new button correctly', () => {
    render(<Button label="Click me please"></Button>);
     expect(screen.getByTestId('button')).toHaveTextContent("Click me please");
 })

 it('matches snapshot', () => {
   const snap_button = renderer.create(<Button label='save'></Button>).toJSON();
   expect(snap_button).toMatchSnapshot();
 })