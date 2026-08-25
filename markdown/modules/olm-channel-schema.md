{%- set _mod_docs_content_type = "REFERENCE" %}
# olm.channel schema {id="olm-channel-schema_{{ context }}"}

The `olm.channel` schema defines a channel within a package, the bundle entries that are members of the channel, and the upgrade paths for those bundles. {._abstract}

If a bundle entry represents an edge in multiple `olm.channel` blobs, it can only appear once per channel.

It is valid for an entry’s `replaces` value to reference another bundle name that cannot be found in this catalog or another catalog. However, all other channel invariants must hold true, such as a channel not having multiple heads.

:::details{title="`olm.channel` schema"}
```go
#Channel: {
  schema: "olm.channel"
  package: string & !=""
  name: string & !=""
  entries: [...#ChannelEntry]
}

#ChannelEntry: {
  // name is required. It is the name of an `olm.bundle` that
  // is present in the channel.
  name: string & !=""

  // replaces is optional. It is the name of bundle that is replaced
  // by this entry. It does not have to be present in the entry list.
  replaces?: string & !=""

  // skips is optional. It is a list of bundle names that are skipped by
  // this entry. The skipped bundles do not have to be present in the
  // entry list.
  skips?: [...string & !=""]

  // skipRange is optional. It is the semver range of bundle versions
  // that are skipped by this entry.
  skipRange?: string & !=""
}
```
:::


:::warning

When using the `skipRange` field, the skipped Operator versions are pruned from the update graph and are longer installable by users with the `spec.startingCSV` property of `Subscription` objects.

You can update an Operator incrementally while keeping previously installed versions available to users for future installation by using both the `skipRange` and `replaces` field. Ensure that the `replaces` field points to the immediate previous version of the Operator version in question.

:::