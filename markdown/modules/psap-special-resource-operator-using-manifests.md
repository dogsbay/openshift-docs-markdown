{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building and running the simple-kmod SpecialResource by using the templates from the SRO image {id="deploy-simple-kmod-using-local-chart_{{ context }}"}

The Special Resource Operator(SRO) image contains a local repository of Helm charts, including the templates for deploying the simple-kmod kernel module. In this example, the simple-kmod kernel module shows how the SRO can manage a driver container that is defined in the internal SRO repository.

**Prerequisites**

*   You have a running {{ product_title }} cluster.
*   You set the Image Registry Operator state to `Managed` for your cluster.
*   You installed the OpenShift CLI (`oc`).
*   You are logged into the OpenShift CLI as a user with `cluster-admin` privileges.
*   You installed the Node Feature Discovery (NFD) Operator.
*   You installed the Special Resource Operator.

**Procedure**

1.  To deploy the simple-kmod using the SRO image’s local Helm repository, use the following `SpecialResource` manifest. Save this YAML as `simple-kmod-local.yaml`.
    ```yaml
    apiVersion: sro.openshift.io/v1beta1
    kind: SpecialResource
    metadata:
      name: simple-kmod
    spec:
      namespace: simple-kmod
      chart:
        name: simple-kmod
        version: 0.0.1
        repository:
          name: example
          url: file:///charts/example
      set:
        kind: Values
        apiVersion: sro.openshift.io/v1beta1
        kmodNames: ["simple-kmod", "simple-procfs-kmod"]
        buildArgs:
        - name: "KMODVER"
          value: "SRO"
      driverContainer:
        source:
          git:
            ref: "master"
            uri: "https://github.com/openshift-psap/kvc-simple-kmod.git"
    ```
1.  Create the `SpecialResource`:
    ```terminal
    $ oc create -f simple-kmod-local.yaml
    ```


:::note

To remove the simple-kmod kernel module from the node, delete the simple-kmod `SpecialResource` API object using the `oc delete` command. The kernel module is unloaded when the driver container pod is deleted.

:::


**Verification**

The `simple-kmod` resources are deployed in the `simple-kmod` namespace as specified in the object manifest. After a short time, the build pod for the `simple-kmod` driver container starts running. The build completes after a few minutes, and then the driver container pods start running.

1.  Use the `oc get pods` command to display the status of the pods:

    ```terminal
    $ oc get pods -n simple-kmod
    ```
    ```terminal title="Example output"
    NAME                                                  READY   STATUS      RESTARTS   AGE
    simple-kmod-driver-build-12813789169ac0ee-1-build     0/1     Completed   0          7m12s
    simple-kmod-driver-container-12813789169ac0ee-mjsnh   1/1     Running     0          8m2s
    simple-kmod-driver-container-12813789169ac0ee-qtkff   1/1     Running     0          8m2s
    ```
1.  To display the logs of the simple-kmod driver container image build, use the `oc logs` command, along with the build pod name obtained above:
    ```terminal
    $ oc logs pod/simple-kmod-driver-build-12813789169ac0ee-1-build -n simple-kmod
    ```
1.  To verify that the simple-kmod kernel modules are loaded, execute the `lsmod` command in one of the driver container pods that was returned from the `oc get pods` command above:
    ```terminal
    $ oc exec -n simple-kmod -it pod/simple-kmod-driver-container-12813789169ac0ee-mjsnh -- lsmod | grep simple
    ```
    ```terminal title="Example output"
    simple_procfs_kmod     16384  0
    simple_kmod            16384  0
    ```


:::tip

The `sro_kind_completed_info` SRO Prometheus metric provides information about the status of the different objects being deployed, which can be useful to troubleshoot SRO CR installations. The SRO also provides other types of metrics that you can use to watch the health of your environment.

:::