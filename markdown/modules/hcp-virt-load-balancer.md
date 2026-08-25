{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the load balancer {id="hcp-virt-load-balancer_{{ context }}"}

Set up the load balancer service that routes ingress traffic to the KubeVirt VMs and assigns a wildcard DNS entry to the load balancer IP address. {._abstract}

**Procedure**

1.  A `NodePort` service that exposes the hosted cluster ingress already exists. You can export the node ports and create the load balancer service that targets those ports.
    1.  Get the HTTP node port by entering the following command:
        ```terminal
        $ oc --kubeconfig <hosted_cluster_name>-kubeconfig get services \
          -n openshift-ingress router-nodeport-default \
          -o jsonpath='{.spec.ports[?(@.name=="http")].nodePort}'
        ```

        Note the HTTP node port value to use in the next step.
    1.  Get the HTTPS node port by entering the following command:
        ```terminal
        $ oc --kubeconfig <hosted_cluster_name>-kubeconfig get services \
          -n openshift-ingress router-nodeport-default \
          -o jsonpath='{.spec.ports[?(@.name=="https")].nodePort}'
        ```

        Note the HTTPS node port value to use in the next step.
1.  Enter the following information in a YAML file:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: <hosted_cluster_name>
      name: <hosted_cluster_name>-apps
      namespace: clusters-<hosted_cluster_name>
    spec:
      ports:
      - name: https-443
        port: 443
        protocol: TCP
        targetPort: <https_node_port>
      - name: http-80
        port: 80
        protocol: TCP
        targetPort: <http_node_port>
      selector:
        kubevirt.io: virt-launcher
      type: LoadBalancer
    ```

    where:
    *   `<https_node_port>` specifies the HTTPS node port value that you noted in the previous step.
    *   `<http_node_port>` specifies the HTTP node port value that you noted in the previous step.
1.  Create the load balancer service by running the following command:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```