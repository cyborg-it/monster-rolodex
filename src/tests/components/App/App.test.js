import renderer from 'react-test-renderer';
import App from '../../../App';

describe('snapshot test suites for App component', () => {
    it('render App component', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot()
    });
})