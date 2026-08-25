{%- set _mod_docs_content_type = "REFERENCE" %}
# olm.bundle schema {id="olm-bundle-schema_{{ context }}"}

The `olm.bundle` schema defines the structure of bundle entries stored in an Operator catalog index. It specifies required fields such as package name, bundle name, image reference, and optional properties and related images. {._abstract}

<details>
<summary>`olm.bundle` schema</summary>

```go
#Bundle: {
  schema: "olm.bundle"
  package: string & !=""
  name: string & !=""
  image: string & !=""
  properties: [...#Property]
  relatedImages?: [...#RelatedImage]
}

#Property: {
  // type is required
  type: string & !=""

  // value is required, and it must not be null
  value: !=null
}

#RelatedImage: {
  // image is the image reference
  image: string & !=""

  // name is an optional descriptive name for an image that
  // helps identify its purpose in the context of the bundle
  name?: string & !=""
}
```
</details>