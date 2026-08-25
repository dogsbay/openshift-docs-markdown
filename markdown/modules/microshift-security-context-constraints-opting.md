{%- set _mod_docs_content_type = "PROCEDURE" %}
# Control pod security admission synchronization {id="microshift-security-context-constraints-opting_{{ context }}"}

You can enable automatic pod security admission synchronization for most namespaces. {._abstract}

System defaults are not enforced when the `security.openshift.io/scc.podSecurityLabelSync` field is empty or set to `false`. You must set the label to `true` for synchronization to occur. You can use the `--overwrite` flag to reverse the effects of the pod security label synchronization in a namespace.


:::important

Namespaces that are defined as part of the node payload have pod security admission synchronization disabled permanently. These namespaces include:

*   `default`
*   `kube-node-lease`
*   `kube-system`
*   `kube-public`
*   `openshift`
*   All system-created namespaces that are prefixed with `openshift-`, except for `openshift-operators`
By default, all namespaces that have an `openshift-` prefix are not synchronized. You can enable synchronization for any user-created `openshift-**` namespaces. You cannot enable synchronization for any system-created `openshift-**` namespaces, except for `openshift-operators`.

If an Operator is installed in a user-created `openshift-*` namespace, synchronization is turned on by default after a node service version (CSV) is created in the namespace. The synchronized label inherits the permissions of the service accounts in the namespace.

:::


**Procedure**

*   To enable pod security admission label synchronization in a namespace, set the value of the `security.openshift.io/scc.podSecurityLabelSync` label to `true` by running the following command:
    ```terminal
    $ oc label namespace <namespace> security.openshift.io/scc.podSecurityLabelSync=true
    ```