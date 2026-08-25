# Validating Operator installation {id="ossm-validating-operators_{{ context }}"}

When you install the {{ SMProductName }} Operators, OpenShift automatically creates the following objects as part of a successful Operator installation:

*   config maps
*   custom resource definitions
*   deployments
*   pods
*   replica sets
*   roles
*   role bindings
*   secrets
*   service accounts
*   services

**From the {{ product_title }} console**

You can verify that the Operator pods are available and running by using the {{ product_title }} console.

1.  Navigate to **Workloads** → **Pods**.
1.  Select the `openshift-operators` namespace.
1.  Verify that the following pods exist and have a status of `running`:
    *   `istio-operator`
    *   `jaeger-operator`
    *   `kiali-operator`
1.  Select the `openshift-operators-redhat` namespace.
1.  Verify that the `elasticsearch-operator` pod exists and has a status of `running`.

**From the command line**

1.  Verify the Operator pods are available and running in the `openshift-operators` namespace with the following command:
    ```terminal
    $ oc get pods -n openshift-operators
    ```
    ```terminal title="Example output"
    NAME                               READY   STATUS    RESTARTS   AGE
    istio-operator-bb49787db-zgr87     1/1     Running   0          15s
    jaeger-operator-7d5c4f57d8-9xphf   1/1     Running   0          2m42s
    kiali-operator-f9c8d84f4-7xh2v     1/1     Running   0          64s
    ```
1.  Verify the Elasticsearch operator with the following command:
    ```terminal
    $ oc get pods -n openshift-operators-redhat
    ```
    ```terminal title="Example output"
    NAME                                      READY   STATUS    RESTARTS   AGE
    elasticsearch-operator-d4f59b968-796vq     1/1     Running   0          15s
    ```