migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryibxuo2",
    "name": "members",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lmf7hff7v133nqp",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryibxuo2",
    "name": "members",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lmf7hff7v133nqp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
