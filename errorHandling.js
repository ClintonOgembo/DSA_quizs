try {
    // code that may contain an error
    let x = y + 1;
    console.log("This will not run");
} catch (error) {
    console.log("An Error occured: ", error.message);
} finally {
    console.log("This always runs!");
}

// Using Throw
function divide(a, b) {
    if (b == 0) {
        throw new Error("Cannot be divided by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("An error occured: ", error.message);
}