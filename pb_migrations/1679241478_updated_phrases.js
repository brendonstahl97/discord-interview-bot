migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lejbcjwq96qq97t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vli1qs47",
    "name": "value",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lejbcjwq96qq97t")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
