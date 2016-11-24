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
        nodeListToArray(els).map(function (el) {
            return {
                "element": el,
                "boundingRect": el.getBoundingClientRect()
            };
        });
    }

    var els = document.querySelectorAll(selector);

    var organizedTiles = getOrganizedTiles(els);

    //FIXME: find a better way to do this part:
    var fixme = {};
    var currentLine = 0;
    console.log(organizedTiles);

    var yArray = getUniqueCoordinates("y");
    console.log(yArray);
    var xArray = getUniqueCoordinates("x");
    console.log(xArray);


    organizedTiles.forEach(function (tile) {
        console.log(tile);
        var y = tile.boundingRect.y;
        var x = tile.boundingRect.x;
        console.log(y);
        if (fixme[y] === undefined) {
            fixme[y] = {
                "row": yArray.indexOf(y),
                "column": xArray.indexOf(x),
                "element": tile
            };
        }
        console.log(fixme[y]);
    });

    console.log(fixme);
})();
