import nock from 'nock';
import 'react-intersection-observer';
import { useInView } from "react-intersection-observer";


jest.mock('react-intersection-observer', () => ({
    ...jest.requireActual('react-intersection-observer'),
    useInView: jest.fn(() => { return { ref: null, inView: true } }),
}));

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}
