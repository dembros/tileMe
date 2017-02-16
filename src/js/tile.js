// Create by filipe freire 2016-2017
// Dem bros - magik


// FIXME: bug, currently only works in Firefox - Chrome has limitations in boundyRect part
(function() {

    var selector = '.card';
    var ARROW_UP = 38;
    var ARROW_DOWN = 40;
    var ARROW_RIGHT = 39;
    var ARROW_LEFT = 37;
    var currentRow = 0;
    var currentColumn = 0;
    var tiles = [];
    var maxRowLength = 3;
    var maxColumnLength = 4;

    function nodeListToArray(nodeList) {

        var array = [];

        for (var i = 0; i < nodeList.length; ++i) {
            array.push(nodeList.item(i));
        }

        return array;
    }

    function getUniqueCoordinates(array, axis) {

        var coordinatesArr = [];
        array.forEach(function(el) {
            var axisPos = el.boundingRect[axis];
            if (coordinatesArr.indexOf(axisPos) < 0) {
                coordinatesArr.push(axisPos)
            }
        });

        return coordinatesArr;
    }

    function getTiles(elements) {

        return nodeListToArray(elements).map(function(el) {
            return {
                "element": el,
                "boundingRect": el.getBoundingClientRect()
            };
        });
    }

    function handleKeyPressTileMe(key) {

        var rowDiff = 0;
        var columnDiff = 0;

        if (key.keyCode === ARROW_UP) {
            rowDiff = -1;
        } else if (key.keyCode === ARROW_LEFT) {
            columnDiff = -1;
        } else if (key.keyCode === ARROW_RIGHT) {
            columnDiff = 1;
        } else if (key.keyCode === ARROW_DOWN) {
            rowDiff = 1;
        }

        var oldTile = getTileGivenRowAndColumn(currentRow, currentColumn, tiles);
        var newTile = getNextTile(currentRow, rowDiff, currentColumn, columnDiff, tiles);

        changeClass(oldTile.tile.element, newTile.tile.element);
        currentRow = newTile.row;
        currentColumn = newTile.column;
    }

    function findPosition(axisPos, axisDiff, axisLength) {

        var position = null;

        (axisPos + axisDiff >= axisLength) ? position = 0: (axisPos + axisDiff < 0) ? position = axisLength - 1 : position = axisPos + axisDiff;

        return position;
    }

    function getNextTile(currentRow, rowDiff, currentColumn, columnDiff, elements) {

        var row = findPosition(currentRow, rowDiff, maxRowLength);
        var column = findPosition(currentColumn, columnDiff, maxColumnLength);

        return getTileGivenRowAndColumn(row, column, elements);
    }

    function getTileGivenRowAndColumn(row, column, elements) {

        return elements.filter(function(element) {
            return (element.row == row && element.column == column);
        })[0];
    }

    function changeClass(oldElement, nextElement) {

        oldElement.classList.remove('active');
        nextElement.classList.add('active');
    }

    var _tiles = getTiles(document.querySelectorAll(selector));

    //FIXME: find a better way to do this part:
    var yArray = getUniqueCoordinates(_tiles, "y");
    var xArray = getUniqueCoordinates(_tiles, "x");

    _tiles.forEach(function(tile) {
        var y = tile.boundingRect.y;
        var x = tile.boundingRect.x;
        tiles.push({
            "row": yArray.indexOf(y),
            "column": xArray.indexOf(x),
            "tile": tile
        });
    });

    tiles[0].tile.element.classList.add("active");
    document.addEventListener("keypress", handleKeyPressTileMe);
})();
