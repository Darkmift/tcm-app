migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfhc4pg8",
    "name": "ownerId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i8nlfbg5cm5c3kb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // remove
  collection.schema.removeField("jfhc4pg8")

  return dao.saveCollection(collection)
})
