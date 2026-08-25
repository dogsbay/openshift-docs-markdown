{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the audit log policy with custom rules {id="configuring-audit-policy-custom_{{ context }}"}

You can configure an audit log policy that defines custom rules. You can specify multiple groups and define which profile to use for that group. {._abstract}

These custom rules take precedence over the top-level profile field. The custom rules are evaluated from top to bottom, and the first that matches is applied.


:::important

If you set the top-level profile field to `None`, an API server, such as the Kubernetes API server, ignores custom rules and disables audit logging.

:::


**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Edit the `APIServer` resource:
    ```terminal
    $ oc edit apiserver cluster
    ```
1.  Add the `spec.audit.customRules` field:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: APIServer
    metadata:
    ...
    spec:
      audit:
        customRules:
        - group: system:authenticated:oauth
          profile: WriteRequestBodies
        - group: system:authenticated
          profile: AllRequestBodies
        profile: Default
    ```

    where:

    `customRules`
    :   Add one or more groups and specify the profile to use for that group. These custom rules take precedence over the top-level profile field. The custom rules are evaluated from top to bottom, and the first that matches is applied.

    `profile`
    :   Set to `Default`, `WriteRequestBodies`, or `AllRequestBodies`. If you do not set this top-level profile field, it defaults to the `Default` profile.

1.  Save the file to apply the changes.

**Verification**

*   Verify that a new revision of the Kubernetes API server pods is rolled out. It can take several minutes for all nodes to update to the new revision.
    ```terminal
    $ oc get kubeapiserver -o=jsonpath='{range .items[0].status.conditions[?(@.type=="NodeInstallerProgressing")]}{.reason}{"\n"}{.message}{"\n"}'
    ```

    Review the `NodeInstallerProgressing` status condition for the Kubernetes API server to verify that all nodes are at the latest revision. The output shows `AllNodesAtLatestRevision` upon successful update:
    ```terminal
    AllNodesAtLatestRevision
    3 nodes are at revision 12
    ```

    In this example, the latest revision number is `12`.

    If the output shows a message similar to one of the following messages, the update is still in progress. Wait a few minutes and try again.
    *   `3 nodes are at revision 11; 0 nodes have achieved new revision 12`
    *   `2 nodes are at revision 11; 1 nodes are at revision 12`