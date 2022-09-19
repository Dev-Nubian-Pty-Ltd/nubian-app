import { gql, DocumentNode } from '@apollo/client';

const CREATE_CHANNEL: DocumentNode = gql`
	mutation createChannel($accountId: String!, $title: String!, $imageSrc: String) {
		createChannel(accountId: $accountId, title: $title, imageSrc: $imageSrc) {
			_id
			accountId
			title
			imageSrc
		}
	}
`;

const DELETE_CHANNEL: DocumentNode = gql`
	mutation deleteChanneel($channelId: String!) {
		deleteChanneel(channelId: $channelId)
	}
`;

const UPDATE_CHANNEL: DocumentNode = gql`
	mutation updateChanneel($channelId: String!, $title: String!) {
		updateChannel(accountId: $accountId, title: $title) {
			id
			accountId
			title
			imageSrc
		}
	}
`;

const GET_CHANNELS: DocumentNode = gql`
	query getChannels($accountId: String!) {
		getChannels(accountId: $accountId) {
			_id
			accountId
			title
			imageSrc
		}
	}
`;

export default {
	GET_CHANNELS,
	CREATE_CHANNEL,
	UPDATE_CHANNEL,
	DELETE_CHANNEL,
};
