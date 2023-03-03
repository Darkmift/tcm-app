migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm9bav1m",
    "name": "legacyId",
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
  collection.schema.removeField("lm9bav1m")

  return dao.saveCollection(collection)
})
