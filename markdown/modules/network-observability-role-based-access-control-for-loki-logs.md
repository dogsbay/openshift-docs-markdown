{%- set _mod_docs_content_type = "CONCEPT" %}
# Role-based access control for Loki logs {id="network-observability-role-based-access-control-for-loki-logs_{{ context }}"}

Configure role-based access control to grant users permission to view application, infrastructure, or audit logs in Loki. {._abstract}

By default, {{ logging }} 5.8 and later does not grant users access to logs. You must configure role-based access control to grant users permission to view specific log types.

For more information on access control for Loki logs, see: "Fine grained access for Loki logs" in the {{ clo }} documentation.

## Grant non-admin users cluster-wide log access {id="grant-non-admin-users-cluster-wide-log-access_{{ context }}"}

Add users to a custom admin group to grant cluster-wide log access without making them cluster administrators. This is useful for senior engineers who need full log visibility but should not have cluster modification privileges.

Users who are members of any group specified in the `adminGroups` field of the `LokiStack` custom resource (CR) have the same read access to logs as administrators.

```yaml title="Example LokiStack CR"
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
  name: loki
  namespace: netobserv-loki
spec:
  tenants:
    mode: openshift-network
    openshift:
      adminGroups:
      - cluster-admin
      - custom-admin-group
```

where:


`spec.tenants.mode`
:   Specifies the tenant mode. Must be `openshift-network` for network observability.

`spec.tenants.openshift.adminGroups`
:   Specifies the list of groups whose members have cluster-wide log access. Defaults to `system:cluster-admins`, `cluster-admin`, and `dedicated-admin`. Set to `[]` to disable.