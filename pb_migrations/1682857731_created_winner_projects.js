migrate((db) => {
  const collection = new Collection({
    "id": "4e25uut3xp49z3t",
    "created": "2023-04-30 12:28:51.511Z",
    "updated": "2023-04-30 12:28:51.511Z",
    "name": "winner_projects",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4e25uut3xp49z3t");

  return dao.deleteCollection(collection);
})
