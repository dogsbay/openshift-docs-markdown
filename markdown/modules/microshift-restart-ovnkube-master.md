{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restarting the ovnkube-master pod {id="microshift-restart-ovnkube-master_{{ context }}"}

To replace the `ovnkube-master` pod with a new instance on {{ microshift_short }}, you can delete the existing pod in the `openshift-ovn-kubernetes` namespace. Confirm that a new pod appears when you list pods in that namespace. {._abstract}

**Prerequisites**

*   The OpenShift CLI (`oc`) is installed.
*   You have root access to the node.
*   A node installed on infrastructure configured with the OVN-Kubernetes network plugin.
*   The KUBECONFIG environment variable is set.

**Procedure**

1.  Access the remote node by running the following command:
    ```terminal
    $ export KUBECONFIG=$PWD/kubeconfig
    ```
1.  Find the name of the `ovnkube-master` pod that you want to restart by running the following command:
    ```terminal
    $ pod=$(oc get pods -n openshift-ovn-kubernetes | awk -F " " '/ovnkube-master/{print $1}')
    ```
1.  Delete the `ovnkube-master` pod by running the following command:
    ```terminal
    $ oc -n openshift-ovn-kubernetes delete pod $pod
    ```
1.  Confirm that a new `ovnkube-master` pod is running by using the following command:
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes
    ```

    The listing of the running pods shows a new `ovnkube-master` pod name and age.