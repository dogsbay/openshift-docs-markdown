{% if openshift_enterprise or openshift_webscale or openshift_origin %}
# Updating policy definitions {id="updating-policy-definitions_{{ context }}"}

During a cluster upgrade, and on every restart of any master, the
default cluster roles are automatically reconciled to restore any missing permissions.

If you customized default cluster roles and want to ensure a role reconciliation
does not modify them, you must take the following actions.

**Procedure**

1.  Protect each role from reconciliation:
    ```
    $ oc annotate clusterrole.rbac <role_name> --overwrite rbac.authorization.kubernetes.io/autoupdate=false
    ```

    :::warning

    You must manually update the roles that contain this setting to include any new
    or required permissions after upgrading.
    
    :::

1.  Generate a default bootstrap policy template file:
    ```
    $ oc adm create-bootstrap-policy-file --filename=policy.json
    ```

    :::note

    The contents of the file vary based on the {{ product_title }} version, but the file
    contains only the default policies.
    
    :::

1.  Update the **_policy.json_** file to include any cluster role customizations.
1.  Use the policy file to automatically reconcile roles and role bindings that
are not reconcile protected:
    ```
    $ oc auth reconcile -f policy.json
    ```
1.  Reconcile Security Context Constraints:
    ```
    # oc adm policy reconcile-sccs \
        --additive-only=true \
        --confirm
    ```
{% endif %}