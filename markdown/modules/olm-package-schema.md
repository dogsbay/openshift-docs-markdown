{%- set _mod_docs_content_type = "REFERENCE" %}
# olm.package schema {id="olm-package-schema_{{ context }}"}

The `olm.package` schema specifies package-level metadata for Operators in file-based catalogs, including name, default channel, and icon. Use this schema reference when you build or validate Operator package definitions for Operator Lifecycle Manager (OLM). {._abstract}

<details>
<summary>`olm.package` schema</summary>

```go
#Package: {
  schema: "olm.package"

  // Package name
  name: string & !=""

  // A description of the package
  description?: string

  // The package's default channel
  defaultChannel: string & !=""

  // An optional icon
  icon?: {
    base64data: string
    mediatype:  string
  }
}
```
</details>