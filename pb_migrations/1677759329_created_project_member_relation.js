migrate((db) => {
  const collection = new Collection({
    "id": "lmf7hff7v133nqp",
    "created": "2023-03-02 12:15:29.683Z",
    "updated": "2023-03-02 12:15:29.683Z",
    "name": "project_member_relation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ypatkgp2",
        "name": "projectId",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "7516i1dqqqk44h0",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp");

  return dao.deleteCollection(collection);
})
