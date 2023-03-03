migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "au17bgcd",
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
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "au17bgcd",
    "name": "img",
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
})
