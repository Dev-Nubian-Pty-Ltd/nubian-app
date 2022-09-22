import { gql, DocumentNode } from '@apollo/client';

const GET_SIGNATURE: DocumentNode = gql`
	query getUrl($me: Boolean!) {
		getUrl(me: $me)
	}
`;

export default {
	GET_SIGNATURE,
};
