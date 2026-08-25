{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assign an egress IP to a namespace {id="cloud-experts-consistent-egress-ip-assign-ip-namespace_{{ context }}"}

Assign an egress IP to a namespace on your cluster to ensure that all pods inside it use a consistent, predictable address for external connections. {._abstract}

**Procedure**

1.  Create a new project by running the following command:
    ```terminal
    $ oc new-project demo-egress-ns
    ```
1.  Create the egress rule for all pods within the namespace by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: k8s.ovn.org/v1
    kind: EgressIP
    metadata:
      name: demo-egress-ns
    spec:
      # NOTE: these egress IPs are within the subnet range(s) in which my worker nodes
      #       are deployed.
      egressIPs:
        - 10.10.100.253
        - 10.10.150.253
        - 10.10.200.253
      namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: demo-egress-ns
    EOF
    ```