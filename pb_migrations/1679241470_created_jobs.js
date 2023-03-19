migrate((db) => {
  const collection = new Collection({
    "id": "vkn43cujraye8si",
    "created": "2023-03-19 15:57:50.148Z",
    "updated": "2023-03-19 15:57:50.148Z",
    "name": "jobs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uskszh1q",
        "name": "value",
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
  const collection = dao.findCollectionByNameOrId("vkn43cujraye8si");

  return dao.deleteCollection(collection);
})
