{%- set _mod_docs_content_type = "REFERENCE" %}
# Properties {id="olm-fb-catalogs-prop_{{ context }}"}

Properties are arbitrary pieces of metadata that can be attached to file-based catalog schemas. The `type` field is a string that effectively specifies the semantic and syntactic meaning of the `value` field. The value can be any arbitrary JSON or YAML. {._abstract}

OLM defines a handful of property types, again using the reserved `olm.*` prefix.

## olm.package property {id="olm-fb-catalogs-package-prop_{{ context }}"}

The `olm.package` property defines the package name and version. This is a required property on bundles, and there must be exactly one of these properties. The `packageName` field must match the bundle’s first-class `package` field, and the `version` field must be a valid semantic version.

```go title="olm.package property"
#PropertyPackage: {
  type: "olm.package"
  value: {
    packageName: string & !=""
    version: string & !=""
  }
}
```

## olm.gvk property {id="olm-fb-catalogs-gvk-prop_{{ context }}"}

The `olm.gvk` property defines the group/version/kind (GVK) of a Kubernetes API that is provided by this bundle. This property is used by OLM to resolve a bundle with this property as a dependency for other bundles that list the same GVK as a required API. The GVK must adhere to Kubernetes GVK validations.

```go title="olm.gvk property"
#PropertyGVK: {
  type: "olm.gvk"
  value: {
    group: string & !=""
    version: string & !=""
    kind: string & !=""
  }
}
```

## olm.package.required {id="olm-fb-catalogs-package-reqd-prop_{{ context }}"}

The `olm.package.required` property defines the package name and version range of another package that this bundle requires. For every required package property a bundle lists, OLM ensures there is an Operator installed on the cluster for the listed package and in the required version range. The `versionRange` field must be a valid semantic version (semver) range.

```go title="olm.package.required property"
#PropertyPackageRequired: {
  type: "olm.package.required"
  value: {
    packageName: string & !=""
    versionRange: string & !=""
  }
}
```

## olm.gvk.required {id="olm-fb-catalogs-gvk-reqd-prop_{{ context }}"}

The `olm.gvk.required` property defines the group/version/kind (GVK) of a Kubernetes API that this bundle requires. For every required GVK property a bundle lists, OLM ensures there is an Operator installed on the cluster that provides it. The GVK must adhere to Kubernetes GVK validations.

```terminal title="olm.gvk.required property"
#PropertyGVKRequired: {
  type: "olm.gvk.required"
  value: {
    group: string & !=""
    version: string & !=""
    kind: string & !=""
  }
}
```