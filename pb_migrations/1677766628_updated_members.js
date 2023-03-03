migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyfmeqdxra500vj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sedczgl5",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyfmeqdxra500vj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sedczgl5",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
