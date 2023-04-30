migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4e25uut3xp49z3t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cmffhtj4",
    "name": "year",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^(19[89]\\d|20\\d\\d|2100)$"
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iy9cmr88",
    "name": "title",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("4e25uut3xp49z3t")

  // remove
  collection.schema.removeField("cmffhtj4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iy9cmr88",
    "name": "title",
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
