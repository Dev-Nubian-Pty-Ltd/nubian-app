import { SessionsResolver, ChannelsResolver, MessagesResolver } from '@api/graphql';
import { MessageStore } from '@root/stores/messages/messagesStore';
import { SessionsStore } from '@root/stores/sessions/sessions.store';
import { UserStore } from '@root/stores/users/user.store';
import React from 'react';

interface IStoreContext {
	sessionStore: SessionsStore;
	userStore: UserStore;
	messageStore: MessageStore;
}
const sessionStore = new SessionsStore(SessionsResolver);
const userStore = new UserStore(SessionsResolver);
const messageStore = new MessageStore(MessagesResolver, ChannelsResolver);

export const StoreContext = React.createContext<IStoreContext>({
	sessionStore,
	userStore,
	messageStore,
});
