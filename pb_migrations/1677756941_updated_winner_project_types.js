migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzo9usekruqulza")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqknwnkg",
    "name": "year",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 2000,
      "max": 2100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzo9usekruqulza")

  // remove
  collection.schema.removeField("bqknwnkg")

  return dao.saveCollection(collection)
})
