import { AuthService, ChannelsService, MessagesService, UserService } from '@api/graphql';
import { AuthStore } from '@root/stores/auth/auth.store';
import { MessageStore } from '@root/stores/messages/messagesStore';
import { UserStore } from '@root/stores/users/user.store';
import React from 'react';

interface IStoreContext {
	authStore: AuthStore;
	userStore: UserStore;
	messageStore: MessageStore;
}
const authStore = new AuthStore(AuthService);
const userStore = new UserStore(UserService);
const messageStore = new MessageStore(MessagesService, ChannelsService);

export const StoreContext = React.createContext<IStoreContext>({
	authStore,
	userStore,
	messageStore,
});
