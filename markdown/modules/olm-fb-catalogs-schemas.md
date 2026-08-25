{%- set _mod_docs_content_type = "REFERENCE" %}
# Schemas {id="olm-fb-catalogs-schemas_{{ context }}"}

File-based catalogs on {{ product_title }} use a CUE-based format with schemas that define catalog structure for Operator Lifecycle Manager (OLM). Each Operator package requires one `olm.package` blob, at least one `olm.channel` blob, and one or more `olm.bundle` blobs. {._abstract}

```go title="_Meta schema"
_Meta: {
  // schema is required and must be a non-empty string
  schema: string & !=""

  // package is optional, but if it's defined, it must be a non-empty string
  package?: string & !=""

  // properties is optional, but if it's defined, it must be a list of 0 or more properties
  properties?: [... #Property]
}

#Property: {
  // type is required
  type: string & !=""

  // value is required, and it must not be null
  value: !=null
}
```


:::note

No CUE schemas listed in this specification should be considered exhaustive. The `opm validate` command has additional validations that are difficult or impossible to express concisely in CUE.

:::



:::note

All `olm.*` schemas are reserved for OLM-defined schemas. Custom schemas must use a unique prefix, such as a domain that you own.

:::