{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multi-tenancy in network observability {id="network-observability-multi-tenancy_{{ context }}"}

Enable multi-tenancy in network observability by configuring cluster roles and namespace roles to grant project administrators and developers granular, restricted access to flows and metrics in Loki and Prometheus. {._abstract}

Access is enabled for project administrators. Project administrators who have limited access to some namespaces can access flows for only those namespaces.

For Developers, multi-tenancy is available for both Loki and Prometheus but requires different access rights.

**Prerequisite**

*   If you are using Loki, you have installed at least [Loki Operator version 5.7](https://catalog.redhat.com/software/containers/openshift-logging/loki-rhel8-operator/622b46bcae289285d6fcda39).
*   You must be logged in as a project administrator.

**Procedure**

*   For per-tenant access, you must have the `netobserv-loki-reader` cluster role and the `netobserv-metrics-reader` namespace role to use the developer perspective. Run the following commands for this level of access:
    ```terminal
    $ oc adm policy add-cluster-role-to-user netobserv-loki-reader <user_group_or_name>
    ```
    ```terminal
    $ oc adm policy add-role-to-user netobserv-metrics-reader <user_group_or_name> -n <namespace>
    ```
*   For cluster-wide access, non-cluster-administrators must have the `netobserv-loki-reader`, `cluster-monitoring-view`, and `netobserv-metrics-reader` cluster roles. In this scenario, you can use either the admin perspective or the developer perspective. Run the following commands for this level of access:
    ```terminal
    $ oc adm policy add-cluster-role-to-user netobserv-loki-reader <user_group_or_name>
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user cluster-monitoring-view <user_group_or_name>
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user netobserv-metrics-reader <user_group_or_name>
    ```