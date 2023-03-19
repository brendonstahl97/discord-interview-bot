migrate((db) => {
  const collection = new Collection({
    "id": "lejbcjwq96qq97t",
    "created": "2023-03-19 15:57:10.561Z",
    "updated": "2023-03-19 15:57:10.561Z",
    "name": "phrases",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vli1qs47",
        "name": "value",
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
  const collection = dao.findCollectionByNameOrId("lejbcjwq96qq97t");

  return dao.deleteCollection(collection);
})
