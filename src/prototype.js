Array.prototype.mix = function() {
    return [...this].sort(function(a, b) {
        return Math.random() >= 0.5 ? 1: -1;
    });
};