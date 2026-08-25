{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling access to a build strategy globally {id="builds-disabling-build-strategy-globally_{{ context }}"}

To prevent access to a particular build strategy globally, log in as a user with cluster administrator privileges, remove the corresponding role from the `system:authenticated` group, and apply the annotation `rbac.authorization.kubernetes.io/autoupdate: "false"` to protect them from changes between the API restarts. The following example shows disabling the docker build strategy.

**Procedure**

1.  Apply the `rbac.authorization.kubernetes.io/autoupdate` annotation by entering the following command:
    ```terminal
    $ oc annotate clusterrolebinding.rbac system:build-strategy-docker-binding 'rbac.authorization.kubernetes.io/autoupdate=false' --overwrite
    ```
1.  Remove the role by entering the following command:
    ```terminal
    $ oc adm policy remove-cluster-role-from-group system:build-strategy-docker system:authenticated
    ```
1.  Ensure the build strategy subresources are also removed from the `admin` and `edit` user roles:
    ```terminal
    $ oc get clusterrole admin -o yaml | grep "builds/docker"
    ```
    ```terminal
    $ oc get clusterrole edit -o yaml | grep "builds/docker"
    ```