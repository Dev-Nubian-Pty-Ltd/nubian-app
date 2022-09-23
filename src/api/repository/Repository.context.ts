import React from 'react';
import { SessionsResolver } from '../graphql';
import { SessionsService } from '../services';

import { SessionsDataStore } from './sessions/SessionsData.store';

export interface iRepositoryContext {
	sessionsDataStore: SessionsDataStore;
}

const sessionsDataStore = new SessionsDataStore(SessionsResolver, SessionsService);

export const RepositoryContext = React.createContext<iRepositoryContext>({
	sessionsDataStore,
});
