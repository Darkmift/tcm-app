migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqrn5jqe",
    "name": "field",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 2000,
      "max": 2100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // remove
  collection.schema.removeField("bqrn5jqe")

  return dao.saveCollection(collection)
})
