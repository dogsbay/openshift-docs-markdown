{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring multitenant isolation by using network policy {id="nw-networkpolicy-multitenant-isolation_{{ context }}"}

You can configure network policies to isolate workloads in a project from pods and services in other namespaces. This isolation helps control network traffic between projects and improves multitenant security in your cluster. {._abstract}

**Prerequisites**

*   Your cluster uses a network plugin that supports `NetworkPolicy` objects, such as the OVN-Kubernetes network plugin, with `mode: NetworkPolicy` set.
*   You installed the OpenShift CLI (`oc`).
*   You are logged in to the cluster with a user with `admin` privileges.

**Procedure**

1.  Create the following `NetworkPolicy` objects:
    1.  A policy named `allow-from-openshift-ingress`.
        ```terminal
        $ cat << EOF| oc create -f -
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        metadata:
          name: allow-from-openshift-ingress
        spec:
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                  policy-group.network.openshift.io/ingress: ""
          podSelector: {}
          policyTypes:
          - Ingress
        EOF
        ```

        :::note

        `policy-group.network.openshift.io/ingress: ""` is the preferred namespace selector label for OVN-Kubernetes.
        
        :::

    1.  A policy named `allow-from-openshift-monitoring`:
        ```terminal
        $ cat << EOF| oc create -f -
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        metadata:
          name: allow-from-openshift-monitoring
        spec:
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                  network.openshift.io/policy-group: monitoring
          podSelector: {}
          policyTypes:
          - Ingress
        EOF
        ```
    1.  A policy named `allow-same-namespace`:
        ```terminal
        $ cat << EOF| oc create -f -
        kind: NetworkPolicy
        apiVersion: networking.k8s.io/v1
        metadata:
          name: allow-same-namespace
        spec:
          podSelector:
          ingress:
          - from:
            - podSelector: {}
        EOF
        ```
    1.  A policy named `allow-from-kube-apiserver-operator`:
        ```terminal
        $ cat << EOF| oc create -f -
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        metadata:
          name: allow-from-kube-apiserver-operator
        spec:
          ingress:
          - from:
            - namespaceSelector:
                matchLabels:
                  kubernetes.io/metadata.name: openshift-kube-apiserver-operator
              podSelector:
                matchLabels:
                  app: kube-apiserver-operator
          policyTypes:
          - Ingress
        EOF
        ```

        For more details, see [New `kube-apiserver-operator` webhook controller validating health of webhook](https://access.redhat.com/solutions/6964520).
1.  Optional: To confirm that the network policies exist in your current project, enter the following command:
    ```terminal
    $ oc describe networkpolicy
    ```
    ```text title="Example output"
    Name:         allow-from-openshift-ingress
    Namespace:    example1
    Created on:   2020-06-09 00:28:17 -0400 EDT
    Labels:       <none>
    Annotations:  <none>
    Spec:
      PodSelector:     <none> (Allowing the specific traffic to all pods in this namespace)
      Allowing ingress traffic:
        To Port: <any> (traffic allowed to all ports)
        From:
          NamespaceSelector: policy-group.network.openshift.io/ingress:
      Not affecting egress traffic
      Policy Types: Ingress


    Name:         allow-from-openshift-monitoring
    Namespace:    example1
    Created on:   2020-06-09 00:29:57 -0400 EDT
    Labels:       <none>
    Annotations:  <none>
    Spec:
      PodSelector:     <none> (Allowing the specific traffic to all pods in this namespace)
      Allowing ingress traffic:
        To Port: <any> (traffic allowed to all ports)
        From:
          NamespaceSelector: network.openshift.io/policy-group: monitoring
      Not affecting egress traffic
      Policy Types: Ingress
    ```