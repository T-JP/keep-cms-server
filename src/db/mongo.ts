import Mongo = require('mongodb')
export = class DB {
  public db!: Mongo.Db
  public dbs!: Mongo.MongoClient
  public client: Mongo.MongoClient
  public constructor(public config: MongoConf, public options?: Mongo.MongoClientOptions) {
    const uri = `mongodb://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.db}`
    this.client = new Mongo.MongoClient(uri, options)
  }
  public async connect(): Promise<void> {
    const { config } = this
    this.dbs = await this.client.connect()
    this.db = this.dbs.db(config.db || 'admin')
  }
  public use(db: string): void {
    this.db = this.dbs.db(db)
  }
  public async query(table: string, query?: ObjectAny): Promise<ObjectAny[]> {
    return await this.db
      .collection(table)
      .find(query)
      .toArray()
  }
  public async insert(
    table: string,
    data: ObjectAny | ObjectAny[]
  ): Promise<Mongo.InsertOneWriteOpResult | Mongo.InsertWriteOpResult> {
    if (Array.isArray(data)) {
      return await this.db.collection(table).insertMany(data as ObjectAny[])
    }
    return await this.db.collection(table).insertOne(data)
  }
  public async delete(
    table: string,
    data: ObjectAny | ObjectAny[]
  ): Promise<Mongo.DeleteWriteOpResultObject> {
    if (Array.isArray(data)) {
      return await this.db.collection(table).deleteMany(data as ObjectAny[])
    }
    return await this.db.collection(table).deleteOne(data)
  }
  public async update(
    table: string,
    query: ObjectAny,
    data: ObjectAny
  ): Promise<Mongo.UpdateWriteOpResult> {
    return await this.db.collection(table).updateOne(query, { $set: data })
  }
}
