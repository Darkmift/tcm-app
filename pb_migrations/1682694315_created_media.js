migrate((db) => {
  const collection = new Collection({
    "id": "l51f3lz8p6d1u87",
    "created": "2023-04-28 15:05:15.040Z",
    "updated": "2023-04-28 15:05:15.040Z",
    "name": "media",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cvp5mmsl",
        "name": "url",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("l51f3lz8p6d1u87");

  return dao.deleteCollection(collection);
})
