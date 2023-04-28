migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oez4louo27ydciq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "oez4louo27ydciq",
    "created": "2023-03-02 12:11:28.539Z",
    "updated": "2023-03-02 12:11:28.539Z",
    "name": "internship_instructor_relation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "blzpehlo",
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
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "o1ypdiey",
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
            "id"
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
})
