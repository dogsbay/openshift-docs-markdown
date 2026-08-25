{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the SPIRE Agent {id="zero-trust-manager-spire-agent-config_{{ context }}"}

Use the `SpireAgent` custom resource to configure the SPIRE Agent `DaemonSet` on your nodes. This defines how the agent verifies workloads and manages identity attestation across your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed {{ zero_trust_full }} in the cluster.

**Procedure**

1.  Create the `SpireAgent` CR:
    1.  Create a YAML file that defines the `SpireAgent` CR, for example, `SpireAgent.yaml`:

        The following is an example of a `SpireAgent.yaml` file.
        ```yaml
        apiVersion: operator.openshift.io/v1alpha1
        kind: SpireAgent
        metadata:
         name: cluster
        spec:
          socketPath: "/run/spire/agent-sockets"
          logLevel: "info"
          logFormat: "text"
          nodeAttestor:
            k8sPSATEnabled: "true"
          workloadAttestors:
            k8sEnabled: "true"
            workloadAttestorsVerification:
              type: "auto"
              hostCertBasePath: "/etc/kubernetes"
              hostCertFileName: "kubelet-ca.crt"
            disableContainerSelectors: "false"
            useNewContainerLocator: "true"
        ```

        where:

        `metadata.name`
        :   Specifies that the value must be `cluster`.


`spec.socketPath`
:   Specifies the directory on the host where the SPIRE agent socket is created. This directory is shared with the SPIFFE CSI driver via the `hostPath` volume. Must match the `SpiffeCSIDriver.spec.agentSocketPath` for workloads to access the socket. Must be an absolute path with a maximum length of 256 characters.


`spec.logLevel`
:   Specifies the logging level for the SPIRE Server. The valid options are `debug`, `info`, `warn`, and `error`.


`spec.logFormat`
:   Specifies the logging format for the SPIRE Server. The valid options are `text` and `json`.


`spec.nodeAttestor.k8sPSATEnabled`
:   Specifies whether Kubernetes Projected Service Account Token (PSAT) node attestation is enabled. When enabled, the SPIRE agent uses K8s PSATs to prove its identity to the SPIRE server during node attestation. The valid options are `true` and `false`.


`spec.workloadAttestors.k8sEnabled`
:   Specifies whether the Kubernetes workload attestor is enabled. When enabled, the SPIRE agent can verify workload identities using Kubernetes pod information and service account tokens. The valid options are `true` and `false`.


`spec.workloadAttestors.workloadAttestorsVerification.type`
:   Specifies the kubelet certificate verification mode. The valid options are `auto`, `hostCert`, and `skip`.


`spec.workloadAttestors.workloadAttestorsVerification.hostCertBasePath`
:   Specifies the directory containing the kubelet CA certificate. Required when type is `hostCert`. Optional when type is `auto` (defaults to /etc/kubernetes if not specified).


`spec.workloadAttestors.workloadAttestorsVerification.hostCertFileName`
:   Specifies the file name for the kubelet’s CA certificate. When combined with `hostCertBasePath`, forms the full path. Required when type is `hostCert`. Optional when type is `auto`. Defaults to `kubelet-ca.crt` if not specified.


`spec.workloadAttestors.disableContainerSelectors`
:   Specifies whether to disable container selectors in the Kubernetes workload attestor. Set to `true` if using `holdApplicationUntilProxyStarts` in Istio. The valid options are `true` and `false`.


`spec.workloadAttestors.useNewContainerLocator`
:   Specifies enabling the new container locator algorithm that has support for cgroups v2. The valid options are `true` and `false`.

    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f SpireAgent.yaml
        ```

**Verification**

*   Verify that the daemon set of the SPIRE Agent is ready and available by running the following command:
    ```terminal
    $ oc get daemonset -l app.kubernetes.io/name=spire-agent -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    spire-agent   3         3         3       3            3           <none>          10m
    ```
*   Verify that the status of SPIRE Agent pods is `Running` by running the following command:
    ```terminal
    $ oc get po -l app.kubernetes.io/name=spire-agent -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                READY   STATUS    RESTARTS   AGE
    spire-agent-dp4jb   1/1     Running   0          12m
    spire-agent-nvwjm   1/1     Running   0          12m
    spire-agent-vtvlk   1/1     Running   0          12m
    ```