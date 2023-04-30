migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4e25uut3xp49z3t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "luywxx53",
    "name": "projectId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7516i1dqqqk44h0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4e25uut3xp49z3t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "luywxx53",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7516i1dqqqk44h0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
