#An ES6 Implementation of the Gang of Four's Design Patterns

/* jshint esnext: true */
    
    // using symols to make protected members
    let NAMES = new WeakMap(),
    	PRICES = new WeakMap(),
    	POWER = new WeakMap();
    
    class Equipment {
    	constructor(name,price,power) {
    
    		// should be protected
    		this._equipment = [];
    		
    		// private
    		this._name = NAMES.set(this,name);
    		this._price = PRICES.set(this,price);
    		this._power = POWER.set(this,power);
    		
    	}
    
    	name(){
    		return NAMES.get(this);
    	}
    
    	power(){
    		return POWER.get(this);
    	}
    
    	netPrice(){
    		return PRICES.get(this);
    	}
    
    	discountPrice(){
    		return this.netPrice();
    	}
    
    	add(equipment){
    		this._equipment.push(equipment);
    	}
    
    	remove(equipment){
    		this._equipment.splice(this._equipment.indexOf(equipment),1);
    	}
    
    	
    }
    
    class CompositeEquipment extends Equipment {
    	constructor(...args){
    		super(...args);
    		// store price to be included when netPrice calculated
    		this._basePrice = args[1] || 0;
    	}
    
    	netPrice(){
    
    		let total = this._basePrice;
    
    		for(var equipment of this._equipment){
    			total += equipment.netPrice();
    		}
    
    		return total;
    	}
    
    }
    
    class Card extends Equipment {
    	constructor(...args){
    		super(...args);
    	}
    }
    
    class FloppyDisk extends Equipment {
    	constructor(...args){
    		super(...args);
    	}
    }
    
    class Chassis extends CompositeEquipment {
    	constructor(...args){
    		super(...args);
    	}
    }
    
    class Cabinet extends CompositeEquipment {
    	constructor(...args){
    		super(...args);
    	}
    }
    
    class Bus extends CompositeEquipment {
    	constructor(...args){
    		super(...args);
    	}
    }