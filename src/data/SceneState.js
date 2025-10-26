
// initial scene to be used by a hook
const defaultSceneState = {
    name: 'NewScene' + Date.now(),
    element: {
        color: '#3A86FF',
        finish: 0.0,
        transparent: false,
    },
    scene: {
        background: '/assets/textures/star-wars.jpg',
        color: '#D4FFFD',
    }
};

export default defaultSceneState;