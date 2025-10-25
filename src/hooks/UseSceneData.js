// src/hooks/UseSceneData.js

import { create } from 'zustand';
import defaultSceneData from '../data/SceneData.js';

const useSceneData = create((set) => ({
    sceneData: defaultSceneData,
    setSceneData: (newData) => set({ sceneData: newData }),

    //   Update element color
    setElementColor: (color) =>
        set((state) => ({
            sceneData: { ...state.sceneData, element: { ...state.sceneData.element, color } },
        })),

    // Update Element surface finish
    setElementFinish: (finish) =>
        set((state) => ({
            sceneData: { ...state.sceneData, element: { ...state.sceneData.element, finish } },
        })),

    // Toggle Element opacity
    toggleElementTransparancy: () =>
        set((state) => ({
            sceneData: { ...state.sceneData, element: { ...state.sceneData.element, transparent: !state.sceneData.element.transparent } },
        })),


    resetScene: () => set({ sceneData: defaultSceneData }),
}));

export default useSceneData;