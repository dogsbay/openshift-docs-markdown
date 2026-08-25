{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting the Argo CD instances {id="go-deleting-argocd-instance_{{ context }}"}

Delete the Argo CD instances added to the namespace of the GitOps Operator.

**Procedure**

1.  In the **Terminal** type the following command:

```terminal
$ oc delete gitopsservice cluster -n openshift-gitops
```


:::note

You cannot delete an Argo CD cluster from the web console UI.

:::


After the command runs successfully all the Argo CD instances will be deleted from the `openshift-gitops` namespace.

Delete any other Argo CD instances from other namespaces using the same command:

```terminal
$ oc delete gitopsservice cluster -n <namespace>
```