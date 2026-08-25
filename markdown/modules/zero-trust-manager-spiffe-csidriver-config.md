{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the SPIFFE Container Storage Interface driver {id="zero-trust-manager-spire-csidriver-config_{{ context }}"}

Configure the Container Storage Interface (CSI) driver using the `SpiffeCSIDriver` CR. This configuration mounts SPIFFE sockets directly into workload pods, which allows your applications to access the SPIFFE Workload API securely. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed {{ zero_trust_full }} in the cluster.

**Procedure**

1.  Create the `SpiffeCSIDriver` CR:
    1.  Create a YAML file that defines the `SpiffeCSIDriver` CR object, for example, `SpiffeCSIDriver.yaml`:
        ```yaml title="Example SpiffeCSIDriver.yaml"
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpiffeCSIDriver
        metadata:
         name: cluster
        spec:
          agentSocketPath: "/run/spire/agent-sockets"
          pluginName: "csi.spiffe.io"
        ```

        where:

        `metadata.name`
        :   Specifies that the name must be `cluster`.


`spec.agentSocketPath`
:   Specifies the path to the directory containing the SPIRE agent’s Workload API socket. This directory is bind-mounted into workload containers by the CSI driver. The directory is shared between the SPIRE agent and CSI driver via a `hostPath` volume. Must be an absolute path with a maximum length of 256 characters. This value must match `SpireAgent.spec.socketPath` for workloads to access the socket.


`spec.pluginName`
:   Specifies the name of the CSI plugin. This sets the CSI driver name that is deployed to the cluster and used in `VolumeMount` configurations. Must match the driver name referenced in the workload pods. Must be a valid domain name format (for example, `csi.spiffe.io`) with a maximum length of 127 characters.

    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f SpiffeCSIDriver.yaml
        ```

**Verification**

*   Verify that the daemon set of the SPIFFE CSI driver is ready and available by running the following command:
    ```terminal
    $ oc get daemonset -l app.kubernetes.io/name=spiffe-csi-driver -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    spire-spiffe-csi-driver   3         3         3       3            3           <none>          114s
    ```
*   Verify that the status of SPIFFE Container Storage Interface (CSI) Driver pods is `Running` by running the following command:
    ```terminal
    $ oc get po -l app.kubernetes.io/name=spiffe-csi-driver -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                            READY   STATUS    RESTARTS   AGE
    spire-spiffe-csi-driver-gpwcp   2/2     Running   0          2m37s
    spire-spiffe-csi-driver-rrbrd   2/2     Running   0          2m37s
    spire-spiffe-csi-driver-w6s6q   2/2     Running   0          2m37s
    ```