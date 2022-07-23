import renderer from 'react-test-renderer';
import { Card } from './card.component';

const demoCardData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}

describe('snapshot test suites for Card component', () => {
    it('render Card component', () => {
        const tree = renderer.create(<Card id={demoCardData.id} monster={demoCardData} />).toJSON();
        expect(tree).toMatchSnapshot()
    });
})