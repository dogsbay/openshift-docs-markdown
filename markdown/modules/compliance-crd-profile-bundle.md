{%- set _mod_docs_content_type = "CONCEPT" %}
# ProfileBundle object {id="profile-bundle-object_{{ context }}"}

When you install the Compliance Operator, it includes ready-to-run `ProfileBundle` objects. The Compliance Operator parses the `ProfileBundle` object and creates a `Profile` object for each profile in the bundle. It also parses `Rule` and `Variable` objects, which are used by the `Profile` object. {._abstract}

```yaml title="Example ProfileBundle object"
apiVersion: compliance.openshift.io/v1alpha1
kind: ProfileBundle
  name: <profile bundle name>
  namespace: openshift-compliance
status:
  dataStreamStatus: VALID
```
where:


`status.dataStreamStatus`
:   Specifies whether the Compliance Operator was able to parse the content files. Value is `VALID` when parsing succeeds.


:::note

When the `contentFile` fails, an `errorMessage` attribute is displayed, which provides details of the error that occurred.

:::



:::note

When you roll back to a known content image from an invalid image, the `ProfileBundle` object stops responding and displays `PENDING` state. As a workaround, you can move to a different image than the earlier one or you can delete and re-create the `ProfileBundle` object to return to the working state.

:::