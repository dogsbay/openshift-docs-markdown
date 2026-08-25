{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom DNS host name to resolve DNS connectivity issues {id="k8s-nmstate-troubleshooting-dns-disconnected-env-resolv_{{ context }}"}

In a disconnected environment where the external DNS server cannot be reached, you can resolve Kubernetes NMState Operator health probe issues by specifying a custom DNS host name in the `NMState` custom resource definition (CRD).  {._abstract}

**Procedure**

1.  Add the DNS host name configuration to the `NMState` CRD of your cluster:
    ```yaml
    apiVersion: nmstate.io/v1
    kind: NMState
    metadata:
      name: nmstate
    spec:
      probeConfiguration:
        dns:
          host: redhat.com
    # ...
    ```
1.  Apply the DNS host name configuration to your cluster network by running the following command. Ensure that you replace `<filename>` with the name of your CRD file.
    ```yaml
    $ oc apply -f <filename>.yaml
    ```