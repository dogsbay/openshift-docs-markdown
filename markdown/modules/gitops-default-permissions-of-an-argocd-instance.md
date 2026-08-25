{%- set _mod_docs_content_type = "PROCEDURE" %}

# Default permissions of an Argocd instance {id="default-permissions-of-an-argocd-instance_{{ context }}"}

By default Argo CD instance has the following permissions:

*   Argo CD instance has the `admin` privileges to manage resources only in the namespace where it is deployed. For instance, an Argo CD instance deployed in the **foo** namespace has the `admin` privileges to manage resources only for that namespace.
*   Argo CD has the following cluster-scoped permissions because Argo CD requires cluster-wide `read` privileges on resources to function appropriately:
    ```yaml
    - verbs:
        - get
        - list
        - watch
       apiGroups:
        - /'*'
       resources:
        - /'*'
     - verbs:
        - get
        - list
       nonResourceURLs:
        - /'*'
    ```


:::note

*   You can edit the cluster roles used by the `argocd-server` and `argocd-application-controller` components where Argo CD is running such that the `write` privileges are limited to only the namespaces and resources that you wish Argo CD to manage.

```terminal
$ oc edit clusterrole argocd-server
```

```terminal
$ oc edit clusterrole argocd-application-controller
```

:::