{%- set _mod_docs_content_type = "PROCEDURE" %}
# Assign an egress IP to a pod {id="cloud-experts-consistent-egress-ip-assigning-to-pod_{{ context }}"}

Create an egress rule to assign a consistent egress IP to a specified pod so that its outbound traffic uses a predictable IP. {._abstract}

**Procedure**

1.  Create a new project by running the following command:
    ```terminal
    $ oc new-project demo-egress-pod
    ```
1.  Create the egress rule for the pod by running the following command:

    :::note

    `spec.namespaceSelector` is a mandatory field.
    
    :::

    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: k8s.ovn.org/v1
    kind: EgressIP
    metadata:
      name: demo-egress-pod
    spec:
      # NOTE: these egress IPs are within the subnet range(s) in which my worker nodes
      #       are deployed.
      egressIPs:
        - 10.10.100.254
        - 10.10.150.254
        - 10.10.200.254
      namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: demo-egress-pod
      podSelector:
        matchLabels:
          run: demo-egress-pod
    EOF
    ```