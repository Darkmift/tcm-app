migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojecf82m",
    "name": "memberId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fyfmeqdxra500vj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  // remove
  collection.schema.removeField("ojecf82m")

  return dao.saveCollection(collection)
})
