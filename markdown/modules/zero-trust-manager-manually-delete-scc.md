{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually delete the custom security context constraints {id="zero-trust-manager-manually-delete-scc_{{ context }}"}

You can delete the `spire-spiffe-csi-driver` custom SCC when the SPIFFE CSI driver is ready and its pods are using the `privileged` security context constraint (SCC).  {._abstract}

**Prerequisites**

*   You have upgraded {{ zero_trust_full }} to 1.1.0 from the **OperatorHub** catalog.

**Procedure**

1.  Confirm the SPIFFE CSI driver is ready by running the following command:
    ```terminal
    $ oc get spiffecsidriver cluster -o jsonpath='{range .status.conditions[*]}{.type}={.status}{"\n"}{end}'
    ```

    The expected output includes `DaemonSetAvailable=True` and `Ready=True`.
1.  Confirm that the CSI `DaemonSet` is available by running the following command:
    ```terminal
    $ oc get ds spire-spiffe-csi-driver -n zero-trust-workload-identity-manager
    ```
1.  Confirm the CSI pods are running and are using the `privileged` SCC by running the following commands:
    ```terminal
    $ oc get pods -n zero-trust-workload-identity-manager -l app.kubernetes.io/name=spiffe-csi-driver
    ```
    ```terminal
    $ oc get pod -n zero-trust-workload-identity-manager -l app.kubernetes.io/name=spiffe-csi-driver \
        -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.metadata.annotations.openshift\.io/scc}{"\n"}{end}'
    ```

    Every pod should show `privileged`.
1.  After all checks have passed, delete the legacy custom SCC by running the following commands:
    ```terminal
    $ oc get scc spire-spiffe-csi-driver
    ```
    ```terminal
    $ oc delete scc spire-spiffe-csi-driver
    ```

    If the SCC is already absent, no action is needed.