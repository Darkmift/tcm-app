migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkynwptw",
    "name": "instructorId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "f3eb6fxk2samr2a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "duebwujy",
    "name": "internshipId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ag2c3s1y369xquw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wayhtkdp",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // remove
  collection.schema.removeField("xkynwptw")

  // remove
  collection.schema.removeField("duebwujy")

  // remove
  collection.schema.removeField("wayhtkdp")

  return dao.saveCollection(collection)
})
