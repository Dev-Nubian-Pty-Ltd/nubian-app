import { FormDataSet, getFormStructure } from '../../utils/providers/formData';

describe('Provider utils', () => {
	describe('Validate form strucure', () => {
		let structureReq: string;

		afterEach(() => {
			structureReq = '';
		});

		it('should return undefined if string empty', () => {
			const result = getFormStructure(structureReq);
			expect(result).toBeUndefined();
		});

		it('should return undefined if string not valid', () => {
			const result = getFormStructure(structureReq);
			expect(result).toBeUndefined();
		});

		it('should return undefined if form data not present', () => {
			const items = ['login', 'register', 'channel'];
			structureReq = items[Math.floor(Math.random() * items.length)];
			const result = getFormStructure(structureReq);
			expect(result instanceof Array<FormDataSet[]>).toBe(true);
		});
	});
});
