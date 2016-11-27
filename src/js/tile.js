(function () {
    var selector = '.card';

    function nodeListToArray(nodeList) {
        var array = [];
        for (var i = 0; i < nodeList.length; ++i) {
            array.push(nodeList.item(i));
        }
        return array;
    }

    function getUniqueCoordinates(array, axis) {
        var result = [];
        array.forEach(function (el) {
            var axisPos = el.boundingRect[axis];
            if (result.indexOf(axisPos) < 0) {
                result.push(axisPos)
            }
        });
        return result;
    }

    function getOrganizedTiles(elements) {
        return nodeListToArray(elements).map(function (el) {
            return {
                "element": el,
                "boundingRect": el.getBoundingClientRect()
            };
        });
    }
    var els = document.querySelectorAll(selector);
    console.log(els);
    var organizedTiles = getOrganizedTiles(els);

    //FIXME: find a better way to do this part:
    var tileObjs = {};
    var currentLine = 0;

    var yArray = getUniqueCoordinates(organizedTiles, "y");
    var xArray = getUniqueCoordinates(organizedTiles, "x");

    organizedTiles.forEach(function (tile) {

        var y = tile.boundingRect.y;
        var x = tile.boundingRect.x;

        if (tileObjs[y] === undefined) {
            tileObjs[y] = [];
        }

        tileObjs[y].push({
            "row": yArray.indexOf(y),
            "column": xArray.indexOf(x),
            "element": tile
        });
    });
    console.log(tileObjs);


})();
