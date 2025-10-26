
// initial scene to be used by a hook
const defaultSceneState = {
    name: 'NewScene' + Date.now(),
    element: {
        color: '#ff0000',
        finish: 0.0,
        transparent: false,
    },
    scene: {
        background: 'src/assets/textures/star-wars.jpg',
        color: '#D4FFFD',
    }
};

export default defaultSceneState;