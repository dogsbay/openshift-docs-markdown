{% if not parent_procedure %}
{%- set _mod_docs_content_type = "SNIPPET" -%}
{%- endif %}
*   You have verified that APIs for all of the applications running on your cluster are compatible with the next Y-stream release of {{ product_title }}.
For more details about compatibility, see "Verifying cluster API versions between update versions".
*   Complete the administrative acknowledgment to start the cluster update by running the following command:
    ```terminal
    $ oc adm upgrade
    ```

    If the cluster update does not complete successfully, more details about the update failure are provided in the `Reason` and `Message` sections.

    ```terminal
    Cluster version is 4.15.45

    Upgradeable=False

      Reason: MultipleReasons
      Message: Cluster should not be upgraded between minor versions for multiple reasons: AdminAckRequired,ResourceDeletesInProgress
      * Kubernetes 1.29 and therefore OpenShift 4.16 remove several APIs which require admin consideration. Please see the knowledge article https://access.redhat.com/articles/7031404 for details and instructions.
      * Cluster minor level upgrades are not allowed while resource deletions are in progress; resources=PrometheusRule "openshift-kube-apiserver/kube-apiserver-recording-rules"

    ReleaseAccepted=False

      Reason: PreconditionChecks
      Message: Preconditions failed for payload loaded version="4.16.34" image="quay.io/openshift-release-dev/ocp-release@sha256:41bb08c560f6db5039ccdf242e590e8b23049b5eb31e1c4f6021d1d520b353b8": Precondition "ClusterVersionUpgradeable" failed because of "MultipleReasons": Cluster should not be upgraded between minor versions for multiple reasons: AdminAckRequired,ResourceDeletesInProgress
      * Kubernetes 1.29 and therefore OpenShift 4.16 remove several APIs which require admin consideration. Please see the knowledge article https://access.redhat.com/articles/7031404 for details and instructions.
      * Cluster minor level upgrades are not allowed while resource deletions are in progress; resources=PrometheusRule "openshift-kube-apiserver/kube-apiserver-recording-rules"

    Upstream is unset, so the cluster will use an appropriate default.
    Channel: eus-4.16 (available channels: candidate-4.15, candidate-4.16, eus-4.16, fast-4.15, fast-4.16, stable-4.15, stable-4.16)

    Recommended updates:

      VERSION     IMAGE
      4.16.34     quay.io/openshift-release-dev/ocp-release@sha256:41bb08c560f6db5039ccdf242e590e8b23049b5eb31e1c4f6021d1d520b353b8
    ```


    :::note

    In this example, a linked Red&#160;Hat Knowledgebase article ([Preparing to upgrade to {{ product_title }} 4.16](https://access.redhat.com/articles/7031404)) provides more detail about verifying API compatibility between releases.
    
    :::

*   Verify the update by running the following command:
    ```terminal
    $ oc get configmap admin-acks -n openshift-config -o json | jq .data
    ```

    ```terminal
    {
      "ack-4.14-kube-1.28-api-removals-in-4.15": "true",
      "ack-4.15-kube-1.29-api-removals-in-4.16": "true"
    }
    ```


    :::note

    In this example, the cluster is updated from version 4.14 to 4.15, and then from 4.15 to 4.16 in a Control Plane Only update.
    
    :::