
// initial scene to be used by a hook
const defaultSceneState = {
    name: 'NewScene' + Date.now(),
    element: {
        color: '#ee2f2fff',
        finish: 0.0,
        transparent: false,
    },
    scene: {
        background: '/assets/textures/star-wars.jpg',
        color: '#e69a37ff',
    }
};

export default defaultSceneState;