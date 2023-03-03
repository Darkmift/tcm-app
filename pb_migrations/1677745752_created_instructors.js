migrate((db) => {
  const collection = new Collection({
    "id": "f3eb6fxk2samr2a",
    "created": "2023-03-02 08:29:12.416Z",
    "updated": "2023-03-02 08:29:12.416Z",
    "name": "instructors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qugeety1",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "au17bgcd",
        "name": "img",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m8nvkdav",
        "name": "fielddescription",
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
  const collection = dao.findCollectionByNameOrId("f3eb6fxk2samr2a");

  return dao.deleteCollection(collection);
})
