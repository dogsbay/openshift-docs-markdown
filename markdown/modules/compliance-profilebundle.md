{%- set _mod_docs_content_type = "CONCEPT" %}
# ProfileBundle CR example {id="compliance-profilebundle_{{ context }}"}

You can configure a `ProfileBundle` to provide the Compliance Operator with the security profiles it needs to scan your cluster. {._abstract}

A `ProfileBundle` custom resource (CR) defines the container image URL in `contentImage` and the compliance content file path in `contentFile`, relative to the root of the file system.

```yaml
apiVersion: compliance.openshift.io/v1alpha1
kind: ProfileBundle
metadata:
  creationTimestamp: "2022-10-19T12:06:30Z"
  finalizers:
  - profilebundle.finalizers.compliance.openshift.io
  generation: 1
  name: rhcos4
  namespace: openshift-compliance
  resourceVersion: "46741"
  uid: 22350850-af4a-4f5c-9a42-5e7b68b82d7d
spec:
  contentFile: ssg-rhcos4-ds.xml
  contentImage: registry.redhat.io/compliance/openshift-compliance-content-rhel8@sha256:900e...
status:
  conditions:
  - lastTransitionTime: "2022-10-19T12:07:51Z"
    message: Profile bundle successfully parsed
    reason: Valid
    status: "True"
    type: Ready
  dataStreamStatus: VALID
```
where:


`spec.contentFile`
:   Specifies the location of the file containing the compliance content.

`spec.contentImage`
:   Specifies the content image location.

    :::important


    The base image used for the content images must include `coreutils`.
    
    :::