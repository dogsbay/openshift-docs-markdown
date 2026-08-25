{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_short }} Self-Service namespace permissions {id="oadp-self-service-namespace-permissions_{{ context }}"}

Assign namespace permissions to namespace administrators to create and manage backup, restore, and storage location resources in their assigned namespaces. This grants namespace administrators the required access for Self-Service data protection operations. {._abstract}

As a cluster administrator, ensure that a namespace admin user has editor roles assigned for the following list of objects in their namespace.

*   `nonadminbackups.oadp.openshift.io`
*   `nonadminbackupstoragelocations.oadp.openshift.io`
*   `nonadminrestores.oadp.openshift.io`
*   `nonadmindownloadrequests.oadp.openshift.io`

For more details on the namespace `admin` role, see [Default cluster roles](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ product_version }}/html/authentication_and_authorization/using-rbac#default-roles_using-rbac).

A cluster administrator can also define their own specifications so that users can have rights similar to `project` or namespace `admin` roles.

## Example RBAC YAML for backup operation {id="oadp-self-service-yaml-backup-operation_{{ context }}"}

See the following role-based access control (RBAC) YAML file example with namespace permissions for a namespace `admin` user to perform a backup operation.

```yaml title="Example RBAC manifest"
...
- apiGroups:
      - oadp.openshift.io
    resources:
      - nonadminbackups
      - nonadminrestores
      - nonadminbackupstoragelocations
      - nonadmindownloadrequests
    verbs:
      - create
      - delete
      - get
      - list
      - patch
      - update
      - watch
  - apiGroups:
      - oadp.openshift.io
    resources:
      - nonadminbackups/status
      - nonadminrestores/status
    verbs:
      - get
```