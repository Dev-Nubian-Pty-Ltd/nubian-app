import { makeAutoObservable } from 'mobx';

export class PropertiesViewStore {
	private show: boolean | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}
	canShowPanel = () => {
		return this.show;
	};

	setShowPanel = (showPanel: boolean) => {
		this.show = showPanel;
	};
}
