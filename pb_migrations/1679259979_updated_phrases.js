migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lejbcjwq96qq97t")

  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lejbcjwq96qq97t")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
