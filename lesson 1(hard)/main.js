(function () {
    "use strict";

    let num = 33721;
    let multNum = 3 * 3 * 7 * 2 * 1;
    multNum = multNum ** 3;//jshint ignore:line
    multNum = String(multNum);
    multNum = multNum.slice(0,2);
    alert(multNum);

})();