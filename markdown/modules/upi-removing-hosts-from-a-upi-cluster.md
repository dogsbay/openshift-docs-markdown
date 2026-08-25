{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing hosts from a user-provisioned cluster by using the BMO {id="upi-removing-hosts-from-a-upi-cluster_{{ context }}"}

You can use the Bare Metal Operator (BMO) to remove bare-metal hosts from a user-provisioned cluster.

**Prerequisites**

*   You created a user-provisioned bare-metal cluster.
*   You have baseboard management controller (BMC) access to the hosts.
*   You deployed a provisioning service in the cluster by creating a `Provisioning` CR.

**Procedure**

1.  Cordon and drain the node by running the following command:
    ```terminal
    $ oc adm drain app1 --force --ignore-daemonsets=true
    ```
    ```terminal title="Example output"
    node/app1 cordoned
    WARNING: ignoring DaemonSet-managed Pods: openshift-cluster-node-tuning-operator/tuned-tvthg, openshift-dns/dns-
    default-9q6rz, openshift-dns/node-resolver-zvt42, openshift-image-registry/node-ca-mzxth, openshift-ingress-cana
    ry/ingress-canary-qq5lf, openshift-machine-config-operator/machine-config-daemon-v79dm, openshift-monitoring/nod
    e-exporter-2vn59, openshift-multus/multus-additional-cni-plugins-wssvj, openshift-multus/multus-fn8tg, openshift
    -multus/network-metrics-daemon-5qv55, openshift-network-diagnostics/network-check-target-jqxn2, openshift-ovn-ku
    bernetes/ovnkube-node-rsvqg
    evicting pod openshift-operator-lifecycle-manager/collect-profiles-27766965-258vp
    evicting pod openshift-operator-lifecycle-manager/collect-profiles-27766950-kg5mk
    evicting pod openshift-operator-lifecycle-manager/collect-profiles-27766935-stf4s
    pod/collect-profiles-27766965-258vp evicted
    pod/collect-profiles-27766950-kg5mk evicted
    pod/collect-profiles-27766935-stf4s evicted
    node/app1 drained
    ```
1.  Delete the `customDeploy` specification from the `BareMetalHost` CR.
    1.  Edit the `BareMetalHost` CR for the host by running the following command:
        ```terminal
        $ oc edit bmh -n openshift-machine-api <host_name>
        ```
    1.  Delete the lines `spec.customDeploy` and `spec.customDeploy.method`:
        ```yaml
        ...
          customDeploy:
            method: install_coreos
        ```
    1.  Verify that the provisioning state of the host changes to `deprovisioning` by running the following command:
        ```terminal
        $ oc get bmh -A
        ```
        ```terminal title="Example output"
        NAMESPACE               NAME          STATE                    CONSUMER   ONLINE   ERROR   AGE
        openshift-machine-api   controller1   externally provisioned              true             58m
        openshift-machine-api   worker1       deprovisioning                      true             57m
        ```
1.  Delete the host by running the following command when the `BareMetalHost` state changes to `available`:
    ```terminal
    $ oc delete bmh -n openshift-machine-api <bmh_name>
    ```

    :::note

    You can run this step without having to edit the `BareMetalHost` CR. It might take some time for the `BareMetalHost` state to change from `deprovisioning` to `available`. 
    
    :::

1.  Delete the node by running the following command:
    ```terminal
    $ oc delete node <node_name>
    ```

**Verification**

*   Verify that you deleted the node by running the following command:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME          STATUS   ROLES           AGE     VERSION
    controller1   Ready    master,worker   2d23h   v1.24.0+dc5a2fd
    ```