{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing creates no worker nodes {id="installing-creates-no-worker-nodes_{{ context }}"}

The installation program does not provision worker nodes directly. Instead, the Machine API Operator scales nodes up and down on supported platforms.  {._abstract}

If worker nodes are not created after 15 to 20 minutes, depending on the speed of the cluster’s internet connection, investigate the Machine API Operator.

**Procedure**

1.  Check the Machine API Operator by running the following command:
    ```terminal
    $ oc --kubeconfig=${INSTALL_DIR}/auth/kubeconfig \
       --namespace=openshift-machine-api get deployments
    ```

    If `${{ INSTALL_DIR }}`{minja} is not set in your environment, replace the value with the name of the installation directory.
    ```terminal title="Example output"
    NAME                          READY   UP-TO-DATE   AVAILABLE   AGE
    cluster-autoscaler-operator   1/1     1            1           86m
    cluster-baremetal-operator    1/1     1            1           86m
    machine-api-controllers       1/1     1            1           85m
    machine-api-operator          1/1     1            1           86m
    ```
1.  Check the machine controller logs by running the following command:
    ```terminal
    $ oc --kubeconfig=${INSTALL_DIR}/auth/kubeconfig \
         --namespace=openshift-machine-api logs deployments/machine-api-controllers \
         --container=machine-controller
    ```