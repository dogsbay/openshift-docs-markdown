{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up a wildcard DNS {id="hcp-virt-wildcard-dns_{{ context }}"}

If you are customizing the ingress and DNS for your hosted cluster, you need to set up a wildcard DNS record or CNAME that references the external IP of the load balancer service. {._abstract}

**Procedure**

1.  Get the external IP address by entering the following command:
    ```terminal
    $ oc -n clusters-<hosted_cluster_name> get service <hosted-cluster-name>-apps \
      -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
    ```
    ```terminal title="Example output"
    192.168.20.30
    ```
1.  Configure a wildcard DNS entry that references the external IP address. View the following example DNS entry:
    ```terminal
    *.apps.<hosted_cluster_name\>.<base_domain\>.
    ```

    The DNS entry must be able to route inside and outside of the cluster.
    ```terminal title="DNS resolutions example"
    dig +short test.apps.example.hypershift.lab

    192.168.20.30
    ```

**Verification**

*   Check that hosted cluster status has moved from `Partial` to `Completed` by entering the following command:
    ```terminal
    $ oc get --namespace clusters hostedclusters
    ```
    ```terminal title="Example output"
    NAME            VERSION   KUBECONFIG                       PROGRESS    AVAILABLE   PROGRESSING   MESSAGE
    example         <4.x.0>     example-admin-kubeconfig         Completed   True        False         The hosted control plane is available
    ```

    Replace `<4.x.0>` with the supported {{ product_title }} version that you want to use.