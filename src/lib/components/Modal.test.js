import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from "./Modal";
import renderer from 'react-test-renderer';

test("Modal component should be mounted", async () => {
    render(<Modal isOpen/>)
    expect(screen.getByTestId('modal-container')).toBeTruthy();
} );

test("Modal component is closed", async () => {
  const { container } = render(<Modal isOpen={false}/>)
  expect(container.firstChild).toHaveClass('is-closed')
} );

test("Modal component is opened", async () => {
  const { container } = render(<Modal isOpen/>)
  expect(container.firstChild).not.toHaveClass('is-closed')
} );

test("Modal component is not full page", async () => {
  const { container } = render(<Modal isOpen/>)
  expect(container.firstChild).not.toHaveClass('is-full-page')
} );

test("Modal component is full page", async () => {
  const { container } = render(<Modal isOpen isFullPage/>)
  expect(container.firstChild).toHaveClass('is-full-page')
} );

test("Modal component has close icon", async () => {
  render(<Modal isOpen />)
  expect(screen.getByTestId('close-button')).toBeTruthy();
} );

test("Modal component has not close icon", async () => {
  render(<Modal isOpen hasCloseIcon={false}/>)
  expect(screen.queryByTestId('close-button')).toBeNull();
} );

test("Modal component has header", async () => {
  render(<Modal isOpen header={<h2>Header title</h2>}/>)
  expect(screen.getByText('Header title')).toBeTruthy();;
} );

test("Modal component has footer", async () => {
  render(<Modal isOpen footer={<p>Footer text</p>}/>)
  expect(screen.getByText('Footer text')).toBeTruthy();;
} );

test("Modal component has content container", async () => {
  render(<Modal isOpen><div><h3>Modal content</h3><p>Modal subtitle</p></div></Modal>)
  expect(screen.getByTestId('modal-main')).toBeTruthy();;
} );

test("Modal component has content", async () => {
  render(<Modal isOpen><div><h3>Modal content</h3><p>Modal subtitle</p></div></Modal>)
  expect(screen.getByText('Modal content')).toBeTruthy();;
  expect(screen.getByText('Modal subtitle')).toBeTruthy();;
} );

it('simple modal renders correctly', () => {
    const tree = renderer
      .create(<Modal isOpen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

it('modal with content renders correctly', () => {
  const tree = renderer
    .create(<Modal isOpen><div><h3>Modal content</h3><p>Modal subtitle</p></div></Modal>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
