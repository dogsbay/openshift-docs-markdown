{%- set _mod_docs_content_type = "PROCEDURE" %}
# Displaying resulting values of worker latency profile {id="nodes-cluster-worker-latency-profiles-examining_{{ context }}"}

You can run specific commands to display the values for the worker latency profile. You can then check the displayed values for information accuracy. {._abstract}

**Procedure**

1.  Check the `default-not-ready-toleration-seconds` and `default-unreachable-toleration-seconds` fields output by the Kube API Server:
    ```terminal
    $ oc get KubeAPIServer -o yaml | grep -A 1 default-
    ```
    ```terminal title="Example output"
    default-not-ready-toleration-seconds:
    - "300"
    default-unreachable-toleration-seconds:
    - "300"
    ```
1.  Check the values of the `node-monitor-grace-period` field from the Kube Controller Manager:
    ```terminal
    $ oc get KubeControllerManager -o yaml | grep -A 1 node-monitor
    ```
    ```terminal title="Example output"
    node-monitor-grace-period:
    - 40s
    ```
1.  Check the `nodeStatusUpdateFrequency` value from the Kubelet by entering the following command. Set the directory `/host` as the root directory within the debug shell. By changing the root directory to `/host`, you can run binaries contained in the executable paths of the host.
    ```terminal
    $ oc debug node/<compute_node_name>
    ```
    ```terminal
    $ chroot /host
    ```
    ```terminal
    # cat /etc/kubernetes/kubelet.conf|grep nodeStatusUpdateFrequency
    ```
    ```terminal title="Example output"
    “nodeStatusUpdateFrequency”: “10s”
    ```

    These outputs validate the set of timing variables for the Worker Latency Profile.