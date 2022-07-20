import renderer from 'react-test-renderer';
import { CardList } from './card-list.component';

const demoMonsters = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    }
]

describe('snapshot test suites for CardList component', () => {
    it('render CardList component', () => {
        const tree = renderer.create(<CardList monsters={demoMonsters} />).toJSON();
        expect(tree).toMatchSnapshot()
    });
})