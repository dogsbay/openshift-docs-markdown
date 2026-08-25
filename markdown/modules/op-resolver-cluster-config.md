{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the cluster resolver {id="resolver-cluster-config_{{ context }}"}

You can change the default kind and namespace for the cluster resolver, or limit the namespaces that the cluster resolver can use.

**Procedure**

1.  To edit the `TektonConfig` custom resource, enter the following command:
    ```terminal
    $ oc edit TektonConfig config
    ```
1.  In the `TektonConfig` custom resource, edit the `pipeline.cluster-resolver-config` spec:
    ```yaml
    apiVersion: operator.tekton.dev/v1alpha1
    kind: TektonConfig
    metadata:
      name: config
    spec:
      pipeline:
        cluster-resolver-config:
          default-kind: pipeline # (1)
          default-namespace: namespace1 # (2)
          allowed-namespaces: namespace1, namespace2 # (3)
          blocked-namespaces: namespace3, namespace4 # (4)
    ```
    1.  The default resource kind to fetch, if not specified in parameters.
    1.  The default namespace for fetching resources, if not specified in parameters.
    1.  A comma-separated list of namespaces that the resolver is allowed to access. If this key is not defined, all namespaces are allowed.
    1.  An optional comma-separated list of namespaces which the resolver is blocked from accessing. If this key is not defined, all namespaces are allowed.