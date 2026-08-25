{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating cluster roles for custom resource definitions {id="crd-creating-aggregated-cluster-role_{{ context }}"}

Cluster administrators can grant permissions to existing cluster-scoped custom resource definitions (CRDs). If you use the `admin`, `edit`, and `view` default cluster roles, you can take advantage of cluster role aggregation for their rules. {._abstract}


:::important

You must explicitly assign permissions to each of these roles. The roles with more permissions do not inherit rules from roles with fewer permissions. If you assign a rule to a role, you must also assign that verb to roles that have more permissions. For example, if you grant the `get crontabs` permission to the view role, you must also grant it to the `edit` and `admin` roles. The `admin` or `edit` role is usually assigned to the user that created a project through the project template.

:::


**Prerequisites**

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
*   Create a CRD.
{% endif %}

**Procedure**

1.  Create a cluster role definition file for the CRD. The cluster role definition is a YAML file that contains the rules that apply to each cluster role. An {{ product_title }} controller adds the rules that you specify to the default cluster roles.
    ```yaml title="Example YAML file for a cluster role definition"
    kind: ClusterRole
    apiVersion: rbac.authorization.k8s.io/v1
    metadata:
      name: aggregate-cron-tabs-admin-edit
      labels:
        rbac.authorization.k8s.io/aggregate-to-admin: "true"
        rbac.authorization.k8s.io/aggregate-to-edit: "true"
    rules:
    - apiGroups: ["stable.example.com"]
      resources: ["crontabs"]
      verbs: ["get", "list", "watch", "create", "update", "patch", "delete", "deletecollection"]
    ---
    kind: ClusterRole
    apiVersion: rbac.authorization.k8s.io/v1
    metadata:
      name: aggregate-cron-tabs-view
      labels:
        # Add these permissions to the "view" default role.
        rbac.authorization.k8s.io/aggregate-to-view: "true"
        rbac.authorization.k8s.io/aggregate-to-cluster-reader: "true"
    rules:
    - apiGroups: ["stable.example.com"]
      resources: ["crontabs"]
      verbs: ["get", "list", "watch"]
    ```

    where:

    `apiVersion`
    :   Specifies the `rbac.authorization.k8s.io/v1` API.

    `metadata.name`
    :   Specifies a name for the definition.

    `metadata.labels.rbac.authorization.k8s.io/aggregate-to-admin`
    :   Specifies `"true"` to enable cluster role aggregation to the admin role.

    `metadata.labels.rbac.authorization.k8s.io/aggregate-to-edit`
    :   Specifies `"true"` to grant permissions to the edit default role.

    `rules.apiGroups`
    :   Specifies the group name of the CRD.

    `rules.resources`
    :   Specifies the plural name of the CRD that these rules apply to.

    `rules.verbs`
    :   Specifies the verbs that represent the permissions that are granted to the role. For example, apply read and write permissions to the `admin` and `edit` roles and only read permission to the `view` role.

    `metadata.labels.rbac.authorization.k8s.io/aggregate-to-view`
    :   Specifies `"true"` to grant permissions to the `view` default role.

    `metadata.labels."rbac.authorization.k8s.io/aggregate-to-cluster-reader"`
    :   Specifies `"true"` to grant permissions to the `cluster-reader` default role.

1.  Create the cluster role:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```