import { makeAutoObservable } from 'mobx';

export class ModalViewStore {
	private show = false;

	constructor() {
		makeAutoObservable(this);
	}
	canShowModal = () => {
		return this.show;
	};

	setShowModal = (showModal: boolean) => {
		this.show = showModal;
	};
}
