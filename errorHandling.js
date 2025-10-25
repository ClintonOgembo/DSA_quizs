try {
    // code that may contain an error
    let x = y + 1;
    console.log("This will not run");
} catch (error) {
    console.log("Error Message: ", error.message);
}