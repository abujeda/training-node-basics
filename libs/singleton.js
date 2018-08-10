var value = 10;
console.log(`Loading singleton: ${value}`);

module.exports = {
  update: function(newValue){
    value = newValue;
  },
  instance: function(){return value}
};
