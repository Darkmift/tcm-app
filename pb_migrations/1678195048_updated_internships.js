migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ir6zub8q",
    "name": "image",
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
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw")

  // remove
  collection.schema.removeField("ir6zub8q")

  return dao.saveCollection(collection)
})
