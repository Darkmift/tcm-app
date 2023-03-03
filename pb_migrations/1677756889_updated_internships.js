migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9lbp4fmn",
    "name": "year",
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
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw")

  // remove
  collection.schema.removeField("9lbp4fmn")

  return dao.saveCollection(collection)
})
