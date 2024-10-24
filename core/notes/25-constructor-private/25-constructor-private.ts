class Database{
    private static database: Database;

    private constructor(
        private host: string,
        private password: string,
        private port: string,
    ){}

    connect(): void{
        console.log(`Conectando: ${this.host}:${this.port}, ${this.password}`);
    }

    static getDatabase(
        host: string,
        user:string,
        password: string
    ): Database{
        if(Database.database){
            console.log('Retornando instância já criada.')
            return Database.database;
        }
        console.log('Criando nova instância.');
        Database.database = new Database(host, user, password);
        return Database.database
    }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();

// Module mode
export default 1;