migrate((db) => {
  const collection = new Collection({
    "id": "x4vm0o0jfkui7t9",
    "created": "2023-04-28 13:28:07.504Z",
    "updated": "2023-04-28 13:28:07.504Z",
    "name": "internship_instructor_relation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mxjclg3w",
        "name": "instructorId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "f3eb6fxk2samr2a",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "iq3bjsd5",
        "name": "internshipId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "ag2c3s1y369xquw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name"
          ]
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
  const collection = dao.findCollectionByNameOrId("x4vm0o0jfkui7t9");

  return dao.deleteCollection(collection);
})
