import React from 'react';
import { SessionsResolver } from '../graphql';
import { SessionsService } from '../services';
import { ModalViewStore } from './modal/modalView.store';

import { SessionsDataStore } from './sessions/SessionsData.store';

export interface iRepositoryContext {
	sessionsDataStore: SessionsDataStore;
	modalViewStore: ModalViewStore;
}

const sessionsDataStore = new SessionsDataStore(SessionsResolver, SessionsService);
const modalViewStore = new ModalViewStore();

export const RepositoryContext = React.createContext<iRepositoryContext>({
	sessionsDataStore,
	modalViewStore,
});
