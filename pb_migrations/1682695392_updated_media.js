migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l51f3lz8p6d1u87")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjlwu07o",
    "name": "heading",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hgognsdq",
    "name": "desc",
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
  const collection = dao.findCollectionByNameOrId("l51f3lz8p6d1u87")

  // remove
  collection.schema.removeField("hjlwu07o")

  // remove
  collection.schema.removeField("hgognsdq")

  return dao.saveCollection(collection)
})
