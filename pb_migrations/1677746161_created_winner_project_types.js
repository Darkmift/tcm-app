migrate((db) => {
  const collection = new Collection({
    "id": "nzo9usekruqulza",
    "created": "2023-03-02 08:36:01.187Z",
    "updated": "2023-03-02 08:36:01.187Z",
    "name": "winner_project_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eiltzbva",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
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
  const collection = dao.findCollectionByNameOrId("nzo9usekruqulza");

  return dao.deleteCollection(collection);
})
