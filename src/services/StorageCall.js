const StorageCall = {

    myLocalStorage () {
        
        let FavIds = localStorage.getItem('FavProjectJulien');
        //s'il n'y en a pas on crée un tableau | s'il y en a, on transforme la string en tableau
        FavIds = FavIds ? JSON.parse(FavIds) : [];

        return FavIds
        
    }
};

export default StorageCall;