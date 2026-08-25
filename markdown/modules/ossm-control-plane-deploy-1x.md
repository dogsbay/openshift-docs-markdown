{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ SMProductName }} control plane {id="ossm-control-plane-deploy-1x_{{ context }}"}

The `ServiceMeshControlPlane` resource defines the configuration to be used during installation. You can deploy the default configuration provided by Red Hat or customize the `ServiceMeshControlPlane` file to fit your business needs.

You can deploy the {{ SMProductShortName }} control plane by using the {{ product_title }} web console or from the command line using the `oc` client tool.

## Deploying the control plane from the web console {id="ossm-control-plane-deploy-operatorhub_{{ context }}"}

Follow this procedure to deploy the {{ SMProductName }} control plane by using the web console.  In this example, `istio-system` is the name of the control plane project.

**Prerequisites**

*   The {{ SMProductName }} Operator must be installed.
*   Review the instructions for how to customize the {{ SMProductName }} installation.
*   An account with the `cluster-admin` role.

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role.
1.  Create a project named `istio-system`.
    1.  Navigate to **Home** → **Projects**.
    1.  Click **Create Project**.
    1.  Enter `istio-system` in the **Name** field.
    1.  Click **Create**.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  If necessary, select `istio-system` from the Project menu.  You may have to wait a few moments for the Operators to be copied to the new project.
1.  Click the {{ SMProductName }} Operator.  Under **Provided APIs**, the Operator provides links to create two resource types:
    *   A `ServiceMeshControlPlane` resource
    *   A `ServiceMeshMemberRoll` resource
1.  Under **Istio Service Mesh Control Plane** click **Create ServiceMeshControlPlane**.
1.  On the **Create Service Mesh Control Plane** page, modify the YAML for the default `ServiceMeshControlPlane` template as needed.

    :::note

    For additional information about customizing the control plane, see customizing the {{ SMProductName }} installation. For production, you _must_ change the default Jaeger template.
    
    :::

1.  Click **Create** to create the control plane.  The Operator creates pods, services, and {{ SMProductShortName }} control plane components based on your configuration parameters.
1.  Click the **Istio Service Mesh Control Plane** tab.
1.  Click the name of the new control plane.
1.  Click the **Resources** tab to see the {{ SMProductName }} control plane resources the Operator created and configured.

## Deploying the control plane from the CLI {id="ossm-control-plane-deploy-cli_{{ context }}"}

Follow this procedure to deploy the {{ SMProductName }} control plane the command line.

**Prerequisites**

*   The {{ SMProductName }} Operator must be installed.
*   Review the instructions for how to customize the {{ SMProductName }} installation.
*   An account with the `cluster-admin` role.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  Create a project named `istio-system`.
    ```terminal
    $ oc new-project istio-system
    ```
1.  Create a `ServiceMeshControlPlane` file named `istio-installation.yaml` using the example found in "Customize the {{ SMProductName }} installation". You can customize the values as needed to match your use case.  For production deployments you _must_ change the default Jaeger template.
1.  Run the following command to deploy the control plane:
    ```terminal
    $ oc create -n istio-system -f istio-installation.yaml
    ```
1.  Execute the following command to see the status of the control plane installation.
    ```terminal
    $ oc get smcp -n istio-system
    ```

    The installation has finished successfully when the STATUS column is `ComponentsReady`.
    ```
    NAME            READY   STATUS            PROFILES      VERSION   AGE
    basic-install   11/11   ComponentsReady   ["default"]   v1.1.18   4m25s
    ```
1.  Run the following command to watch the progress of the Pods during the installation process:
    ```
    $ oc get pods -n istio-system -w
    ```

    You should see output similar to the following:
    ```terminal title="Example output"
    NAME                                     READY   STATUS             RESTARTS   AGE
    grafana-7bf5764d9d-2b2f6                 2/2     Running            0          28h
    istio-citadel-576b9c5bbd-z84z4           1/1     Running            0          28h
    istio-egressgateway-5476bc4656-r4zdv     1/1     Running            0          28h
    istio-galley-7d57b47bb7-lqdxv            1/1     Running            0          28h
    istio-ingressgateway-dbb8f7f46-ct6n5     1/1     Running            0          28h
    istio-pilot-546bf69578-ccg5x             2/2     Running            0          28h
    istio-policy-77fd498655-7pvjw            2/2     Running            0          28h
    istio-sidecar-injector-df45bd899-ctxdt   1/1     Running            0          28h
    istio-telemetry-66f697d6d5-cj28l         2/2     Running            0          28h
    jaeger-896945cbc-7lqrr                   2/2     Running            0          11h
    kiali-78d9c5b87c-snjzh                   1/1     Running            0          22h
    prometheus-6dff867c97-gr2n5              2/2     Running            0          28h
    ```