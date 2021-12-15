
// Make the tests for function removeBMW() pass
// Make sure you throw something
// Add more tests, use a different assertion, e.g., .toHaveLength()

function removeBMW(str){
    return str.replace(/[bmw]/gi,'');
}

const returnObjects = arrNames => arrNames.map((name, index) => ({name, id: index+1}));

module.exports = { removeBMW, returnObjects };