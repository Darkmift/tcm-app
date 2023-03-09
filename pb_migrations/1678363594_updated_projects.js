migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulupbwsa",
    "name": "imageUrl",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // remove
  collection.schema.removeField("ulupbwsa")

  return dao.saveCollection(collection)
})
