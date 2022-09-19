import { gql, DocumentNode } from '@apollo/client';

const SIGNED_IN: DocumentNode = gql`
	query userSession($me: Boolean!) {
		userSession(me: $me) {
			id
			token
			userId
			user {
				id
				email
				knownAs
				fullName
				confirmed
				accountId
				createdAt
				imageSrc
				account {
					id
					company
				}
			}
		}
	}
`;
export default {
	SIGNED_IN,
};
