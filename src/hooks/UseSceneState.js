
import { create } from 'zustand';
import defaultSceneState from '../data/SceneState';

const useSceneState = create((set) => ({
    sceneState: defaultSceneState,
    setSceneState: (newData) => set({ sceneState: newData }),

    //   Update element color
    setElementColor: (color) =>
        set((state) => ({
            sceneState: { ...state.sceneState, element: { ...state.sceneState.element, color } },
        })),

    // Update Element surface finish
    setElementFinish: (finish) =>
        set((state) => ({
            sceneState: { ...state.sceneState, element: { ...state.sceneState.element, finish } },
        })),

    // Toggle Element opacity
    toggleElementTransparency: () =>
        set((state) => ({
            sceneState: { ...state.sceneState, element: { ...state.sceneState.element, transparent: !state.sceneState.element.transparent } },
        })),


    resetScene: () => set({ sceneState: defaultSceneState }),
}));

export default useSceneState;