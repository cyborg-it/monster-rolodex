import renderer from 'react-test-renderer';
import { SearchBox } from './search-box.component';

const handleChange = (event) => {
    console.log(event.target.value)
}

describe('snapshot test suites for SearchBox component', () => {
    it('render SearchBox component', () => {
        const tree = renderer.create(<SearchBox placeholder='search monster' handleChange={handleChange} />).toJSON();
        expect(tree).toMatchSnapshot()
    });
})