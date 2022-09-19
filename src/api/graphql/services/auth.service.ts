import { gql, DocumentNode } from '@apollo/client';

const SIGN_UP: DocumentNode = gql`
	scalar Date

	type User {
		id: ID
		email: string
		knownAs: string
		fullName: string
		imageSrc: string
		createdAt: Date
		updatedAt: Date
		account: Account
	}

	type Account {
		id: string
		company: string
		ownerId: string
		renew_on: Date
	}

	type Session {
		id: string
		token: string
		userId: string
	}

	mutation signup(
		$email: String!
		$knownAs: String
		$company: String!
		$fullName: String!
		$password: String!
		$password_confirmation: String!
	) {
		signup(
			email: $email
			company: $company
			knownAs: $knownAs
			fullName: $fullName
			password: $password
			password_confirmation: $password_confirmation
		)
		User
	}
`;

const SIGN_IN: DocumentNode = gql`
	mutation createSession($email: String!, $password: String!) {
		createSession(email: $email, password: $password) {
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
				updatedAt
				imageSrc
				account {
					id
					company
				}
			}
		}
	}
`;

const SIGN_OUT: DocumentNode = gql`
	mutation deleteSession($me: Boolean!) {
		deleteSession(me: $me)
	}
`;

export default {
	SIGN_UP,
	SIGN_IN,
	SIGN_OUT,
};
