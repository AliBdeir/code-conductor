import { StateLoader } from '../tools/persistence.ts';
import './mockLocalStorage.ts'; // Import the localStorage mock file
import {expect, it} from 'vitest'

it('should store the value in localStorage', () => {
    const persister = new StateLoader('test');
    persister.saveState({
        data: {
            algorithmName: '',
            blocks: [],
            inputParameters: [],
            outputParameters: [],
        },
        layout: {
            showSidebar: true,
        }
    });
    expect(persister.loadState()).toBeTruthy();
})