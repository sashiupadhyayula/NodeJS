module.exports = function(x,y,callback){
	try{
	console.log("Values in Module. x: " + x + " y: " + y);
		callback(null, {
						perimeter:function(){
										return (2*(x+y));
									}, 
						area:function(){
										return (x*y);
								}
						}
		);
	}catch(error){
		callback(error,null);
	}
};