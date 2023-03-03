migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // remove
  collection.schema.removeField("87qjvzzi")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "87qjvzzi",
    "name": "year",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^(2000|20[0-9][0-9]|2100)$"
    }
  }))

  return dao.saveCollection(collection)
})
