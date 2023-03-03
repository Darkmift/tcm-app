migrate((db) => {
  const collection = new Collection({
    "id": "i8nlfbg5cm5c3kb",
    "created": "2023-03-02 08:34:23.020Z",
    "updated": "2023-03-02 08:34:23.020Z",
    "name": "auth",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l35t6mrk",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^(Admin|User)$"
        }
      },
      {
        "system": false,
        "id": "xkrlhl1i",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cymrsixf",
        "name": "password",
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
  const collection = dao.findCollectionByNameOrId("i8nlfbg5cm5c3kb");

  return dao.deleteCollection(collection);
})
