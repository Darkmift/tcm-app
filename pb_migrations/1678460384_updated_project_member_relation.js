migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypatkgp2",
    "name": "projectId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "7516i1dqqqk44h0",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ypatkgp2",
    "name": "projectId",
    "type": "relation",
    "required": true,
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
