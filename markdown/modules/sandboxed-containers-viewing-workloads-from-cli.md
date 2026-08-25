{%- set _mod_docs_content_type = "PROCEDURE" %}

# Viewing {{ sandboxed_containers_first }} workloads from the CLI {id="sandboxed-containers-viewing-workloads-from-cli_{{ context }}"}

You can view the `runtimeClass` that the pods for your workloads use from the CLI.

**Prerequisites**

*   You have {{ product_title }} {{ product_version }} installed on your cluster.
*   You have installed the OpenShift CLI (`oc`).
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

*   Inspect the `runtimeClassName` field on the pod to see a pod running on {{ sandboxed_containers_first }} versus a normal container.
    *   On the node, each pod has a corresponding `qemu` process.

**Verification**

*   You can check the logs of the `openshift-sandboxed-containers-operator` controller pod to see detailed messages about the steps it is running.
    *   You can retrieve the name of the controller pod by running:
        ```terminal
        $ oc get pods -n openshift-sandboxed-containers-operator | grep openshift-sandboxed-containers-operator-controller-manager
        ```

        This enables you to monitor the logs of the container manager of that pod.