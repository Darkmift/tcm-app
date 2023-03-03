migrate((db) => {
  const collection = new Collection({
    "id": "7f708wepk1ophib",
    "created": "2023-03-02 11:45:18.342Z",
    "updated": "2023-03-02 11:45:18.342Z",
    "name": "years_auth",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vtevymid",
        "name": "year",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": 2000,
          "max": 2100
        }
      },
      {
        "system": false,
        "id": "t6cw9wre",
        "name": "is_enabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("7f708wepk1ophib");

  return dao.deleteCollection(collection);
})
