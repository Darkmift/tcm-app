migrate((db) => {
  const collection = new Collection({
    "id": "ag2c3s1y369xquw",
    "created": "2023-03-02 08:31:22.982Z",
    "updated": "2023-03-02 08:31:22.982Z",
    "name": "internships",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r6p3kwdk",
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
        "id": "yjdiy34i",
        "name": "description",
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
        "id": "abny50hv",
        "name": "instructors",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "f3eb6fxk2samr2a",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("ag2c3s1y369xquw");

  return dao.deleteCollection(collection);
})
