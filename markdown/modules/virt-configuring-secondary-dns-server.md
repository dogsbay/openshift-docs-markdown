{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a DNS server for secondary networks {id="virt-configuring-secondary-dns-server_{{ context }}"}

The Cluster Network Addons Operator (CNAO) deploys a Domain Name Server (DNS) server and monitoring components when you enable the `deployKubeSecondaryDNS` feature gate in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You installed the OpenShift CLI (`oc`).
*   You configured a load balancer for the cluster.
*   You logged in to the cluster with `cluster-admin` permissions.

**Procedure**

1.  Edit the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Enable the DNS server and monitoring components according to the following example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
        featureGates:
          deployKubeSecondaryDNS: true
    # ...
    ```

    Setting `deployKubeSecondaryDNS` to `true` enables the DNS server.
1.  Save the file and exit the editor.
1.  Create a load balancer service to expose the DNS server outside the cluster by running the `oc expose` command according to the following example:
    ```terminal
    $ oc expose -n {{ CNVNamespace }} deployment/secondary-dns --name=dns-lb \
      --type=LoadBalancer --port=53 --target-port=5353 --protocol='UDP'
    ```
1.  Retrieve the external IP address by running the following command:
    ```terminal
    $ oc get service -n {{ CNVNamespace }}
    ```

    Example output:
    ```text
    NAME       TYPE             CLUSTER-IP     EXTERNAL-IP      PORT(S)          AGE
    dns-lb     LoadBalancer     172.30.27.5    10.46.41.94      53:31829/TCP     5s
    ```
1.  Edit the `HyperConverged` CR again:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the external IP address that you previously retrieved to the `kubeSecondaryDNSNameServerIP` field in the enterprise DNS server records. For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      featureGates:
        deployKubeSecondaryDNS: true
      kubeSecondaryDNSNameServerIP: "10.46.41.94"
    # ...
    ```

    Specify the external IP address exposed by the load balancer service in the `kubeSecondaryDNSNameServerIP` field.
1.  Save the file and exit the editor.
1.  Retrieve the cluster FQDN by running the following command:
    ```terminal
     $ oc get dnses.config.openshift.io cluster -o jsonpath='{.spec.baseDomain}'
    ```

    Example output:
    ```text
    openshift.example.com
    ```
1.  Point to the DNS server. To do so, add the `kubeSecondaryDNSNameServerIP` value and the cluster FQDN to the enterprise DNS server records. For example:
    ```terminal
    vm.<FQDN>. IN NS ns.vm.<FQDN>.
    ```
    ```terminal
    ns.vm.<FQDN>. IN A <kubeSecondaryDNSNameServerIP>
    ```