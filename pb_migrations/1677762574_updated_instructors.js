migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ncij00e",
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
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // remove
  collection.schema.removeField("4ncij00e")

  return dao.saveCollection(collection)
})
