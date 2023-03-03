migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwft6sdy",
    "name": "year",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 2000,
      "max": 2100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7516i1dqqqk44h0")

  // remove
  collection.schema.removeField("cwft6sdy")

  return dao.saveCollection(collection)
})
