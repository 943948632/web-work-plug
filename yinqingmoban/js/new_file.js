String.prototype.temp = function(obj) {
    return this.replace(/\$\w+\$/gi, function(matchs) {
        
        var returns = obj[matchs.replace(/\$/g, "")];       
        return (returns + "") == "undefined"? "": returns;
    });
};
