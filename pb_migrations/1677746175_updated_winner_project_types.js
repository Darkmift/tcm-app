migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzo9usekruqulza")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wypjwxxa",
    "name": "icon",
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
  const collection = dao.findCollectionByNameOrId("nzo9usekruqulza")

  // remove
  collection.schema.removeField("wypjwxxa")

  return dao.saveCollection(collection)
})
