const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem( "readList" );
    if ( storedBookSTR )
    {
        const storedBookData = JSON.parse( storedBookSTR );
        return storedBookData;
    } else
    {
        return [];
    }
}
const addToStoredDB = ( id ) => {
    const storedData = getStoredBook();
    if ( storedData.includes(id) )
    {
        alert("Id already exist")
    } else
    {

        storedData.push( id );
        console.log(storedData);
        localStorage.setItem("readList", JSON.stringify(storedData));
    }
}

export { addToStoredDB, getStoredBook };