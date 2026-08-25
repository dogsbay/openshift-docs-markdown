{%- set _mod_docs_content_type = "CONCEPT" %}
# Basic pruning operations {id="pruning-basic-operations_{{ context }}"}

Remove obsolete or unreferenced cluster objects to reclaim cluster storage and maintain optimal API server performance. {._abstract}

The CLI groups prune operations under a common parent command:

```terminal
$ oc adm prune <object_type> <options>
```

This specifies:

*   The `<object_type>` to perform the action on, such as `groups`, `builds`,
`deployments`, or `images`.
*   The `<options>` supported to prune that object type.