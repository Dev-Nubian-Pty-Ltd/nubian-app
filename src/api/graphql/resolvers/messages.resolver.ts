import { gql, DocumentNode } from '@apollo/client';

const SEND_MESSAGE: DocumentNode = gql`
	mutation createMessage(
		$text: String!
		$senderId: String!
		$senderType: String!
		$receiverId: String!
		$receiverType: String!
		$accountId: String!
	) {
		createMessage(
			text: $text
			accountId: $accountId
			senderId: $senderId
			senderType: $senderType
			receiverId: $receiverId
			receiverType: $receiverType
		) {
			_id
			text
			createdAt
			updatedAt
			sender {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
			receiver {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
		}
	}
`;

const GET_MESSAGES: DocumentNode = gql`
	query getMessages($accountId: String!) {
		getMessages(accountId: $accountId) {
			_id
			text
			createdAt
			updatedAt
			sender {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
			receiver {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
		}
	}
`;

const DELETE_MESSAGE: DocumentNode = gql`
	mutation deleteMessage($messageId: String!) {
		deleteMessage(messageId: $messageId)
		Boolean
	}
`;

const MESSAGES_SUBSCRIPTION: DocumentNode = gql`
	subscription messageCreated {
		messageCreated {
			_id
			text
			createdAt
			updatedAt
			sender {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
			receiver {
				__typename
				... on User {
					id
					email
					knownAs
					fullName
					confirmed
					accountId
					createdAt
					updatedAt
					imageSrc
					account {
						id
						company
					}
				}
				... on Channel {
					_id
					accountId
					title
					imageSrc
				}
			}
		}
	}
`;

const CHANNELS_SUBSCRIPTION: DocumentNode = gql`
	subscription channelCreated {
		channelCreated {
			_id
			accountId
			title
			imageSrc
		}
	}
`;

export default {
	SEND_MESSAGE,
	GET_MESSAGES,
	DELETE_MESSAGE,
	MESSAGES_SUBSCRIPTION,
	CHANNELS_SUBSCRIPTION,
};
