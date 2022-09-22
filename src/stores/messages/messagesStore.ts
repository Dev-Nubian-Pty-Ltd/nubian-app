import { ChannelsResolver, MessagesResolver } from '@api/graphql';
import { ApolloError } from '@apollo/client';
import { User } from '@root/stores/users/user.store';
import { makeAutoObservable } from 'mobx';
import { getPersistedStore, isHydrated, makePersistable } from 'mobx-persist-store';

export interface Channel {
	__typename?: string;
	_id?: string;
	accountId: string;
	title: string;
	imageSrc?: string | null;
}

export interface Message {
	_id?: string;
	text: string;
	senderId: string;
	senderType: string;
	receiverId: string;
	receiverType: string;
	createdAt?: string;
	updatedAt?: string;
}
export interface CompleteMessage {
	_id: string;
	text: string;
	sender: User | Channel;
	receiver: User | Channel;
	createdAt: string;
	updatedAt: string;
}

export type CreateMessageInput = Message;

export class MessageStore {
	messages: Message[] = [];
	channels: Channel[] = [];
	loading = false;
	error: ApolloError | null = null;
	messagesResolver: typeof MessagesResolver;
	channelsResolver: typeof ChannelsResolver;

	constructor(messagesResolver: typeof MessagesResolver, channelsResolver: typeof ChannelsResolver) {
		makeAutoObservable(this);
		makePersistable(this, {
			name: 'MessageStore',
			properties: ['channels', 'messages', 'loading', 'channelsResolver', 'messagesResolver'],
			storage: typeof window !== 'undefined' ? localStorage : undefined,
			expireIn: 86400000,
			removeOnExpiration: true,
			stringify: true,
			debugMode: false,
		});
		this.messagesResolver = messagesResolver;
		this.channelsResolver = channelsResolver;
	}

	get isHydrated() {
		return isHydrated(this);
	}

	async getAccountChannels(getChannelsRequest: any, callback: any = {}) {
		const [getChannels] = callback;
		const { data, error, loading } = await getChannels({
			variables: {
				accountId: getChannelsRequest.accountId,
			},
		});

		if (error) this.setError(error);
		if (loading) this.setLoading(loading);
		if (data) {
			const { getChannels } = data;
			this.setChannels(getChannels);
		}
	}

	async getMessages() {
		return await getPersistedStore(this.messages);
	}

	async getChannels() {
		const data = await getPersistedStore(this);
		return data?.channels;
	}

	private setError(error: ApolloError | any) {
		this.error = error;
	}

	private setLoading(loading: boolean) {
		this.loading = loading;
	}

	private setChannel(channel: Channel) {
		this.channels.push(channel);
	}

	private addMessage(message: Message) {
		this.messages.push(message);
	}

	private setChannels(channels: Channel[]) {
		this.channels = channels;
	}
}
