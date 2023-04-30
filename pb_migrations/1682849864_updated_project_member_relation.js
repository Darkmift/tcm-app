migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  collection.indexes = [
    "CREATE INDEX `_lmf7hff7v133nqp_created_idx` ON `project_member_relation` (`created`)",
    "CREATE INDEX `idx_projectId_memberId` ON `project_member_relation` (\n  `projectId`,\n  `memberId`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lmf7hff7v133nqp")

  collection.indexes = [
    "CREATE INDEX `_lmf7hff7v133nqp_created_idx` ON `project_member_relation` (`created`)"
  ]

  return dao.saveCollection(collection)
})
