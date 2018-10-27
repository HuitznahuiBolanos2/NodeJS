const expect = require('expect');
const utils = require('./utils');

it(' Should add two numbers',() => {
	var res = utils.add(33,11);

	expect(res).toBe(44).toBeA('number');
});

it('Should square a number', () => {
	var res = utils.square(2);

	expect(res).toBe(4).toBeA('number')
});

it('Should verify first and last name are set', () => {
	var user =utils.setName({},'Pedro Perez');

	expect(user).toBeA('object').toInclude ({firstName:'Pedro'}).toInclude({lastName:'Perez'});

});

it('Should be equals', () => {
	//expect({name:'andrew'}).toEqual({name:'adrew'});
	//expect([1,2,3]).toExclude(5);
	expect({
		name:'Huitz',
		age:20,
		location:'Mexico'
	}).toExclude({
		age:21
	})
});

it('Should asyncAdd two numbers',(done) => {
	utils.asyncAdd(4,3,(sum) =>{
		expect(sum).toBe(7);
		done();
	})
})