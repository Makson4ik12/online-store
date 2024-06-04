import TestDB from './products_db.json';

class LocalDB {
    static deleteItem(
        tableName: string, 
        item: string, 
        isNonSet: boolean
    ){
        const table = JSON.parse(localStorage.getItem(tableName) || "") || [];
        let values;

        if (isNonSet) {
            values = Array.from(table);
            values.splice(values.findIndex((value) => JSON.stringify(value) === JSON.stringify(item)), 1);
        } else {
            values = new Set(Array.from(table));
            values.delete(item);
        }
        
        localStorage.setItem(tableName, JSON.stringify(Array.from(values)));
    }

    static addItem(
        tableName: string,
        item: string,
        isNonSet: boolean
    ){
        const table = JSON.parse(localStorage.getItem(tableName) || '[]') || [];
        let values;

        if(isNonSet) {
            values = Array.from(table);
            values.push(item);
        } else {
            values = new Set(Array.from(table));
            values.add(item);
        }
        
        localStorage.setItem(tableName, JSON.stringify(Array.from(values)));
    }

    static freeLSTable(tableName: string) {
        localStorage.setItem(tableName, "[]");
    }

    static getLSItems(tableName: string, isNonSet: boolean) {
        const table = JSON.parse(localStorage.getItem(tableName) || '[]') || [];

        if(isNonSet) 
            return Array.from(table)
        else 
            return new Set(Array.from(table));
    }

    static getDBItems() {
        return TestDB.products;
    }

    static find(find_string: string) {
        return TestDB.products.filter((item) => {
            return find_string.split(" ").every(word => new RegExp('.*' + word + '.*', 'ig').test(item.title));
        });
    }
}

export default LocalDB;