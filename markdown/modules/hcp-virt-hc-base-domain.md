{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a hosted cluster that specifies the base domain {id="hcp-virt-hc-base-domain_{{ context }}"}

If you do not want to use the default ingress and DNS behavior, you can configure a KubeVirt hosted cluster with a unique base domain at creation time. {._abstract}

**Procedure**

1.  Create the cluster by entering the following command:
    ```terminal
    $ hcp create cluster kubevirt \
      --name <hosted_cluster_name> \
      --node-pool-replicas <worker_count> \
      --pull-secret <path_to_pull_secret> \
      --memory <value_for_memory> \
      --cores <value_for_cpu> \
      --base-domain <basedomain> \
      --arch <architecture_of_the_nodepool> \
      --release-image <ocp_release_image_for_the_cluster> \
      --image-content-sources <path_to_image_content_sources_file> \
      --additional-trust-bundle <path_to_ca_bundle_file>
    ```
    *   `--name` specifies the name of your hosted cluster.
    *   `--node-pool-replicas` specifies the worker count, for example, `2`.
    *   `--pull-secret` specifies the path to your pull secret, for example, `/user/name/pullsecret`.
    *   `--memory` specifies a value for memory, for example, `6Gi`.
    *   `--cores` specifies a value for CPU, for example, `2`.
    *   `--base-domain` specifies the base domain, for example, `hypershift.lab`.
    *   `--arch` specifies the architecture of the node pool, for example, `s390x`. The default is `amd64`.
    *   `--release-image` specifies the ocp release image for the cluster, for example, `quay.io/openshift-release-dev/ocp-release:4.20.14-multi`.
    *   `--image-content-sources` specifies the path to a file with image content sources.
    *   `--additional-trust-bundle` specifies the path to a file with user CA bundle.

        As a result, the hosted cluster has an ingress wildcard that is configured for the cluster name and the base domain, for example, `.apps.example.hypershift.lab`. The hosted cluster remains in `Partial` status because after you create a hosted cluster with unique base domain, you must configure the required DNS records and load balancer.

**Verification**

1.  View the status of your hosted cluster by entering the following command:
    ```terminal
    $ oc get --namespace clusters hostedclusters
    ```
    ```terminal title="Example output"
    NAME            VERSION   KUBECONFIG                       PROGRESS   AVAILABLE   PROGRESSING   MESSAGE
    example                   example-admin-kubeconfig         Partial    True        False         The hosted control plane is available
    ```
1.  Access the cluster by entering the following commands:
    ```terminal
    $ hcp create kubeconfig --name <hosted_cluster_name> \
      > <hosted_cluster_name>-kubeconfig
    ```
    ```terminal
    $ oc --kubeconfig <hosted_cluster_name>-kubeconfig get co
    ```
    ```terminal title="Example output"
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    console                                    <4.x.0>     False       False         False      30m     RouteHealthAvailable: failed to GET route (https://console-openshift-console.apps.example.hypershift.lab): Get "https://console-openshift-console.apps.example.hypershift.lab": dial tcp: lookup console-openshift-console.apps.example.hypershift.lab on 172.31.0.10:53: no such host
    ingress                                    <4.x.0>     True        False         True       28m     The "default" ingress controller reports Degraded=True: DegradedConditions: One or more other status conditions indicate a degraded state: CanaryChecksSucceeding=False (CanaryChecksRepetitiveFailures: Canary route checks for the default ingress controller are failing)
    ```

    Replace `<4.x.0>` with the supported {{ product_title }} version that you want to use.
1.  To fix any errors in the output, complete the steps in "Setting up the load balancer" and "Setting up a wildcard DNS".

    :::note

    If your hosted cluster is on bare metal, you might need MetalLB to set up load balancer services. For more information, see "Configuring MetalLB".
    
    :::