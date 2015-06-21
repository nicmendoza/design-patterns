
describe('Composite pattern', function(){

	it('works as shown in example usage (pg 172', function(){

		var cabinet = new Cabinet('PC Cabinet',20,0);
		var chassis = new Chassis('PC Chassis',10,0);

		cabinet.add(chassis);

		var bus = new Bus('MCA Bus', 10,1);

		bus.add(new Card('16Mbs Token Ring',50,2));
		chassis.add(bus);
		chassis.add(new FloppyDisk('3.5in Floppy',5,0));

		expect(cabinet.netPrice()).toBe(95);
		

	});

	
});

