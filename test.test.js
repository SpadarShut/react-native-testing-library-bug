import { render, screen } from '@testing-library/react-native'
import App, { roles } from './App';

it('should render', () => {
  render(<App/>)

  roles.forEach((role) => {
    expect(screen.getByRole(role)).toBeOnTheScreen()
  })
});
