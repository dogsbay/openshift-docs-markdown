{%- set _mod_docs_content_type = "REFERENCE" %}

# Examples of unsafe CRD changes {id="examples-unsafe_{{ context }}"}

Review the example unsafe custom resource definition (CRD) changes to recognize modifications that trigger the CRD upgrade safety preflight check. {._abstract}

The following examples use this baseline `CustomResourceDefinition` object:

```yaml title="Example CRD object"
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  annotations:
    controller-gen.kubebuilder.io/version: v0.13.0
  name: example.test.example.com
spec:
  group: test.example.com
  names:
    kind: Sample
    listKind: SampleList
    plural: samples
    singular: sample
  scope: Namespaced
  versions:
  - name: v1alpha1
    schema:
      openAPIV3Schema:
        properties:
          apiVersion:
            type: string
          kind:
            type: string
          metadata:
            type: object
          spec:
            type: object
          status:
            type: object
          pollInterval:
            type: string
        type: object
    served: true
    storage: true
    subresources:
      status: {}
```

## Scope change {id="scope-change_{{ context }}"}

The following example changes the `spec.scope` field from `Namespaced` to `Cluster`:

```yaml title="Example scope change in a CRD"
spec:
  group: test.example.com
  names:
    kind: Sample
    listKind: SampleList
    plural: samples
    singular: sample
  scope: Cluster
  versions:
  - name: v1alpha1
```

```text title="Example error output"
validating upgrade for CRD "test.example.com" failed: CustomResourceDefinition test.example.com failed upgrade safety validation. "NoScopeChange" validation failed: scope changed from "Namespaced" to "Cluster"
```

## Removal of a stored version {id="stored-version-removal_{{ context }}"}

The following example removes the existing stored version, `v1alpha1`:

```yaml title="Example removal of a stored version in a CRD"
versions:
- name: v1alpha2
  schema:
    openAPIV3Schema:
      properties:
        apiVersion:
          type: string
        kind:
          type: string
        metadata:
          type: object
        spec:
          type: object
        status:
          type: object
        pollInterval:
          type: string
      type: object
```

```text title="Example error output"
validating upgrade for CRD "test.example.com" failed: CustomResourceDefinition test.example.com failed upgrade safety validation. "NoStoredVersionRemoved" validation failed: stored version "v1alpha1" removed
```

## Removal of an existing field {id="removal-existing-field_{{ context }}"}

The following example removes the `pollInterval` property field from the `v1alpha1` schema:

```yaml title="Example removal of an existing field in a CRD"
versions:
- name: v1alpha1
  schema:
    openAPIV3Schema:
      properties:
        apiVersion:
          type: string
        kind:
          type: string
        metadata:
          type: object
        spec:
          type: object
        status:
          type: object
      type: object
```

```text title="Example error output"
validating upgrade for CRD "test.example.com" failed: CustomResourceDefinition test.example.com failed upgrade safety validation. "NoExistingFieldRemoved" validation failed: crd/test.example.com version/v1alpha1 field/^.spec.pollInterval may not be removed
```

## Addition of a required field {id="addition-required-field_{{ context }}"}

The following example changes the `pollInterval` property to a required field:

```yaml title="Example addition of a required field in a CRD"
versions:
- name: v1alpha2
  schema:
    openAPIV3Schema:
      properties:
        apiVersion:
          type: string
        kind:
          type: string
        metadata:
          type: object
        spec:
          type: object
        status:
          type: object
        pollInterval:
          type: string
      type: object
      required:
      - pollInterval
```

```text title="Example error output"
validating upgrade for CRD "test.example.com" failed: CustomResourceDefinition test.example.com failed upgrade safety validation. "ChangeValidator" validation failed: version "v1alpha1", field "^": new required fields added: [pollInterval]
```