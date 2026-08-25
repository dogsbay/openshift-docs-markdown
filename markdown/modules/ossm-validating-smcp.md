{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating the Service Mesh control plane installation {id="ossm-validating-smcp_{{ context }}"}

When you create the {{ SMProductShortName }} control plane, the {{ SMProductShortName }} Operator uses the parameters that you have specified in the `ServiceMeshControlPlane` resource file to do the following:

*   Creates the Istio components and deploys the following pods:
    *   `istiod`
    *   `istio-ingressgateway`
    *   `istio-egressgateway`
    *   `grafana`
    *   `prometheus`
*   Calls the Kiali Operator to create Kaili deployment based on configuration in either the SMCP or the Kiali custom resource.

    :::note

    You view the Kiali components under the Kiali Operator, not the {{ SMProductShortName }} Operator.
    
    :::

*   Calls the {{ JaegerName }} Operator to create {{ JaegerShortName }} components based on configuration in either the SMCP or the Jaeger custom resource.

    :::note

    You view the Jaeger components under the {{ JaegerName }} Operator and the Elasticsearch components under the Red Hat Elasticsearch Operator, not the {{ SMProductShortName }} Operator.
    
    :::


    **From the {{ product_title }} console**

You can verify the {{ SMProductShortName }} control plane installation in the {{ product_title }} web console.

1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Select the `istio-system` namespace.
1.  Select the {{ SMProductName }} Operator.
    1.  Click the **Istio Service Mesh Control Plane** tab.
    1.  Click the name of your control plane, for example `basic`.
    1.  To view the resources created by the deployment, click the **Resources** tab. You can use the filter to narrow your view, for example, to check that all the **Pods** have a status of `running`.
    1.  If the SMCP status indicates any problems, check the `status:` output in the YAML file for more information.
1.  Navigate back to **Ecosystem** → **Installed Operators**.
1.  Select the OpenShift Elasticsearch Operator.
    1.  Click the **Elasticsearch** tab.
    1.  Click the name of the deployment, for example `elasticsearch`.
    1.  To view the resources created by the deployment, click the **Resources** tab. .
    1.  If the `Status` column any problems, check the `status:` output on the **YAML** tab for more information.
1.  Navigate back to **Ecosystem** → **Installed Operators**.
1.  Select the {{ JaegerName }} Operator.
    1.  Click the **Jaeger** tab.
    1.  Click the name of your deployment, for example `jaeger`.
    1.  To view the resources created by the deployment, click the **Resources** tab.
    1.  If the `Status` column indicates any problems, check the `status:` output on the **YAML** tab for more information.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Select the Kiali Operator.
    1.  Click the **Istio Service Mesh Control Plane** tab.
    1.  Click the name of your deployment, for example `kiali`.
    1.  To view the resources created by the deployment, click the **Resources** tab.
    1.  If the `Status` column any problems, check the `status:` output on the **YAML** tab for more information.

**From the command line**

1.  Run the following command to see if the {{ SMProductShortName }} control plane pods are available and running, where `istio-system` is the namespace where you installed the SMCP.
    ```terminal
    $ oc get pods -n istio-system
    ```
    ```terminal title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    grafana-6776785cfc-6fz7t               2/2     Running   0          102s
    istio-egressgateway-5f49dd99-l9ppq     1/1     Running   0          103s
    istio-ingressgateway-6dc885c48-jjd8r   1/1     Running   0          103s
    istiod-basic-6c9cc55998-wg4zq          1/1     Running   0          2m14s
    jaeger-6865d5d8bf-zrfss                2/2     Running   0          100s
    kiali-579799fbb7-8mwc8                 1/1     Running   0          46s
    prometheus-5c579dfb-6qhjk              2/2     Running   0          115s
    ```
1.  Check the status of the {{ SMProductShortName }} control plane deployment by using the following command. Replace `istio-system` with the namespace where you deployed the SMCP.
    ```terminal
    $ oc get smcp -n istio-system
    ```

    The installation has finished successfully when the STATUS column is `ComponentsReady`.
    ```terminal title="Example output"
    NAME    READY   STATUS            PROFILES      VERSION   AGE
    basic   10/10   ComponentsReady   ["default"]   2.1.3     4m2s
    ```


    If you have modified and redeployed your {{ SMProductShortName }} control plane, the status should read `UpdateSuccessful`.
    ```terminal title="Example output"
    NAME            READY     STATUS             TEMPLATE   VERSION   AGE
    basic-install   10/10     UpdateSuccessful   default     v1.1     3d16h
    ```
1.  If the SMCP status indicates anything other than `ComponentsReady` check the `status:` output in the SCMP resource for more information.
    ```terminal
    $ oc describe smcp <smcp-name> -n <controlplane-namespace>
    ```
    ```terminal title="Example output"
    $ oc describe smcp basic -n istio-system
    ```
1.  Check the status of the Jaeger deployment with the following command, where `istio-system` is the namespace where you deployed the SMCP.
    ```terminal
    $ oc get jaeger -n istio-system
    ```
    ```terminal title="Example output"
    NAME     STATUS    VERSION   STRATEGY   STORAGE   AGE
    jaeger   Running   1.30.0    allinone   memory    15m
    ```
1.  Check the status of the Kiali deployment with the following command, where `istio-system` is the namespace where you deployed the SMCP.
    ```terminal
    $ oc get kiali -n istio-system
    ```
    ```terminal title="Example output"
    NAME    AGE
    kiali   15m
    ```